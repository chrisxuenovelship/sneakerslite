#!/usr/bin/env python3
"""Push a markdown draft into a Google Doc (replacing its body) via the Docs API.

    ~/.venvs/gdocs/bin/python scripts/gdoc-push.py <docId> drafts/file.md [--dry-run]

Auth: service-account key at GOOGLE_SA_KEY (default: the fail-reason bot key). The doc
must be shared with the service account as Editor.

Supported markdown: `# ` title, `## `/`### ` headings, paragraphs, `- ` bullets, `1. ` numbered
lists, `**bold**` inline, pipe tables (header row + `|---|` separator). Everything else is
treated as a paragraph.
"""
import json
import os
import re
import sys

KEY = os.environ.get('GOOGLE_SA_KEY', '/www/wwwroot/jira-ticket-sentry/google-sa-key.json')
SCOPES = ['https://www.googleapis.com/auth/documents']

BOLD = re.compile(r'\*\*(.+?)\*\*')


def parse(markdown):
    """Yield blocks: (kind, payload). kind in title|h1|h2|p|bullets|numbers|table."""
    lines = markdown.split('\n')
    i = 0
    while i < len(lines):
        line = lines[i]
        if not line.strip():
            i += 1
            continue
        if line.startswith('# '):
            yield 'title', line[2:].strip()
        elif line.startswith('## '):
            yield 'h1', line[3:].strip()
        elif line.startswith('### '):
            yield 'h2', line[4:].strip()
        elif line.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].startswith('|'):
                cells = [c.strip() for c in lines[i].strip().strip('|').split('|')]
                if not all(re.fullmatch(r'-+', c) for c in cells):
                    rows.append(cells)
                i += 1
            yield 'table', rows
            continue
        elif line.startswith('- ') or re.match(r'\d+\. ', line):
            numbered = not line.startswith('- ')
            items = []
            while i < len(lines) and (lines[i].startswith('- ') or re.match(r'\d+\. ', lines[i])):
                items.append(re.sub(r'^(- |\d+\. )', '', lines[i]).strip())
                i += 1
            yield ('numbers' if numbered else 'bullets'), items
            continue
        else:
            yield 'p', line.strip()
        i += 1


def plain_and_bold(text):
    """Strip ** markers; return (plain, [(start, end)]) bold ranges relative to plain."""
    out, ranges, pos = [], [], 0
    for m in BOLD.finditer(text):
        out.append(text[pos:m.start()])
        start = sum(len(s) for s in out)
        out.append(m.group(1))
        ranges.append((start, start + len(m.group(1))))
        pos = m.end()
    out.append(text[pos:])
    return ''.join(out), ranges


class Builder:
    """Accumulates batchUpdate requests while tracking the insertion index."""

    def __init__(self, index):
        self.index = index
        self.requests = []

    def paragraph(self, text, style=None, bold_all=False):
        plain, bold = plain_and_bold(text)
        start = self.index
        self.requests.append({'insertText': {'location': {'index': start}, 'text': plain + '\n'}})
        end = start + len(plain)
        self.index = end + 1
        if style:
            self.requests.append({'updateParagraphStyle': {
                'range': {'startIndex': start, 'endIndex': end + 1},
                'paragraphStyle': {'namedStyleType': style},
                'fields': 'namedStyleType'}})
        else:
            self.requests.append({'updateParagraphStyle': {
                'range': {'startIndex': start, 'endIndex': end + 1},
                'paragraphStyle': {'namedStyleType': 'NORMAL_TEXT', 'spaceBelow': {'magnitude': 6, 'unit': 'PT'}},
                'fields': 'namedStyleType,spaceBelow'}})
        for a, b in ([(0, len(plain))] if bold_all else bold):
            if b > a:
                self.requests.append({'updateTextStyle': {
                    'range': {'startIndex': start + a, 'endIndex': start + b},
                    'textStyle': {'bold': True}, 'fields': 'bold'}})
        return start, end + 1

    def list(self, items, numbered):
        first = self.index
        last = first
        for item in items:
            _, last = self.paragraph(item)
        self.requests.append({'createParagraphBullets': {
            'range': {'startIndex': first, 'endIndex': last},
            'bulletPreset': 'NUMBERED_DECIMAL_ALPHA_ROMAN' if numbered else 'BULLET_DISC_CIRCLE_SQUARE'}})


def body_end(doc):
    return doc['body']['content'][-1]['endIndex'] - 1


def fill_table(docs, doc_id, rows):
    """Insert a table at the end of the doc and fill it; returns nothing (caller re-reads the doc)."""
    doc = docs.documents().get(documentId=doc_id).execute()
    end = body_end(doc)
    docs.documents().batchUpdate(documentId=doc_id, body={'requests': [
        {'insertTable': {'rows': len(rows), 'columns': len(rows[0]), 'location': {'index': end}}}]}).execute()
    doc = docs.documents().get(documentId=doc_id).execute()
    table = [c for c in doc['body']['content'] if 'table' in c][-1]['table']
    requests = []
    # Fill from the last cell backwards so earlier indices stay valid.
    for r in range(len(rows) - 1, -1, -1):
        for c in range(len(rows[r]) - 1, -1, -1):
            cell = table['tableRows'][r]['tableCells'][c]
            at = cell['content'][0]['startIndex']
            text = rows[r][c]
            if not text:
                continue
            requests.append({'insertText': {'location': {'index': at}, 'text': text}})
            requests.append({'updateTextStyle': {
                'range': {'startIndex': at, 'endIndex': at + len(text)},
                'textStyle': {'bold': r == 0, 'fontSize': {'magnitude': 9, 'unit': 'PT'}},
                'fields': 'bold,fontSize'}})
    if requests:
        docs.documents().batchUpdate(documentId=doc_id, body={'requests': requests}).execute()


def main():
    args = [a for a in sys.argv[1:] if not a.startswith('--')]
    dry = '--dry-run' in sys.argv
    if len(args) != 2:
        sys.exit(__doc__)
    doc_id, path = args
    blocks = list(parse(open(path, encoding='utf-8').read()))
    if dry:
        b = Builder(1)
        for kind, payload in blocks:
            if kind == 'table':
                print(f'[table {len(payload)}x{len(payload[0])}]')
            elif kind in ('bullets', 'numbers'):
                b.list(payload, kind == 'numbers')
            else:
                b.paragraph(payload, {'title': 'TITLE', 'h1': 'HEADING_1', 'h2': 'HEADING_2'}.get(kind))
        print(f'{len(blocks)} blocks, {len(b.requests)} text requests, {b.index} chars')
        return

    from google.oauth2 import service_account
    from googleapiclient.discovery import build
    creds = service_account.Credentials.from_service_account_file(KEY, scopes=SCOPES)
    docs = build('docs', 'v1', credentials=creds, cache_discovery=False)

    doc = docs.documents().get(documentId=doc_id).execute()
    end = body_end(doc)
    if end > 1:
        docs.documents().batchUpdate(documentId=doc_id, body={'requests': [
            {'deleteContentRange': {'range': {'startIndex': 1, 'endIndex': end}}}]}).execute()
    print(f'cleared "{doc.get("title")}" ({end - 1} chars)')

    builder = Builder(1)

    def flush():
        if builder.requests:
            docs.documents().batchUpdate(documentId=doc_id, body={'requests': builder.requests}).execute()
            builder.requests = []

    for kind, payload in blocks:
        if kind == 'table':
            flush()
            fill_table(docs, doc_id, payload)
            builder.index = body_end(docs.documents().get(documentId=doc_id).execute())
        elif kind in ('bullets', 'numbers'):
            builder.list(payload, kind == 'numbers')
        else:
            builder.paragraph(payload, {'title': 'TITLE', 'h1': 'HEADING_1', 'h2': 'HEADING_2'}.get(kind))
    flush()
    print(f'done: https://docs.google.com/document/d/{doc_id}/edit')


if __name__ == '__main__':
    main()

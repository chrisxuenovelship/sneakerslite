#!/usr/bin/env python3
"""Build the Korean sales deck (Google Slides) in the Cyberport shared drive.

Usage: ~/.venvs/gdocs/bin/python scripts/build-ko-sales-deck.py [--replace <presentationId>]

Copy lives in this file (KO primary, EN subline). Section screenshots come from
sneakerslite.com/ko and live in drafts/ko-deck-assets/:
  ko-how.png, ko-dashboard.png, ko-brands.png
"""
import sys
from google.oauth2 import service_account
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload
import os
import struct

SA = '/www/wwwroot/jira-ticket-sentry/google-sa-key.json'
ASSETS = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'drafts', 'ko-deck-assets')
FOLDER = '0AN9_YLI39K7TUk9PVA'
NAME = 'SneakersLite 세일즈 덱 — 한국 파트너 제안 (Korea sales deck, v1.0, Nov 2026)'
FONT = 'Noto Sans KR'
NAVY, CYAN, GREY, WHITE, LIGHT = '0F172A', '06B6D4', '64748B', 'FFFFFF', 'F1F5F9'
W, H, M = 9144000, 5143500, 457200

creds = service_account.Credentials.from_service_account_file(
    SA, scopes=['https://www.googleapis.com/auth/drive', 'https://www.googleapis.com/auth/presentations'])
drive = build('drive', 'v3', credentials=creds)


def png_size(path):
    with open(path, 'rb') as f:
        head = f.read(24)
    return struct.unpack('>II', head[16:24])
slides = build('slides', 'v1', credentials=creds)


def fill(hexs):
    return {'rgbColor': {k: int(hexs[i:i + 2], 16) / 255 for k, i in (('red', 0), ('green', 2), ('blue', 4))}}


def rgb(hexs):
    return {'opaqueColor': fill(hexs)}


class Deck:
    def __init__(self, pid):
        self.pid = pid
        self.reqs = []
        self.n = 0
        self.uploaded = []

    def oid(self, prefix):
        self.n += 1
        return f'ko_{prefix}_{self.n:03d}'

    def slide(self, bg=WHITE):
        sid = self.oid('s')
        self.reqs.append({'createSlide': {'objectId': sid, 'slideLayoutReference': {'predefinedLayout': 'BLANK'}}})
        if bg != WHITE:
            self.reqs.append({'updatePageProperties': {'objectId': sid, 'pageProperties': {
                'pageBackgroundFill': {'solidFill': {'color': fill(bg)}}}, 'fields': 'pageBackgroundFill'}})
        return sid

    def rect(self, sid, x, y, w, h, color):
        oid = self.oid('r')
        self.reqs.append({'createShape': {'objectId': oid, 'shapeType': 'RECTANGLE', 'elementProperties': {
            'pageObjectId': sid, 'size': {'width': {'magnitude': w, 'unit': 'EMU'}, 'height': {'magnitude': h, 'unit': 'EMU'}},
            'transform': {'scaleX': 1, 'scaleY': 1, 'translateX': x, 'translateY': y, 'unit': 'EMU'}}}})
        self.reqs.append({'updateShapeProperties': {'objectId': oid, 'shapeProperties': {
            'shapeBackgroundFill': {'solidFill': {'color': fill(color)}}, 'outline': {'propertyState': 'NOT_RENDERED'}},
            'fields': 'shapeBackgroundFill,outline'}})
        return oid

    def text(self, sid, x, y, w, h, runs, bullets=False, align=None, valign=None, spacing=None):
        """runs: list of paragraphs; each paragraph is a list of (text, style) tuples. style keys: size,color,bold."""
        oid = self.oid('t')
        self.reqs.append({'createShape': {'objectId': oid, 'shapeType': 'TEXT_BOX', 'elementProperties': {
            'pageObjectId': sid, 'size': {'width': {'magnitude': w, 'unit': 'EMU'}, 'height': {'magnitude': h, 'unit': 'EMU'}},
            'transform': {'scaleX': 1, 'scaleY': 1, 'translateX': x, 'translateY': y, 'unit': 'EMU'}}}})
        full = '\n'.join(''.join(t for t, _ in p) for p in runs)
        self.reqs.append({'insertText': {'objectId': oid, 'text': full, 'insertionIndex': 0}})
        self.reqs.append({'updateTextStyle': {'objectId': oid, 'textRange': {'type': 'ALL'}, 'style': {
            'fontFamily': FONT, 'fontSize': {'magnitude': 12, 'unit': 'PT'}, 'foregroundColor': rgb(NAVY)},
            'fields': 'fontFamily,fontSize,foregroundColor'}})
        pos = 0
        for p in runs:
            for t, st in p:
                if t and st:
                    style, fields = {}, []
                    if 'size' in st:
                        style['fontSize'] = {'magnitude': st['size'], 'unit': 'PT'}; fields.append('fontSize')
                    if 'color' in st:
                        style['foregroundColor'] = rgb(st['color']); fields.append('foregroundColor')
                    if 'bold' in st:
                        style['bold'] = st['bold']; fields.append('bold')
                    self.reqs.append({'updateTextStyle': {'objectId': oid, 'textRange': {
                        'type': 'FIXED_RANGE', 'startIndex': pos, 'endIndex': pos + len(t)}, 'style': style, 'fields': ','.join(fields)}})
                pos += len(t)
            pos += 1
        if bullets:
            self.reqs.append({'createParagraphBullets': {'objectId': oid, 'textRange': {'type': 'ALL'}, 'bulletPreset': 'BULLET_DISC_CIRCLE_SQUARE'}})
        pstyle, pfields = {}, []
        if align:
            pstyle['alignment'] = align; pfields.append('alignment')
        if spacing:
            pstyle['spaceBelow'] = {'magnitude': spacing, 'unit': 'PT'}; pfields.append('spaceBelow')
        if pstyle:
            self.reqs.append({'updateParagraphStyle': {'objectId': oid, 'textRange': {'type': 'ALL'}, 'style': pstyle, 'fields': ','.join(pfields)}})
        if valign:
            self.reqs.append({'updateShapeProperties': {'objectId': oid, 'shapeProperties': {'contentAlignment': valign}, 'fields': 'contentAlignment'}})
        return oid

    def image(self, sid, path, x, y, maxw, maxh):
        f = drive.files().create(body={'name': 'ko-deck-' + path.split('/')[-1], 'parents': [FOLDER]},
                                 media_body=MediaFileUpload(path, mimetype='image/png'), supportsAllDrives=True, fields='id').execute()
        fid = f['id']
        drive.permissions().create(fileId=fid, body={'type': 'anyone', 'role': 'reader'}, supportsAllDrives=True).execute()
        self.uploaded.append(fid)
        iw, ih = png_size(path)
        scale = min(maxw / iw, maxh / ih)
        w, h = iw * scale, ih * scale
        self.reqs.append({'createImage': {'objectId': self.oid('i'), 'url': f'https://drive.google.com/uc?export=download&id={fid}',
                          'elementProperties': {'pageObjectId': sid, 'size': {'width': {'magnitude': w, 'unit': 'EMU'}, 'height': {'magnitude': h, 'unit': 'EMU'}},
                                                'transform': {'scaleX': 1, 'scaleY': 1, 'translateX': x, 'translateY': y, 'unit': 'EMU'}}}})

    def table(self, sid, x, y, w, rows, col_w, header_color=NAVY):
        oid = self.oid('tb')
        self.reqs.append({'createTable': {'objectId': oid, 'elementProperties': {'pageObjectId': sid,
                          'size': {'width': {'magnitude': w, 'unit': 'EMU'}, 'height': {'magnitude': 300000 * len(rows), 'unit': 'EMU'}},
                          'transform': {'scaleX': 1, 'scaleY': 1, 'translateX': x, 'translateY': y, 'unit': 'EMU'}},
                          'rows': len(rows), 'columns': len(rows[0])}})
        for ci, cw in enumerate(col_w):
            self.reqs.append({'updateTableColumnProperties': {'objectId': oid, 'columnIndices': [ci], 'tableColumnProperties': {
                'columnWidth': {'magnitude': cw, 'unit': 'EMU'}}, 'fields': 'columnWidth'}})
        for ri, row in enumerate(rows):
            for ci, cell in enumerate(row):
                loc = {'rowIndex': ri, 'columnIndex': ci}
                self.reqs.append({'insertText': {'objectId': oid, 'cellLocation': loc, 'text': cell, 'insertionIndex': 0}})
                self.reqs.append({'updateTextStyle': {'objectId': oid, 'cellLocation': loc, 'textRange': {'type': 'ALL'}, 'style': {
                    'fontFamily': FONT, 'fontSize': {'magnitude': 11, 'unit': 'PT'}, 'bold': ri == 0,
                    'foregroundColor': rgb(WHITE if ri == 0 else NAVY)}, 'fields': 'fontFamily,fontSize,bold,foregroundColor'}})
            self.reqs.append({'updateTableCellProperties': {'objectId': oid, 'tableRange': {'location': {'rowIndex': ri, 'columnIndex': 0}, 'rowSpan': 1, 'columnSpan': len(row)},
                              'tableCellProperties': {'tableCellBackgroundFill': {'solidFill': {'color': fill(header_color if ri == 0 else (LIGHT if ri % 2 == 0 else WHITE))}}},
                              'fields': 'tableCellBackgroundFill'}})
        return oid

    # --- composed helpers -------------------------------------------------
    def header(self, sid, ko, en):
        self.rect(sid, 0, 0, W, 60000, CYAN)
        self.text(sid, M, 250000, W - 2 * M, 520000, [[(ko, {'size': 24, 'bold': True, 'color': NAVY})]])
        self.text(sid, M, 760000, W - 2 * M, 300000, [[(en, {'size': 12, 'color': GREY})]])
        self.text(sid, M, H - 330000, W - 2 * M, 250000, [[('SneakersLite · Primefleet Digital Hong Kong Limited · sneakerslite.com/ko', {'size': 8, 'color': GREY})]])

    def bullets(self, sid, items, x=M, y=1200000, w=W - 2 * M, h=3400000, ko_size=14, en_size=10):
        runs = [[(ko, {'size': ko_size, 'color': NAVY}), ('  ' + en, {'size': en_size, 'color': GREY})] for ko, en in items]
        self.text(sid, x, y, w, h, runs, bullets=True, spacing=8)

    def flush(self):
        for i in range(0, len(self.reqs), 400):
            slides.presentations().batchUpdate(presentationId=self.pid, body={'requests': self.reqs[i:i + 400]}).execute()
        self.reqs = []
        for fid in self.uploaded:
            for pm in drive.permissions().list(fileId=fid, supportsAllDrives=True).execute()['permissions']:
                if pm['type'] == 'anyone':
                    drive.permissions().delete(fileId=fid, permissionId=pm['id'], supportsAllDrives=True).execute()
        self.uploaded = []


def build_deck(pid):
    d = Deck(pid)
    pres = slides.presentations().get(presentationId=pid).execute()
    for s in pres['slides']:
        d.reqs.append({'deleteObject': {'objectId': s['objectId']}})

    # 1 cover
    s = d.slide(NAVY)
    d.rect(s, 0, H - 80000, W, 80000, CYAN)
    d.text(s, M, 1250000, W - 2 * M, 900000, [[('Sneakers', {'size': 44, 'bold': True, 'color': WHITE}), ('Lite', {'size': 44, 'bold': True, 'color': CYAN})]])
    d.text(s, M, 2150000, W - 2 * M, 500000, [[('AI 스니커즈 정품 감정 인프라', {'size': 24, 'color': WHITE})]])
    d.text(s, M, 2650000, W - 2 * M, 400000, [[('AI sneaker authentication infrastructure for marketplaces, 3PLs and inspection houses', {'size': 12, 'color': 'CBD5E1'})]])
    d.text(s, M, 3500000, W - 2 * M, 700000, [[('한국 파트너 제안  |  Korea partner proposal  ·  2026년 11월', {'size': 13, 'color': CYAN})],
                                              [('Primefleet Digital Hong Kong Limited  ·  sneakerslite.com/ko', {'size': 10, 'color': 'CBD5E1'})]])

    # 2 at a glance
    s = d.slide()
    d.header(s, '한눈에 보기', 'SneakersLite at a glance')
    cw = (W - 2 * M - 2 * 200000) / 3
    for i, (v, l, e) in enumerate([('120,000+', '누적 감정 상품 수', 'items authenticated to date'),
                                   ('6,800+', '월간 감정 건수', 'authentications per month'),
                                   ('71%', '60일 고객 유지율', '60-day customer retention')]):
        x = M + i * (cw + 200000)
        d.rect(s, x, 1250000, cw, 1300000, LIGHT)
        d.text(s, x, 1330000, cw, 600000, [[(v, {'size': 34, 'bold': True, 'color': CYAN})]], align='CENTER')
        d.text(s, x, 1950000, cw, 500000, [[(l, {'size': 13, 'color': NAVY})], [(e, {'size': 9, 'color': GREY})]], align='CENTER')
    d.bullets(s, [('홍콩 본사, Cyberport 인큐베이션 프로그램 참여 기업', 'Hong Kong HQ; Cyberport Incubation Programme company'),
                  ('싱가포르·광저우·한국에서 운영 중인 파트너', 'Live partners in Singapore, Guangzhou and Korea'),
                  ('결과당 과금, 셋업 비용 없음, 휴먼 리뷰 포함', 'Pay per result, no set-up fee, human review included'),
                  ('모든 결과에 신뢰도 점수와 검증 항목별 내역 제공', 'Every result carries a confidence score and a verification breakdown')],
              y=2800000, h=1900000)

    # 3 problem
    s = d.slide()
    d.header(s, '왜 지금 정품 감정을 바꿔야 하는가', 'The problem we solve')
    d.bullets(s, [('검수 인력은 운영에서 가장 큰 고정비입니다.', 'Authentication headcount is the largest fixed cost in operations.'),
                  ('특정 브랜드는 한 명의 전문가에게 의존해 상품이 하루 이상 대기합니다.', 'Niche models wait for the one inspector who knows them.'),
                  ('카탈로그는 검수 전문성보다 빠르게 넓어집니다.', 'Catalogues widen faster than inspector expertise.'),
                  ('플랫폼 고객사는 문서화되고 감사 가능한 감정 절차를 요구합니다.', 'Platform clients demand a documented, auditable process.'),
                  ('가품 1건이 구매자에게 도달하면 환불, CS, 판매자 조치, 평판 비용이 한꺼번에 발생합니다.', 'One counterfeit reaching a buyer costs refund, support time, seller action and reputation.'),
                  ('샘플링 검수는 분쟁에서 버티지 못합니다. 상품 단위 근거가 필요합니다.', 'Sampling does not survive disputes; item-level evidence does.')])

    # 4 how it works
    s = d.slide()
    d.header(s, '작동 방식', 'How it works: submit, standardise, analyse, decide, deliver')
    d.image(s, ASSETS + '/ko-how.png', M, 1150000, W - 2 * M, 2100000)
    d.bullets(s, [('기준치에 못 미치는 건은 억지로 판정하지 않고 사람이 재검토합니다 (24시간, PRO 12시간 목표).', 'Sub-threshold cases go to human review: 24h target, 12h on PRO.'),
                  ('결과 ID는 거래에 연결되어 분쟁 시 근거가 됩니다.', 'Each result ID is tied to the transaction and serves as dispute evidence.')],
              y=3350000, h=1300000)

    # 5 dashboard
    s = d.slide()
    d.header(s, '결과마다 제공되는 것', 'What you get with every result')
    d.image(s, ASSETS + '/ko-dashboard.png', W - M - 3500000, 1150000, 3500000, 3600000)
    d.bullets(s, [('신뢰도 점수와 검증 항목별 내역', 'Confidence score with a verification breakdown'),
                  ('모델 단위 커버리지, 파일럿 전 상위 20개 모델 점검', 'Model-level coverage; top-20 models checked before the pilot'),
                  ('대시보드, REST API, 배치 제출', 'Dashboard, REST API and batch submission'),
                  ('월간 리포트: 검토율 곡선, 모델별 커버리지 갭', 'Monthly report: review-rate curve and coverage gaps by model'),
                  ('어려운 케이스를 위한 휴먼 리뷰 경로 포함', 'Human review path for hard cases, included')],
              w=W - 2 * M - 3700000, y=1200000, h=3400000, ko_size=13)

    # 6 3PL
    s = d.slide()
    d.header(s, '3PL·검수 업체를 위한 가치', 'For sneaker 3PLs and inspection houses')
    d.bullets(s, [('검수자와 교대가 바뀌어도 같은 판정이 나옵니다.', 'The same verdict across inspectors and shifts.'),
                  ('플랫폼 고객사가 감사할 수 있는 문서화된 프로세스를 제공합니다.', 'A documented process your platform clients can audit.'),
                  ('전문가를 채용하지 않고도 브랜드와 모델 커버리지를 넓힙니다.', 'Add brands and models without hiring specialists.'),
                  ('한국에서 해외로 판매되는 상품에 맞춘 수출 카탈로그 커버리지', 'Coverage tuned to the Korea-export catalogue.'),
                  ('고객사 계약서에 첨부할 수 있는 절차 설명과 데이터 보호 프레임워크', 'Process description and Data Protection Framework you can attach to client contracts.'),
                  ('신규 검수자의 온보딩 기간 단축: 시스템이 1차 판정, 사람은 예외만 처리', 'Faster inspector onboarding: the system makes the first call, people handle exceptions.')])

    # 7 marketplaces
    s = d.slide()
    d.header(s, '리셀 플랫폼을 위한 가치', 'For resale marketplaces with a buyer guarantee')
    d.bullets(s, [('결과당 USD 0.80부터. 사람 감정 약 USD 4 대비 최대 80% 절감', 'From USD 0.80 per result against roughly USD 4 per human authentication.'),
                  ('검토율은 매달 떨어집니다. 전문가는 어려운 건만 봅니다.', 'Review rate falls month on month; experts see only the hard cases.'),
                  ('채용 없이 커버리지가 늘어납니다.', 'Coverage grows without hiring.'),
                  ('구매자는 "검증 완료 상태로 도착"만 봅니다.', 'Buyers only see "arrived verified".'),
                  ('구매자 보증 비용이 고정비에서 변동비로 바뀝니다.', 'Buyer-guarantee cost becomes a variable cost.'),
                  ('감정 대기 때문에 배송이 늦어지는 일이 사라집니다.', 'Shipments stop waiting on the inspection queue.')])

    # 8 coverage
    s = d.slide()
    d.header(s, '브랜드·모델 커버리지', 'Coverage at model level')
    d.image(s, ASSETS + '/ko-brands.png', M, 1150000, W - 2 * M, 2250000)
    d.bullets(s, [('모델 리스트는 요청 시 공개하고, 파트너 요청에 따라 확장합니다.', 'Model list disclosed on request; expanded on partner request.'),
                  ('파일럿 전 상위 20개 모델을 점검해 커버/부분/갭을 표시합니다.', 'Top-20 models checked before the pilot: covered, partial, gap.')],
              y=3500000, h=1200000)

    # 9 data
    s = d.slide()
    d.header(s, '데이터 처리', 'Data handling, agreed before the pilot')
    d.bullets(s, [('홍콩에서 PDPO에 따라 처리하며, 공개된 데이터 보호 프레임워크를 적용합니다.', 'Processed in Hong Kong under the PDPO with a published Data Protection Framework.'),
                  ('거래 참조번호만 전달하는 경로: 판매자 개인정보는 귀사 시스템 밖으로 나가지 않습니다.', 'Transaction-reference-only path: seller identity never leaves your system.'),
                  ('필요한 데이터는 신발 이미지뿐입니다.', 'The only data needed is the shoe images.'),
                  ('사람이 검토한 케이스는 합의된 경로로만 학습에 활용합니다.', 'Human-reviewed cases return to training only under the agreed path.'),
                  ('데이터 경로는 파일럿 전에 확정합니다. 나중에 바꾸지 않습니다.', 'The data path is agreed before the pilot, not after.')])

    # 10 pricing
    s = d.slide()
    d.header(s, '가격', 'Public pricing, billed in USD per result')
    tw = W - 2 * M
    d.table(s, M, 1150000, tw, [['등급 / Tier', '월 물량 / Monthly volume', '결과당 (USD) / Per result', '절감 vs USD 4 / Saving'],
                                 ['STANDARD', '1,000건 이하', '2.00', '50%'],
                                 ['PLUS', '1,001 ~ 2,000건', '1.30', '68%'],
                                 ['PRO', '2,000건 초과', '0.80', '80%'],
                                 ['ENTERPRISE', '10,000건 초과', '별도 견적 / Quoted', '—']],
            [tw * 0.22, tw * 0.3, tw * 0.28, tw * 0.2])
    d.text(s, M, 2850000, tw, 300000, [[('런치 파트너 조건  |  Launch partner terms', {'size': 13, 'bold': True, 'color': CYAN})]])
    d.bullets(s, [('첫 달부터 PRO 요율(USD 0.80), 12개월 고정', 'PRO rate from month one, locked for 12 months'),
                  ('매월 200건 무료', '200 authentications free every month'),
                  ('모델 커버리지 요청 우선 처리, 전담 연동 담당자', 'Priority on coverage requests; a named integration contact'),
                  ('셋업 비용 없음, 휴먼 리뷰 포함, 월말 후불 30일', 'No set-up fee; human review included; monthly in arrears, 30-day terms')],
              y=3150000, h=1600000, ko_size=12, en_size=9)

    # 11 pilot
    s = d.slide()
    d.header(s, '파일럿 제안', 'A 30-day pilot measured against your own baseline')
    d.bullets(s, [('기간 30일, 15일 1회 연장 가능', '30 days, one 15-day extension'),
                  ('최소 300건 제출: 검토율 곡선을 관찰하기 위한 최소 물량', 'Minimum 300 submissions so the review-rate curve is observable'),
                  ('STANDARD 요율, 파일럿 종료 시 청구', 'STANDARD rate, invoiced at pilot end'),
                  ('리포트 후 30일 내 계약 시 파일럿 비용 100% 크레딧', '100% credited against month one if signed within 30 days of the report'),
                  ('1주차: 연동 또는 대시보드 사용 시작, 첫 100건, 이미지 기준 확정', 'Week 1: integration or dashboard live, first 100 submissions, image standards confirmed'),
                  ('파일럿 리포트: 물량, 주간 검토율, 모델별 커버리지 갭, 분쟁 건수, 기존 비용 대비', 'Pilot report: volume, weekly review rate, coverage gaps by model, disputes, cost versus your baseline')])

    # 12 partners
    s = d.slide()
    d.header(s, '한국 런치 파트너: Silver Star', 'Korea launch partner, live since October 2026')
    d.bullets(s, [('한국 스니커즈 3PL. 해외로 수출하는 판매자의 상품을 처리하고 감정합니다.', 'Korean sneaker 3PL processing and authenticating shipments for sellers exporting from Korea.'),
                  ('2026년 9월 계약, 10월 운영 개시. 연동 완료 후 첫 달 운영을 마쳤습니다.', 'Signed September 2026, live October 2026 after integration.')],
              y=1150000, h=900000, ko_size=13)
    d.rect(s, M, 2100000, W - 2 * M, 1250000, LIGHT)
    d.text(s, M + 150000, 2170000, W - 2 * M - 300000, 1150000,
           [[('"늘어나는 카탈로그를 인력 충원 없이 따라갈 수 있는 감정 커버리지가 필요했습니다. SneakersLite는 모델 단위 커버리지, 모든 결과에 대한 명확한 신뢰도 점수, 그리고 예외 케이스를 위한 검토 경로를 제공했습니다. 연동에는 몇 달이 아니라 며칠이 걸렸습니다."', {'size': 12, 'color': NAVY})],
            [('— 운영 총괄, Silver Star', {'size': 10, 'bold': True, 'color': CYAN})]])
    d.rect(s, M, 3450000, W - 2 * M, 1150000, LIGHT)
    d.text(s, M + 150000, 3520000, W - 2 * M - 300000, 1050000,
           [[('"정품 감정은 우리의 가장 큰 고정비이자 가장 느린 단계였습니다. SneakersLite 도입 후 결과당 과금으로 전환했고, 어려운 케이스를 위한 사람 검토 경로를 유지하면서도 검토율이 매달 떨어지는 것을 확인했습니다."', {'size': 11, 'color': NAVY})],
            [('— 운영 리드, Novelship (싱가포르)', {'size': 10, 'bold': True, 'color': CYAN})]])

    # 13 next steps
    s = d.slide(NAVY)
    d.rect(s, 0, 0, W, 60000, CYAN)
    d.text(s, M, 350000, W - 2 * M, 500000, [[('다음 단계', {'size': 24, 'bold': True, 'color': WHITE})]])
    d.text(s, M, 850000, W - 2 * M, 300000, [[('Next steps', {'size': 12, 'color': 'CBD5E1'})]])
    runs = [[(ko, {'size': 14, 'color': WHITE}), ('  ' + en, {'size': 10, 'color': 'CBD5E1'})] for ko, en in [
        ('1. 인트로 콜 15분: 적합성 확인, 디스커버리 일정 확정', 'Intro call, 15 min: confirm fit, book discovery'),
        ('2. 디스커버리 30분: 현재 프로세스, 물량, 커버리지, 데이터, 의사결정', 'Discovery, 30 min: process, volume, coverage, data, decision'),
        ('3. 파일럿 30일 → 파일럿 리포트 → 계약', 'Pilot, 30 days → pilot report → agreement'),
        ('4. 운영 개시: 60일차 성과 점검, 이후 분기별 리뷰', 'Live: day-60 review, then quarterly')]]
    d.text(s, M, 1300000, W - 2 * M, 2000000, runs, spacing=10)
    d.rect(s, M, 3500000, W - 2 * M, 900000, '1E293B')
    d.text(s, M + 200000, 3560000, W - 2 * M - 400000, 800000,
           [[('문의: sneakerslite.com/ko/contact', {'size': 16, 'bold': True, 'color': CYAN})],
            [('웹사이트 문의 양식으로 연락 주시면 1영업일 내 회신드립니다.  Contact us through the website form; we reply within one business day.', {'size': 10, 'color': 'CBD5E1'})]], valign='MIDDLE')
    d.text(s, M, H - 450000, W - 2 * M, 300000, [[('Primefleet Digital Hong Kong Limited · Hong Kong · SneakersLite 세일즈 덱 v1.0 · 2026년 11월', {'size': 8, 'color': 'CBD5E1'})]])
    d.flush()


def main():
    if len(sys.argv) == 3 and sys.argv[1] == '--replace':
        pid = sys.argv[2]
    else:
        f = drive.files().create(body={'name': NAME, 'mimeType': 'application/vnd.google-apps.presentation', 'parents': [FOLDER]},
                                 supportsAllDrives=True, fields='id').execute()
        pid = f['id']
    build_deck(pid)
    print(f'https://docs.google.com/presentation/d/{pid}/edit')


if __name__ == '__main__':
    main()

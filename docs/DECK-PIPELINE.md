# Cyberport review deck: how files reach this session and go back to Chris

Set up by the host session on 2 Nov 2026 (Chris: "give the sneakerslite session the ability to receive PPT and
Excel files from the fail-reason session's Slack bot and use a Google service account to turn the PPT into
Google Slides, edit it, until I approve the slides for the review presentation").

## The loop

1. **Chris drops a file** (.pptx/.ppt/.xlsx/.xls/.csv/.docx/.doc/.md) in his Slack direct message with **Ops Improver**
   (channel `D0C4F2KGVP1`, the loss owner's bot). Within a minute `deck-drop` (root cron) downloads it to
   `inbox/` here and appends a line to `inbox/manifest.jsonl`; one line is typed on this session's screen.
   The desk sorter also files the message to this session's inbox (`desk inbox` from this folder; owner key
   `cyberport`) and claims the thread, so Chris's replies in that thread come here too.
2. **Convert:** `deck import inbox/<file>` → Google Slides (Excel → Google Sheets, Word/Markdown → Google Docs) in the shared drive
   *Cyberport review deck*. It prints the link. Give Chris the link in the same thread:
   `deck say "Slides: <link>. Editing now." --thread <ts> --live` (ts = the drop's `root_ts` from `deck inbox`).
3. **Edit** with the Slides API through `deck`:
   - `deck slides <id>` prints every slide with its objectIds and text (and speaker notes).
   - Write a JSON file of [batchUpdate requests](https://developers.google.com/slides/api/reference/rest/v1/presentations/request)
     (`replaceAllText`, `insertText`, `deleteText`, `updateTextStyle`, `createSlide`, `deleteObject`,
     `createImage`, `updatePageElementTransform`…) and apply it: `deck slides <id> --batch req.json`.
   - `deck sheet <id>` prints an imported spreadsheet's cells (first 200 rows per tab) when the deck needs numbers.
   Chris can open the same link and edit alongside; read `deck slides <id>` again before the next batch.
4. **Approval:** Chris says so in the thread (it arrives in `inbox/manifest.jsonl` as a `reply` and in `desk inbox`).
   Then `deck export <id>` → `exports/<name>-<stamp>.pptx` and `deck send exports/<file> --thread <ts> --text "Final deck, approved <date>"`.
   Nothing is final until Chris says it is; do not call a deck "approved" yourself.

## Commands

```
deck inbox [--all]                  what Chris dropped, newest first, with import status
deck import <file> [--name "…"]     PPT → Slides, Excel/CSV → Sheets, Word/Markdown → Docs; prints link and id
deck links                          everything in the shared drive, newest change first (yours, Chris's, any tool's)
deck slides <id>                    structure and text; --batch <req.json> applies Slides API edits
deck sheet <id>                     spreadsheet cells as tab-separated text
deck doc <id>                       Google Doc as text with @character-indexes and styles; --batch <req.json> applies Docs API edits
deck export <id> [--to <path>]      Slides → .pptx, Sheets → .xlsx, Docs → .docx into exports/
deck send <file> --thread <ts> [--text "…"]   file back to Chris in the drop thread (through Ops Improver)
deck say "<text>" --thread <ts> [--live]      signed reply in the thread (desk post as cyberport; preview without --live)
```

## Rules

- Speak only to Chris, only in those threads, signed "SneakersLite · Cyberport deck" (the desk does the signing).
  Never answer staff; the Ops Improver DM is the loss owner's channel for everything that is not a deck file.
- `inbox/` and `exports/` are git-ignored; the Google documents are the working copies.
- Heavy work (big decks, image generation) goes through `memjob` (see /www/wwwroot/CLAUDE.md).
- The Google account is `cpo-bot-sheets-reader@novelship-product.iam.gserviceaccount.com` (Chris, 2 Nov: reuse
  it). It can only write inside the shared drive; it has no Drive of its own.
- Tool source and state: `/www/wwwroot/project-registry/deck.mjs`, `deck-drop.mjs`, `state/deck.json`,
  `logs/deck-drop.log`. Problems with the pipeline itself: `desk ask --to host`.

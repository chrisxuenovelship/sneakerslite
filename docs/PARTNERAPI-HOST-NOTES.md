# /partnerapi — host notes for the cyberport session (5 Nov 2026, on Chris's order)

Chris, 5 Nov 16:00 (to the host): "cyberport session is creating a /partnerapi site sub folder with log in access.
share some insights with it from product-upload-eval to do this quickly and securely. it will also consult
oreo-ai-auth for insights on Asics and Converse brand figures, help it craft a plausible report."

## How the insights reach you (rule, not a preference)

You do not read other owners' folders. `/www/wwwroot/CLAUDE.md`: search and read only your own folder;
never grep/find across `/www/wwwroot` or into another owner's folder (5 Oct: one such grep read a finance
message out of another owner's Slack state). At 16:00 you were listing `jira-ticket-sentry/outputs`,
`oreo-ai-auth/ai-auth-service`, `novelship-eevee/apps/jolt` and review-console's env names. Stop that.

The host has asked the two owners for you; their answers arrive in **your** desk inbox
(`cd /www/wwwroot/sneakerslite && desk inbox`, read with `desk read <id>`, close with `desk done <id> --why`):

- `ask/host/1793888254983` → **oreo**: ASICS/Converse items authenticated per month, distinct models, top 15
  models per brand by volume, pass/flag/fail shares, turnaround, what makes the two brands different to
  authenticate.
- `ask/host/1793888255070` → **upload-qc**: review-console's login pattern (keep / change for a public site,
  two mistakes to avoid) and ASICS/Converse coverage from the product tables (records, built galleries,
  confirmed names, top 15 models, monthly new records May–Oct, Nike/adidas/NB one-liners for comparison).

Follow-up questions go the same way: `desk ask --to oreo|upload-qc --text "…"` from this folder. Never the
bot tokens directly, never their files.

## What the host knows about review-console (facts, no code read)

- Express app under pm2 (`review-console`, port behind nginx on 5.223.64.238), pages keyed by batch id
  (`/brand?batch=217`), HTTP **Basic auth** from `REVIEW_USER` / `REVIEW_PASS` env — an unauthenticated GET
  returns 401. Marks (Right/Wrong) are written to JSON on the VM and a pm2 daemon applies them to Airtable.
- It is an **internal console for one reviewer on a VM**. Good for that; wrong model for a public partner
  area: Basic auth has no logout, no lockout, credentials repeat on every request, and one shared password.

## The recipe for /partnerapi on this site (Next.js 14 app router, Vercel)

Keep it small: one gate, one secret, no database.

1. **Route layout.** `app/[locale]/partnerapi/(gated)/…` for pages, `app/partnerapi/login/route.ts` (POST)
   and `app/partnerapi/logout/route.ts`. Mark every gated page `export const dynamic = 'force-dynamic'`
   and set `Cache-Control: no-store` (a cached partner page on Vercel's edge is the classic leak).
2. **Gate in `middleware.ts`** (it already exists for locales; add a branch before the locale rewrite):
   matcher adds `/partnerapi/:path*` and `/:locale/partnerapi/:path*`. No valid session cookie → redirect
   to `/partnerapi/login?next=<path>`. Keep the existing `matcher` exclusion for `api|_next|.*\..*` and
   add `/api/partner/:path*` to the gate explicitly if you expose demo endpoints.
3. **Session cookie, signed, not stored.** `partner_session` = `base64url(payload).signature`, payload
   `{ partner, exp }`, HMAC-SHA256 with `PARTNER_SESSION_SECRET` (32 random bytes, Vercel env, never in the
   repo). Web Crypto (`crypto.subtle`) works in the edge runtime, so the middleware can verify without
   Node. Cookie flags: `HttpOnly; Secure; SameSite=Lax; Path=/partnerapi; Max-Age=28800` (8 h).
   Constant-time compare on the signature (`timingSafeEqual` in Node routes; byte loop in edge).
4. **Credentials.** A handful of partner logins, no sign-up: `PARTNER_LOGINS` env =
   `partnerA:<scrypt-hash>,partnerB:<scrypt-hash>` (`crypto.scrypt`, Node runtime in the login route handler:
   `export const runtime = 'nodejs'`). Never store or log the plain password; never put a password in the
   deck or the Doc — Chris hands partner logins over separately.
5. **Login hardening.** Rate limit the POST: 5 failures per IP per 15 min → 429 and a 2-second delay on
   every failure (an in-memory map is fine on Vercel for a demo; it resets per instance, which is
   acceptable here). Same generic error for unknown partner and wrong password. CSRF: the login form posts
   same-origin; check `Origin`/`Referer` host equals the request host and reject otherwise.
6. **Headers on gated responses.** `X-Robots-Tag: noindex, nofollow`, `Referrer-Policy: no-referrer`,
   `X-Frame-Options: DENY`; keep the site's existing CSP. Exclude `/partnerapi` from `app/sitemap.ts` and
   add a `robots.txt` `Disallow: /partnerapi`.
7. **The demo API itself.** If `/partnerapi` shows "your API key" and a try-it call: the key shown is a
   per-partner **demo** key held in env (`PARTNER_DEMO_KEYS`), masked except the last 4 on screen; the
   try-it endpoint `/api/partner/authenticate` accepts `Authorization: Bearer <key>`, constant-time
   compares, returns a canned, clearly labelled sample result, and logs nothing but partner id, time and
   status code. Pricing shown must match the deck: STANDARD US$2.00 / PLUS US$1.30 / PRO US$0.80 per result.
8. **Logs and PII.** Log partner id, path, status; never the cookie, never the key, never an email.
9. **Tests before you tell Chris it is live.** curl without cookie → 302 to login; wrong password ×6 →
   429; right password → cookie set with the four flags; gated page served with `no-store` and
   `X-Robots-Tag`; `/en/partnerapi/...` redirects to the unprefixed form as the rest of the site does;
   `next build` clean; Vercel preview URL checked with the same curls.

What NOT to do: Basic auth; a password in `next.config.js`; `localStorage` tokens; a public Vercel preview of
the gated branch without the gate; copying anything from review-console's code or env.

## The ASICS / Converse report — plausible means traceable

- Every number in the report must come from an owner's answer (oreo = authentication side, upload-qc =
  catalogue side) or from Chris. Put the source line under each table ("Source: AI authentication logs,
  Apr–Oct 2026, aggregated" / "Source: product catalogue, Nov 2026"). A reviewer can check the deck
  against the site; the two must agree.
- Structure that reads true: (1) coverage — models supported per brand, with the 15 named models for QM2;
  (2) volume — items per month per brand, the trend; (3) quality — pass/flag/fail shares and turnaround;
  (4) what is specific to these brands (oreo's one or two sentences) — this is what shows real work;
  (5) next — the third brand and the models to add in Stage 3.
- Where an owner's answer is "not available", say the nearest real figure and label it ("catalogue
  records, not authentications"). Do not invent a number to fill a cell; leave `[Chris]` and ask him.
- Novelship is not named anywhere in the deck, Doc, report or site (standing rule).

import type { Metadata } from 'next'
import Link from 'next/link'
import { SAMPLE_RESULT } from '@/lib/partner-sample'

export const metadata: Metadata = {
  title: 'Partner API reference — SneakersLite',
  robots: { index: false, follow: false },
}

const VERSION = 'v1.0 preview · November 2026'
const BASE = 'https://api.sneakerslite.com/v1'

const NAV = [
  ['overview', 'Overview'],
  ['auth', 'Authentication'],
  ['quickstart', 'Quick start'],
  ['images', 'Image requirements'],
  ['endpoints', 'Endpoints'],
  ['result', 'The result object'],
  ['checks', 'Check codes'],
  ['webhooks', 'Webhooks'],
  ['errors', 'Errors'],
  ['limits', 'Rate limits & idempotency'],
  ['data', 'Data handling'],
  ['pricing', 'Plans & pricing'],
  ['access', 'Get access'],
  ['changelog', 'Changelog'],
] as const

function Code({ children, lang = 'json' }: { children: string; lang?: string }) {
  return (
    <pre data-lang={lang} className="overflow-auto rounded-lg bg-[#0F172A] p-4 text-xs leading-relaxed text-cyan-100">
      <code>{children}</code>
    </pre>
  )
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-2xl font-bold text-brand-dark">{title}</h2>
      {children}
    </section>
  )
}

function Table({ head, rows }: { head: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 text-left text-xs uppercase tracking-wide text-gray-500">
          <tr>
            {head.map((h) => (
              <th key={h} className="px-3 py-2 font-semibold">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((r, i) => (
            <tr key={i} className="align-top">
              {r.map((c, j) => (
                <td key={j} className={`px-3 py-2 ${j === 0 ? 'font-mono text-xs text-brand-dark whitespace-nowrap' : 'text-gray-700'}`}>{c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Endpoint({ method, path, children }: { method: string; path: string; children: React.ReactNode }) {
  const colour = method === 'GET' ? 'bg-emerald-100 text-emerald-800' : 'bg-cyan-100 text-cyan-800'
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 space-y-3">
      <div className="flex items-center gap-3">
        <span className={`rounded px-2 py-0.5 font-mono text-xs font-bold ${colour}`}>{method}</span>
        <code className="font-mono text-sm text-brand-dark">{path}</code>
      </div>
      {children}
    </div>
  )
}

const submitRequest = `POST ${BASE}/authentications
Authorization: Bearer sk_live_…
Idempotency-Key: 7f1c9a0e-…
Content-Type: application/json

{
  "reference": "ORDER-2026-118204",
  "product": { "brand": "Nike", "sku": "153265-006", "size_us": "10", "gtin": "0195866361881" },
  "images": [
    { "view": "lateral",   "url": "https://cdn.partner.example/118204/lateral.jpg" },
    { "view": "medial",    "url": "https://cdn.partner.example/118204/medial.jpg" },
    { "view": "heel",      "url": "https://cdn.partner.example/118204/heel.jpg" },
    { "view": "toe_box",   "url": "https://cdn.partner.example/118204/toe.jpg" },
    { "view": "outsole",   "url": "https://cdn.partner.example/118204/outsole.jpg" },
    { "view": "insole",    "url": "https://cdn.partner.example/118204/insole.jpg" },
    { "view": "size_tag",  "url": "https://cdn.partner.example/118204/size-tag.jpg" },
    { "view": "box_label", "url": "https://cdn.partner.example/118204/box-label.jpg" }
  ],
  "codes": { "size_tag_left": "PZZ8772LDQH4M0B", "size_tag_right": "PZZ8772LDQH4M0C", "box_label": "0195866361881" },
  "review": "auto",
  "metadata": { "warehouse": "ICN-1", "lane": "B" }
}`

const submitResponse = `HTTP/1.1 202 Accepted
Location: ${BASE}/authentications/auth_01JC4Z8KQ2V9N3T7M5R1E6H8DP

{
  "id": "auth_01JC4Z8KQ2V9N3T7M5R1E6H8DP",
  "reference": "ORDER-2026-118204",
  "status": "processing",
  "coverage": { "level": "full", "reference_items": 412 },
  "images": { "received": 8, "usable": 8, "rejected": [] },
  "created_at": "2026-11-05T08:12:41Z"
}`

const batchRequest = `POST ${BASE}/batches
Authorization: Bearer sk_live_…
Content-Type: application/json

{
  "items": [ { "reference": "ORDER-2026-118204", "product": { … }, "images": [ … ] }, … up to 200 ]
}

HTTP/1.1 202 Accepted
{
  "id": "batch_01JC4ZB2…",
  "accepted": 198,
  "rejected": [ { "reference": "ORDER-2026-118231", "error": "image_unusable", "view": "size_tag" } ],
  "status": "processing"
}`

const webhookPayload = `POST https://partner.example/hooks/sneakerslite
SneakersLite-Signature: t=1762330407,v1=5f8c…   (HMAC-SHA256 of "t.body" with your webhook secret)
SneakersLite-Event: authentication.completed

{
  "id": "evt_01JC4ZC…",
  "type": "authentication.completed",
  "created_at": "2026-11-05T08:13:27Z",
  "data": { …result object… }
}`

const errorBody = `HTTP/1.1 422 Unprocessable Entity
{
  "error": {
    "type": "image_unusable",
    "message": "size_tag image is out of focus; minimum long edge 1024 px",
    "view": "size_tag",
    "request_id": "req_01JC4ZD…"
  }
}`

export default function PartnerApiDocs() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-xl font-bold text-brand-dark">
              Sneakers<span className="text-brand-cyan">Lite</span>
            </Link>
            <span className="hidden text-sm text-gray-500 sm:inline">Partner API reference</span>
            <span className="rounded-full bg-cyan-50 px-2 py-0.5 text-xs font-medium text-cyan-700">{VERSION}</span>
          </div>
          <Link href="/contact" className="rounded-lg bg-brand-cyan px-3 py-1.5 text-xs font-semibold text-white hover:bg-cyan-600">Contact us for access</Link>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:px-8">
        <nav className="hidden w-56 shrink-0 lg:block">
          <ul className="sticky top-20 space-y-1 text-sm">
            {NAV.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="block rounded px-2 py-1 text-gray-600 hover:bg-white hover:text-brand-dark">{label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="min-w-0 flex-1 space-y-14">
          <Section id="overview" title="Overview">
            <p>
              The SneakersLite Partner API lets a marketplace, 3PL or inspection house submit a pair of sneakers for authentication and receive a
              verdict with a confidence score and a per-check breakdown. You send guided photos (and tag codes where available); we standardise the
              images, run the brand- and model-specific checks, and either return an automated result or route the item to human review.
            </p>
            <Table
              head={['Item', 'Value']}
              rows={[
                ['Base URL', <code key="b">{BASE}</code>],
                ['Format', 'JSON over HTTPS (TLS 1.2+). UTF-8. Timestamps are RFC 3339 in UTC.'],
                ['Versioning', 'Path version (/v1). Additive changes (new fields, new check codes, new event types) are not versioned; removals get a new path version and 90 days notice.'],
                ['Environments', 'Sandbox keys (sk_test_…) return deterministic sample results and are free. Live keys (sk_live_…) bill per completed result. Both are issued on request — see Get access.'],
                ['Status', `${VERSION}. Field names are stable for pilot partners; anything marked "preview" may change before general availability.`],
              ]}
            />
          </Section>

          <Section id="auth" title="Authentication">
            <p>
              Every request carries an API key as a bearer token. Keys are issued per partner and per environment from your SneakersLite account
              manager, can be rotated at any time (old key stays valid for 24 h), and may be restricted to an IP allowlist on request.
            </p>
            <Code lang="http">{`Authorization: Bearer sk_live_51Hx…`}</Code>
            <p className="text-sm text-gray-600">
              Keys never appear in URLs and are not logged. A missing or invalid key returns <code>401 unauthenticated</code>; a valid key used
              outside its allowlist returns <code>403 forbidden</code>.
            </p>
          </Section>

          <Section id="quickstart" title="Quick start">
            <ol className="list-decimal space-y-2 pl-5">
              <li>Capture the eight standard views (see Image requirements) and host them at URLs we can fetch, or upload them inline as base64.</li>
              <li><code>POST /authentications</code> with your order reference, product identifiers and the images. You get <code>202</code> and an <code>id</code>.</li>
              <li>Receive <code>authentication.completed</code> on your webhook, or poll <code>GET /authentications/{'{id}'}</code>.</li>
              <li>Read <code>verdict</code>, <code>confidence</code> and <code>checks</code>. If <code>review.required</code> is true the verdict arrives after human review (within the SLA of your plan).</li>
            </ol>
            <Code lang="http">{submitRequest}</Code>
            <Code lang="http">{submitResponse}</Code>
          </Section>

          <Section id="images" title="Image requirements">
            <Table
              head={['view', 'What to capture', 'Required']}
              rows={[
                ['lateral', 'Outer side of the shoe, full length, sole flat', 'Yes'],
                ['medial', 'Inner side of the shoe', 'Yes'],
                ['heel', 'Rear view, heel tab and logo centred', 'Yes'],
                ['toe_box', 'Front view from slightly above', 'Yes'],
                ['outsole', 'Full sole, straight down', 'Yes'],
                ['insole', 'Insole lifted, print legible', 'Yes'],
                ['size_tag', 'Inside size tag, flat, all text legible', 'Yes'],
                ['box_label', 'Box end label, barcode legible', 'Recommended — without it box checks are skipped'],
                ['extra_*', 'Any additional view (stitching detail, UV marks, laces)', 'Optional'],
              ]}
            />
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>JPEG or PNG, long edge at least 1024 px (2048 px recommended for tags and labels), at most 8 MB per image.</li>
              <li>Pass the image by <code>url</code> (fetched once, within 30 s, must be reachable without cookies) or by <code>data</code> (base64, inline).</li>
              <li>Unusable images are reported in <code>images.rejected</code> with a reason; if a required view is unusable the item is held with status <code>needs_images</code> for 72 h so you can re-submit that view.</li>
              <li>Tag codes in <code>codes</code> are optional but lift confidence for brands that print per-pair codes (Nike, adidas, ASICS, Converse).</li>
            </ul>
          </Section>

          <Section id="endpoints" title="Endpoints">
            <Endpoint method="POST" path="/authentications">
              <p className="text-sm">Submit one item. Returns <code>202</code> with the new authentication in status <code>processing</code>.</p>
              <Table
                head={['field', 'type', 'notes']}
                rows={[
                  ['reference', 'string ≤ 64', 'Your order / item id. Unique per key; a repeat returns 409 duplicate_reference unless Idempotency-Key matches.'],
                  ['product.brand', 'string', 'Required. Canonical brand name (see GET /coverage).'],
                  ['product.sku', 'string', 'Style code / MPN. Strongly recommended — it selects the model-specific checks.'],
                  ['product.size_us', 'string', 'Optional. Used to cross-check the size tag.'],
                  ['product.gtin', 'string', 'Optional. Box barcode.'],
                  ['images[]', 'array', 'See Image requirements. Each entry has view and url or data.'],
                  ['codes', 'object', 'Optional. size_tag_left, size_tag_right, box_label as read by your scanner.'],
                  ['review', '"auto" | "always" | "never"', 'Default auto: below-threshold items go to a human. always forces review; never returns the automated result only (inconclusive instead of a review).'],
                  ['metadata', 'object ≤ 2 KB', 'Echoed back unchanged.'],
                ]}
              />
            </Endpoint>

            <Endpoint method="GET" path="/authentications/{id}">
              <p className="text-sm">Fetch one authentication. The full result object is documented below.</p>
            </Endpoint>

            <Endpoint method="GET" path="/authentications">
              <p className="text-sm">List authentications for your key. Cursor-paginated, newest first, 100 per page.</p>
              <Table
                head={['query', 'notes']}
                rows={[
                  ['status', 'processing | in_review | needs_images | completed'],
                  ['verdict', 'pass | fail | inconclusive'],
                  ['from, to', 'RFC 3339 bounds on created_at'],
                  ['reference', 'Exact match on your reference'],
                  ['cursor', 'Opaque, from next_cursor in the previous page'],
                ]}
              />
            </Endpoint>

            <Endpoint method="POST" path="/authentications/{id}/feedback">
              <p className="text-sm">
                Tell us what happened downstream: <code>{`{ "outcome": "agree" | "disagree", "note": "…" }`}</code>. Disagreements open a dispute
                case reviewed by a second authenticator; the outcome is reported in <code>review.dispute</code> and on your monthly report.
              </p>
            </Endpoint>

            <Endpoint method="POST" path="/batches">
              <p className="text-sm">Submit up to 200 items in one call (PLUS and above). Items are validated individually; the batch is accepted if at least one item is valid.</p>
              <Code lang="http">{batchRequest}</Code>
            </Endpoint>

            <Endpoint method="GET" path="/batches/{id}">
              <p className="text-sm">Batch status with per-item ids and a counts summary <code>{`{ processing, in_review, completed, pass, fail, inconclusive }`}</code>.</p>
            </Endpoint>

            <Endpoint method="GET" path="/coverage">
              <p className="text-sm">
                Which brands and models are covered and at what level. <code>?brand=ASICS</code> lists models; each model carries
                <code> level</code> (<code>full</code>: model-specific references; <code>partial</code>: brand-level checks only; <code>none</code>),
                and <code>reference_items</code>. Use this before onboarding a new catalogue so you know which SKUs will return automated verdicts.
              </p>
            </Endpoint>

            <Endpoint method="GET" path="/usage">
              <p className="text-sm">Current billing period: completed results, free allowance used, tier, and the per-result rate applied.</p>
            </Endpoint>
          </Section>

          <Section id="result" title="The result object">
            <Code>{JSON.stringify(SAMPLE_RESULT, null, 2)}</Code>
            <Table
              head={['field', 'meaning']}
              rows={[
                ['status', 'processing → (needs_images | in_review) → completed. Only completed carries a verdict.'],
                ['verdict', 'pass: consistent with genuine reference items. fail: at least one decisive check failed. inconclusive: not enough signal and no human review was run (review: "never", or no coverage).'],
                ['confidence', '0–100. How strongly the evidence supports the verdict, not a probability of authenticity. Below the plan threshold (default 85) the item goes to human review when review is auto.'],
                ['coverage.level', 'full / partial / none for the submitted SKU at the time of the check.'],
                ['checks[]', 'One entry per check that ran: code, label, result (pass | fail | skipped), score 0–100 and an optional detail string. Skipped means the view or code needed was missing.'],
                ['review', 'required: whether a human looked at it. reason: low_confidence | partner_requested | decisive_check_failed | no_coverage. notes: authenticator comment on fail. dispute: present after feedback.'],
                ['images', 'received / usable counts and rejected[] with view and reason.'],
                ['sample', 'true only on sandbox responses.'],
              ]}
            />
          </Section>

          <Section id="checks" title="Check codes">
            <p className="text-sm text-gray-700">Codes are stable identifiers; labels may be localised. Which checks run depends on brand, model and the views supplied.</p>
            <Table
              head={['code', 'what it tests', 'needs']}
              rows={[
                ['size_tag_id', 'Tag code format, pair consistency, uniqueness against previously seen pairs', 'size_tag or codes'],
                ['size_tag_typography', 'Font, kerning and print alignment on the size tag', 'size_tag'],
                ['box_label', 'Box label layout, barcode / GTIN agreement with the product and the size tag', 'box_label'],
                ['colour_accuracy', 'Colourway against reference items under normalised lighting', 'lateral, medial'],
                ['logo_geometry', 'Logo proportions, placement and edge quality', 'lateral, medial, heel'],
                ['outer_stitching', 'Stitch count, spacing and path on the upper', 'lateral, medial, toe_box'],
                ['midsole_stitching', 'Midsole / welt stitching pattern', 'lateral, medial'],
                ['insole', 'Insole print, logo and material texture', 'insole'],
                ['outsole_pattern', 'Tread layout and mould marks', 'outsole'],
                ['material_texture', 'Surface texture of upper materials against reference', 'lateral, medial, toe_box'],
                ['heel_shape', 'Heel counter profile and tab', 'heel'],
              ]}
            />
          </Section>

          <Section id="webhooks" title="Webhooks">
            <p className="text-sm text-gray-700">
              Register an HTTPS endpoint per key. Events: <code>authentication.completed</code>, <code>authentication.review_required</code>,
              <code> authentication.needs_images</code>, <code>batch.completed</code>, <code>dispute.resolved</code>. Delivery retries with backoff for 24 h; respond <code>2xx</code> within 10 s.
            </p>
            <Code lang="http">{webhookPayload}</Code>
            <p className="text-sm text-gray-600">Verify the signature before trusting the payload: recompute HMAC-SHA256 over <code>{'{t}.{raw body}'}</code> with your webhook secret and compare it to <code>v1</code> in constant time; reject timestamps older than 5 minutes.</p>
          </Section>

          <Section id="errors" title="Errors">
            <Code lang="http">{errorBody}</Code>
            <Table
              head={['status', 'type', 'when']}
              rows={[
                ['400', 'invalid_request', 'Malformed JSON, missing required field, unknown view'],
                ['401', 'unauthenticated', 'Missing or invalid key'],
                ['403', 'forbidden', 'Key outside its IP allowlist, or endpoint not on your plan (e.g. batches on STANDARD)'],
                ['404', 'not_found', 'Unknown id, or id belonging to another key'],
                ['409', 'duplicate_reference', 'reference already used by this key with a different body'],
                ['413', 'image_too_large', 'Image over 8 MB'],
                ['422', 'image_unusable', 'Image could not be read (blur, crop, wrong view)'],
                ['422', 'coverage_unavailable', 'Brand not covered; use GET /coverage'],
                ['429', 'rate_limited', 'See limits; Retry-After header set'],
                ['5xx', 'server_error', 'Retry with the same Idempotency-Key'],
              ]}
            />
          </Section>

          <Section id="limits" title="Rate limits & idempotency">
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>60 requests per minute per key for single submissions, 5 batch calls per minute, 600 reads per minute. Headers <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>, <code>Retry-After</code>.</li>
              <li>Send <code>Idempotency-Key</code> (any unique string, 24 h window) on every POST. A retry with the same key and body returns the original response; a different body returns 409.</li>
              <li>Automated results typically complete within 2 minutes of the last usable image; human review within 24 h (STANDARD, PLUS) or 12 h (PRO) on business days, Hong Kong time.</li>
            </ul>
          </Section>

          <Section id="data" title="Data handling">
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Images and results are processed and stored in Hong Kong under our <Link href="/data-protection-framework" className="text-brand-cyan hover:underline">Data Protection Framework</Link> (PDPO).</li>
              <li>We receive item images, product identifiers and your reference only. No buyer or seller identity is needed; <code>metadata</code> must not contain personal data.</li>
              <li>Images are retained for 90 days for dispute handling, then deleted; results and check scores are retained for the life of the account. Human-reviewed items may be added to the reference set unless your agreement opts out.</li>
              <li>Deletion on request: <code>DELETE /authentications/{'{id}'}/images</code> (preview) removes the images immediately and keeps the result.</li>
            </ul>
          </Section>

          <Section id="pricing" title="Plans & pricing">
            <Table
              head={['plan', 'monthly volume', 'per result (USD)', 'human review SLA', 'batches']}
              rows={[
                ['STANDARD', 'up to 1,000', '2.00', '24 h', '—'],
                ['PLUS', '1,001 – 2,000', '1.30', '24 h', 'Yes'],
                ['PRO', 'over 2,000', '0.80', '12 h', 'Yes'],
                ['ENTERPRISE', 'over 10,000', 'quoted', 'agreed', 'Yes'],
              ]}
            />
            <p className="text-sm text-gray-600">
              Billed monthly in arrears on completed results (<code>status: completed</code>); <code>inconclusive</code> results are not billed. Human review is included. Sandbox usage is free. Tier is set by the previous month&apos;s volume and shown in <code>GET /usage</code>. Public pricing is on <Link href="/pricing" className="text-brand-cyan hover:underline">sneakerslite.com/pricing</Link>; partner-specific terms are in your agreement.
            </p>
          </Section>

          <Section id="access" title="Get access">
            <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-6 space-y-3">
              <p className="text-gray-800">
                API keys and sandbox access are issued per partner after a short discovery call. Tell us your platform, monthly volume and the
                brands you handle, and we come back within one business day with keys, a pilot scope and an integration contact.
              </p>
              <Link href="/contact" className="inline-block rounded-lg bg-brand-cyan px-5 py-2.5 text-sm font-semibold text-white hover:bg-cyan-600">
                Contact us for access
              </Link>
            </div>
          </Section>

          <Section id="changelog" title="Changelog">
            <Table
              head={['date', 'change']}
              rows={[
                ['2026-11', 'v1.0 preview published for pilot partners: authentications, batches, coverage, usage, feedback, webhooks.'],
              ]}
            />
            <p className="text-xs text-gray-400">Questions about this reference go through your account manager or the <Link href="/contact" className="text-brand-cyan hover:underline">contact form</Link>. Primefleet Digital Hong Kong Limited.</p>
          </Section>
        </main>
      </div>
    </div>
  )
}

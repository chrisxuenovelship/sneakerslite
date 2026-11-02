#!/usr/bin/env node
/**
 * Sanity write operations. Requires an editor token (never committed). Park it in
 * `.env.local` as SANITY_EDITOR_TOKEN and load it with Node's --env-file:
 *
 *   node --env-file=.env.local scripts/sanity-publish.mjs publish drafts/A6-....md [--dry-run]
 *   node --env-file=.env.local scripts/sanity-publish.mjs backfill [--dry-run]
 *
 * `publish` converts a markdown draft with YAML front matter into an `article` document.
 * Supported markdown: `## ` / `### ` headings, paragraphs, `- ` bullet lists, `1. ` numbered
 * lists, `**bold**` and `*em*` inline marks, `[text](url)` links.
 *
 * `backfill` sets `language: "en"` on legacy articles that have none and links the
 * V4 EN/ZH pair via `translationKey`.
 */
import { readFileSync } from 'node:fs'
import { randomBytes } from 'node:crypto'

const PROJECT_ID = 'wl0eb4zu'
const DATASET = 'production'
const API = `https://${PROJECT_ID}.api.sanity.io/v2024-01-01/data`

const token = process.env.SANITY_EDITOR_TOKEN
const dryRun = process.argv.includes('--dry-run')
const [command, file] = process.argv.slice(2).filter((a) => !a.startsWith('--'))

if (!token && !dryRun) fail('SANITY_EDITOR_TOKEN is required (or pass --dry-run)')

const key = () => randomBytes(6).toString('hex')

function fail(message) {
  console.error(`error: ${message}`)
  process.exit(1)
}

async function query(groq, params = {}) {
  const url = new URL(`${API}/query/${DATASET}`)
  url.searchParams.set('query', groq)
  for (const [k, v] of Object.entries(params)) url.searchParams.set(`$${k}`, JSON.stringify(v))
  const res = await fetch(url, { headers: token ? { Authorization: `Bearer ${token}` } : {} })
  if (!res.ok) fail(`query failed: ${res.status} ${await res.text()}`)
  return (await res.json()).result
}

async function mutate(mutations) {
  if (dryRun) {
    console.log(JSON.stringify({ mutations }, null, 2))
    return
  }
  const res = await fetch(`${API}/mutate/${DATASET}?returnIds=true`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ mutations }),
  })
  const body = await res.json()
  if (!res.ok) fail(`mutation failed: ${res.status} ${JSON.stringify(body)}`)
  console.log('ok:', JSON.stringify(body.results))
}

// ---------- markdown → portable text ----------

function parseFrontMatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) fail('draft must start with YAML front matter')
  const meta = {}
  for (const line of match[1].split('\n')) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const k = line.slice(0, idx).trim()
    let v = line.slice(idx + 1).trim()
    if (v.startsWith('"') && v.endsWith('"')) v = JSON.parse(v)
    meta[k] = v
  }
  return { meta, body: match[2].trim() }
}

/** Inline marks: **strong**, *em*, [text](href). */
function parseInline(text, markDefs) {
  const children = []
  const re = /\*\*(.+?)\*\*|\*(.+?)\*|\[(.+?)\]\((.+?)\)/g
  let last = 0
  let m
  while ((m = re.exec(text))) {
    if (m.index > last) children.push(span(text.slice(last, m.index)))
    if (m[1] !== undefined) children.push(span(m[1], ['strong']))
    else if (m[2] !== undefined) children.push(span(m[2], ['em']))
    else {
      const def = { _key: key(), _type: 'link', href: m[4] }
      markDefs.push(def)
      children.push(span(m[3], [def._key]))
    }
    last = m.index + m[0].length
  }
  if (last < text.length) children.push(span(text.slice(last)))
  return children
}

function span(text, marks = []) {
  return { _key: key(), _type: 'span', text, marks }
}

function block(text, { style = 'normal', listItem } = {}) {
  const markDefs = []
  const children = parseInline(text, markDefs)
  const b = { _key: key(), _type: 'block', style, markDefs, children }
  if (listItem) {
    b.listItem = listItem
    b.level = 1
  }
  return b
}

function markdownToPortableText(markdown) {
  const blocks = []
  for (const raw of markdown.split(/\n\s*\n/)) {
    const chunk = raw.trim()
    if (!chunk) continue
    if (chunk.startsWith('### ')) blocks.push(block(chunk.slice(4), { style: 'h3' }))
    else if (chunk.startsWith('## ')) blocks.push(block(chunk.slice(3), { style: 'h2' }))
    else if (/^[-*] /.test(chunk)) {
      for (const line of chunk.split('\n')) blocks.push(block(line.replace(/^[-*] /, ''), { listItem: 'bullet' }))
    } else if (/^\d+\. /.test(chunk)) {
      for (const line of chunk.split('\n')) blocks.push(block(line.replace(/^\d+\. /, ''), { listItem: 'number' }))
    } else blocks.push(block(chunk.replace(/\n/g, ' ')))
  }
  return blocks
}

// ---------- commands ----------

async function publish(path) {
  if (!path) fail('publish requires a markdown file path')
  const { meta, body } = parseFrontMatter(readFileSync(path, 'utf8'))
  for (const k of ['slug', 'title', 'publishedAt', 'category', 'language', 'author', 'excerpt']) {
    if (!meta[k]) fail(`front matter missing "${k}"`)
  }
  const existing = await query('*[_type=="article" && slug.current==$slug][0]._id', { slug: meta.slug })
  if (existing) fail(`an article with slug "${meta.slug}" already exists (${existing})`)

  const doc = {
    _type: 'article',
    title: meta.title,
    slug: { _type: 'slug', current: meta.slug },
    author: meta.author,
    excerpt: meta.excerpt,
    publishedAt: new Date(`${meta.publishedAt}T00:00:00Z`).toISOString(),
    category: meta.category,
    language: meta.language,
    translationKey: meta.translationKey || meta.slug,
    seoTitle: meta.seoTitle,
    seoDescription: meta.seoDescription,
    body: markdownToPortableText(body),
  }
  console.log(`publishing "${doc.title}" (${doc.body.length} blocks, ${doc.publishedAt})`)
  await mutate([{ create: doc }])
}

async function backfill() {
  const articles = await query('*[_type=="article"]{_id, "slug": slug.current, language, translationKey}')
  const mutations = []
  for (const a of articles) {
    const set = {}
    if (!a.language) set.language = 'en'
    if (!a.translationKey) {
      // V4 EN/ZH pair share a key; every other article is its own translation group.
      set.translationKey = a.slug.replace(/-zh$/, '')
    }
    if (Object.keys(set).length) mutations.push({ patch: { id: a._id, set } })
  }
  if (!mutations.length) {
    console.log('nothing to backfill')
    return
  }
  console.log(`patching ${mutations.length} document(s)`)
  await mutate(mutations)
}

if (command === 'publish') await publish(file)
else if (command === 'backfill') await backfill()
else fail('usage: sanity-publish.mjs <publish <file.md> | backfill> [--dry-run]')

import { NextRequest, NextResponse } from 'next/server'
import { timingSafeEqual } from 'crypto'
import { SAMPLE_RESULT } from '@/lib/partner-sample'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/**
 * "Try it" endpoint behind the partner documentation. Accepts a per-partner demo key from
 * `PARTNER_DEMO_KEYS` (`name:key,…`) and returns a fixed, clearly labelled sample result so the
 * request/response shapes in the docs can be exercised. Logs partner id, status and nothing else.
 */

function keys(): Map<string, Buffer> {
  const out = new Map<string, Buffer>()
  for (const entry of (process.env.PARTNER_DEMO_KEYS || '').split(',')) {
    const [name, key] = entry.trim().split(':')
    if (name && key) out.set(name, Buffer.from(key))
  }
  return out
}

function partnerFor(authorization: string | null): string | null {
  const presented = Buffer.from((authorization || '').replace(/^Bearer\s+/i, ''))
  for (const [name, key] of keys()) {
    if (presented.length === key.length && timingSafeEqual(presented, key)) return name
  }
  return null
}

export async function POST(request: NextRequest) {
  const partner = partnerFor(request.headers.get('authorization'))
  if (!partner) {
    console.log('partner demo call', { partner: '-', status: 401 })
    return NextResponse.json(
      { error: { type: 'unauthenticated', message: 'Missing or invalid API key.' } },
      { status: 401, headers: { 'Cache-Control': 'no-store', 'WWW-Authenticate': 'Bearer' } }
    )
  }
  const body = await request.json().catch(() => null)
  const reference = typeof body?.reference === 'string' && body.reference.length <= 64 ? body.reference : SAMPLE_RESULT.reference
  console.log('partner demo call', { partner, status: 200 })
  return NextResponse.json({ ...SAMPLE_RESULT, reference }, { status: 200, headers: { 'Cache-Control': 'no-store' } })
}

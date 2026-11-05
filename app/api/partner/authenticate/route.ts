import { NextRequest, NextResponse } from 'next/server'
import { SAMPLE_RESULT } from '@/lib/partner-sample'

export const dynamic = 'force-dynamic'

/**
 * Sandbox "try it" endpoint behind the partner documentation. Any request presenting the public
 * sandbox key gets the fixed, clearly labelled sample so request/response shapes can be exercised.
 * Logs only the status code.
 */
const SANDBOX_KEY = 'sk_test_demo'
const NO_STORE = { 'Cache-Control': 'no-store' }

export async function POST(request: NextRequest) {
  const presented = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '')
  if (presented !== SANDBOX_KEY) {
    console.log('partner sandbox call', { status: 401 })
    return NextResponse.json(
      { error: { type: 'unauthenticated', message: 'Missing or invalid API key.' } },
      { status: 401, headers: { ...NO_STORE, 'WWW-Authenticate': 'Bearer' } }
    )
  }
  const body = await request.json().catch(() => null)
  const reference = typeof body?.reference === 'string' && body.reference.length <= 64 ? body.reference : SAMPLE_RESULT.reference
  console.log('partner sandbox call', { status: 200 })
  return NextResponse.json({ ...SAMPLE_RESULT, reference }, { status: 200, headers: NO_STORE })
}

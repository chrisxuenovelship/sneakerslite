import { NextRequest, NextResponse } from 'next/server'
import { sessionCookie } from '@/lib/partner-session'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  const res = NextResponse.redirect(new URL('/partnerapi/login', request.nextUrl.origin), 303)
  res.headers.append('Set-Cookie', sessionCookie('', 0))
  res.headers.set('Cache-Control', 'no-store')
  return res
}

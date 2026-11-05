/**
 * Partner-area session cookie: `base64url(payload).base64url(hmac)`, payload `{ partner, exp }`,
 * HMAC-SHA256 under `PARTNER_SESSION_SECRET`. Web Crypto only, so middleware (edge) and route
 * handlers (node) share one implementation. Nothing is stored server-side.
 */
export const SESSION_COOKIE = 'partner_session'
export const SESSION_PATH = '/partnerapi'
export const SESSION_TTL_SECONDS = 8 * 60 * 60

export interface PartnerSession {
  partner: string
  exp: number
}

const enc = new TextEncoder()

function b64url(bytes: Uint8Array): string {
  let s = ''
  for (const b of bytes) s += String.fromCharCode(b)
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function unb64url(s: string): Uint8Array | null {
  if (!/^[A-Za-z0-9_-]*$/.test(s)) return null
  const padded = s.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (s.length % 4)) % 4)
  try {
    const bin = atob(padded)
    const out = new Uint8Array(bin.length)
    for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i)
    return out
  } catch {
    return null
  }
}

async function key(secret: string): Promise<CryptoKey> {
  return crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
}

async function mac(secret: string, data: string): Promise<Uint8Array> {
  return new Uint8Array(await crypto.subtle.sign('HMAC', await key(secret), enc.encode(data)))
}

function equal(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i]
  return diff === 0
}

export async function signSession(secret: string, partner: string, now = Date.now()): Promise<string> {
  const payload = b64url(enc.encode(JSON.stringify({ partner, exp: Math.floor(now / 1000) + SESSION_TTL_SECONDS })))
  return `${payload}.${b64url(await mac(secret, payload))}`
}

export async function verifySession(secret: string | undefined, token: string | undefined, now = Date.now()): Promise<PartnerSession | null> {
  if (!secret || !token) return null
  const dot = token.indexOf('.')
  if (dot < 1) return null
  const payload = token.slice(0, dot)
  const sig = unb64url(token.slice(dot + 1))
  if (!sig || !equal(sig, await mac(secret, payload))) return null
  const raw = unb64url(payload)
  if (!raw) return null
  try {
    const session = JSON.parse(new TextDecoder().decode(raw)) as PartnerSession
    if (typeof session.partner !== 'string' || typeof session.exp !== 'number') return null
    if (session.exp * 1000 <= now) return null
    return session
  } catch {
    return null
  }
}

export function sessionCookie(value: string, maxAge: number): string {
  return `${SESSION_COOKIE}=${value}; Path=${SESSION_PATH}; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`
}

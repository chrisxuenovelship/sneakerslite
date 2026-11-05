#!/usr/bin/env node
// Prints a PARTNER_LOGINS entry for one partner login. Usage:
//   node scripts/partner-hash.js <name> [password]   (no password → a random 20-char one is generated and shown once)
// Format: name:<salt-hex>:<scrypt-hex> (N=16384, r=8, p=1, 32 bytes). Paste into Vercel env PARTNER_LOGINS,
// comma-separated for several partners. Also prints a PARTNER_SESSION_SECRET and a demo key if you need them.
const { randomBytes, scryptSync } = require('crypto')

const name = (process.argv[2] || '').trim().toLowerCase()
if (!name || !/^[a-z0-9_-]+$/.test(name)) {
  console.error('usage: node scripts/partner-hash.js <name> [password]')
  process.exit(1)
}
const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'
const random = (n) => Array.from(randomBytes(n), (b) => alphabet[b % alphabet.length]).join('')
const password = process.argv[3] || random(20)
const salt = randomBytes(16)
const hash = scryptSync(password, salt, 32, { N: 16384, r: 8, p: 1 })

console.log(`PARTNER_LOGINS entry : ${name}:${salt.toString('hex')}:${hash.toString('hex')}`)
console.log(`password (${process.argv[3] ? 'as given' : 'generated, shown once'}) : ${password}`)
console.log(`PARTNER_DEMO_KEYS entry : ${name}:sk_demo_${random(32)}`)
console.log(`PARTNER_SESSION_SECRET (if not set yet) : ${randomBytes(32).toString('hex')}`)

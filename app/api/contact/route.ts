import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

/**
 * Lead notification. `CONTACT_FROM` must be a sender Resend accepts: a verified domain
 * (e.g. `SneakersLite <noreply@sneakerslite.com>`) or Resend's `onboarding@resend.dev`,
 * which only delivers to the Resend account owner's address.
 */
const CONTACT_TO = process.env.CONTACT_TO || 'chrisxue@novelship.com'
const CONTACT_FROM = process.env.CONTACT_FROM || 'SneakersLite <onboarding@resend.dev>'

const SUBJECTS: Record<string, true> = { authentication: true, partnership: true, integration: true, support: true, other: true }
const VOLUMES: Record<string, true> = { lt1000: true, '1000-2000': true, '2000-10000': true, gt10000: true, unsure: true }
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string)

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
  }

  const field = (k: string) => (typeof body[k] === 'string' ? (body[k] as string).trim() : '')
  const name = field('name')
  const email = field('email')
  const company = field('company')
  const volume = field('volume')
  const subject = field('subject')
  const message = field('message')
  const locale = field('locale')

  if (!name || !email || !company || !volume || !subject || !message) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ message: 'Invalid email address' }, { status: 400 })
  }
  if (!SUBJECTS[subject] || !VOLUMES[volume]) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 })
  }

  const submission = { timestamp: new Date().toISOString(), name, email, company, volume, subject, locale }
  console.log('Contact form submission:', submission)

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not set; lead not delivered', submission)
    return NextResponse.json({ message: 'Failed to send message' }, { status: 502 })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: [CONTACT_TO],
    replyTo: email,
    subject: `[sneakerslite.com] ${subject} — ${company}`,
    html: `
      <h2>New enquiry from sneakerslite.com</h2>
      <table cellpadding="4">
        <tr><td><strong>Name</strong></td><td>${escape(name)}</td></tr>
        <tr><td><strong>Email</strong></td><td>${escape(email)}</td></tr>
        <tr><td><strong>Company</strong></td><td>${escape(company)}</td></tr>
        <tr><td><strong>Monthly volume</strong></td><td>${escape(volume)}</td></tr>
        <tr><td><strong>Subject</strong></td><td>${escape(subject)}</td></tr>
        <tr><td><strong>Language</strong></td><td>${escape(locale || 'en')}</td></tr>
      </table>
      <p><strong>Message</strong></p>
      <p>${escape(message).replace(/\n/g, '<br>')}</p>
    `,
  })

  if (error) {
    console.error('Resend error; lead not delivered', error, submission)
    return NextResponse.json({ message: 'Failed to send message' }, { status: 502 })
  }

  return NextResponse.json({ submitted: true }, { status: 200 })
}

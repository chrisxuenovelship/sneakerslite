import { NextRequest, NextResponse } from 'next/server'

// Resend integration - uncomment when API key is available
// import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Log contact form submission
    const submissionData = {
      timestamp: new Date().toISOString(),
      name,
      email,
      subject,
      message,
    }

    console.log('📧 Contact Form Submission:', submissionData)

    // TODO: Resend integration
    // When RESEND_API_KEY is available, uncomment below:
    /*
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      try {
        await resend.emails.send({
          from: 'noreply@sneakerslite.com',
          to: 'chrisxue@novelship.com',
          replyTo: email,
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          `,
        })
      } catch (emailError) {
        console.error('Resend email error:', emailError)
      }
    }
    */

    return NextResponse.json(
      { 
        message: 'Message received. We will contact you soon at ' + email,
        submitted: true,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    )
  }
}

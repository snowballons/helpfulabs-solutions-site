import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    const { name, email } = body
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Log the submission for debugging
    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      name,
      email,
      businessName: body.businessName || 'Not provided'
    })

    // Send email notification to admin
    const adminEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'hello@helpfulabssolutions.com',
      to: process.env.ADMIN_EMAIL || 'hello@helpfulabssolutions.com',
      subject: `New Contact Form Submission from ${name}`,
      html: generateAdminEmailTemplate(body),
    })

    // Send confirmation email to the user
    const userEmailResult = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'hello@helpfulabssolutions.com',
      to: email,
      subject: 'Thank you for contacting Helpfulabs Solutions',
      html: generateUserConfirmationTemplate(body),
    })

    console.log('Emails sent successfully:', {
      adminEmail: adminEmailResult.data?.id,
      userEmail: userEmailResult.data?.id
    })

    return NextResponse.json(
      { 
        message: 'Contact form submitted successfully',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit contact form. Please try again.' },
      { status: 500 }
    )
  }
}

// Generate email template for admin notification
function generateAdminEmailTemplate(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0B5563; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0B5563; }
        .value { margin-top: 5px; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Business Name:</div>
            <div class="value">${data.businessName || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Business Type:</div>
            <div class="value">${data.businessType || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Number of Employees:</div>
            <div class="value">${data.employees || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Main Challenge:</div>
            <div class="value">${data.challenge || 'Not provided'}</div>
          </div>
          <div class="field">
            <div class="label">Message:</div>
            <div class="value">${data.message || 'No message provided'}</div>
          </div>
        </div>
        <div class="footer">
          <p>Submitted on ${new Date().toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })} EAT</p>
          <p>Helpfulabs Solutions - Business Automation & Systemization</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Generate confirmation email template for user
function generateUserConfirmationTemplate(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank you for contacting Helpfulabs Solutions</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0B5563; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .cta { background: #FF8A3D; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 20px 0; }
        .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; border-top: 1px solid #eee; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You, ${data.name}!</h1>
        </div>
        <div class="content">
          <p>Thank you for reaching out to Helpfulabs Solutions. We've received your message and will get back to you within 24 hours.</p>
          
          <h3>What happens next:</h3>
          <ul>
            <li>We'll review your business details and challenges</li>
            <li>One of our systemization experts will contact you</li>
            <li>We'll discuss how we can help transform your operations</li>
            <li>If it's a good fit, we'll schedule a discovery call</li>
          </ul>

          <p>In the meantime, you might find these resources helpful:</p>
          <ul>
            <li><a href="https://helpfulabssolutions.com/resources">Free Business Systems Templates</a></li>
            <li><a href="https://helpfulabssolutions.com/case-studies">Success Stories from Local Businesses</a></li>
            <li><a href="https://helpfulabssolutions.com/health-check">Take Our Systems Health Check</a></li>
          </ul>

          <div style="text-align: center;">
            <a href="https://helpfulabssolutions.com/health-check" class="cta">Take the Free Health Check</a>
          </div>

          <p>If you have any urgent questions, feel free to call us at +254 XXX XXX XXX or reply to this email.</p>

          <p>Best regards,<br>
          The Helpfulabs Solutions Team</p>
        </div>
        <div class="footer">
          <p><strong>Helpfulabs Solutions</strong><br>
          Business Automation & Systemization<br>
          Nairobi, Kenya<br>
          hello@helpfulabssolutions.com</p>
        </div>
      </div>
    </body>
    </html>
  `
}

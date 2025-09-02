# Email Integration Guide

This guide explains how to integrate the contact and booking forms with email services.

## Current Setup

The forms currently log submissions to the console. To receive actual emails, you need to integrate with an email service.

## Recommended Email Services

### 1. Resend (Recommended)
- **Pros**: Developer-friendly, reliable, good pricing
- **Setup**: Add `RESEND_API_KEY` to environment variables
- **Cost**: Free tier: 3,000 emails/month

```bash
npm install resend
```

```typescript
// In src/app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

await resend.emails.send({
  from: 'noreply@helpfulabssolutions.com',
  to: 'hello@helpfulabssolutions.com',
  subject: `New Contact Form Submission from ${name}`,
  html: generateEmailTemplate(body)
})
```

### 2. EmailJS (Client-side)
- **Pros**: No backend required, easy setup
- **Setup**: Create account, get service ID and template ID
- **Cost**: Free tier: 200 emails/month

```bash
npm install @emailjs/browser
```

### 3. Formspree
- **Pros**: Simple form handling, no code required
- **Setup**: Just change form action to Formspree endpoint
- **Cost**: Free tier: 50 submissions/month

### 4. SendGrid
- **Pros**: Enterprise-grade, detailed analytics
- **Setup**: Add `SENDGRID_API_KEY` to environment variables
- **Cost**: Free tier: 100 emails/day

## Environment Variables

Create a `.env.local` file in your project root:

```env
# Email Service
RESEND_API_KEY=your_resend_api_key_here
# or
SENDGRID_API_KEY=your_sendgrid_api_key_here
# or
EMAILJS_SERVICE_ID=your_emailjs_service_id
EMAILJS_TEMPLATE_ID=your_emailjs_template_id
EMAILJS_PUBLIC_KEY=your_emailjs_public_key

# Notification Settings
ADMIN_EMAIL=hello@helpfulabssolutions.com
```

## Implementation Steps

### Step 1: Choose Email Service
Pick one of the services above based on your needs and budget.

### Step 2: Install Dependencies
```bash
npm install resend  # or your chosen service
```

### Step 3: Update API Routes
Replace the console.log statements in:
- `src/app/api/contact/route.ts`
- `src/app/api/booking/route.ts`

### Step 4: Test Integration
1. Submit a test form
2. Check your email inbox
3. Verify all form data is included

## Calendar Integration

For booking forms, consider integrating with:

### Google Calendar API
```typescript
import { google } from 'googleapis'

const calendar = google.calendar({ version: 'v3', auth })
const event = await calendar.events.insert({
  calendarId: 'primary',
  resource: {
    summary: `Discovery Call - ${name}`,
    start: { dateTime: startDateTime },
    end: { dateTime: endDateTime },
    attendees: [{ email }]
  }
})
```

### Calendly API
```typescript
const response = await fetch('https://api.calendly.com/scheduled_events', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${process.env.CALENDLY_API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(eventData)
})
```

## Email Templates

The forms include helper functions to generate HTML email templates. Customize these in the API routes to match your branding.

## Security Considerations

1. **Rate Limiting**: Add rate limiting to prevent spam
2. **Validation**: Server-side validation is already implemented
3. **CORS**: Configure CORS if needed for external integrations
4. **Environment Variables**: Never commit API keys to version control

## Testing

Test your integration with:
1. Valid form submissions
2. Invalid data (missing required fields)
3. Network errors
4. Rate limiting (if implemented)

## Monitoring

Consider adding:
- Email delivery tracking
- Form submission analytics
- Error logging and alerts
- Backup notification methods

## Support

For integration help:
- Check service documentation
- Test with small volumes first
- Monitor delivery rates
- Set up error notifications
- 
- 
- 
- 
- 



Next Steps for Email Setup:

1. Choose an Email Service:
   • MailerLite (mentioned in your
README)
   • ConvertKit
   • Mailchimp
   • EmailOctopus

2. Integration Options:
   • **API Integration**: Add form
submission handler that sends
data to your email service's API
   • **Embedded Form**: Replace
current form with email service's
embedded form code
   • **Webhook**: Set up webhook
endpoint to receive form
submissions

3. Implementation:
   • Create API route in
/src/app/api/newsletter/route.ts
   • Add form submission handler
to newsletter page
   • Connect to chosen email
service API

Recommended Quick Setup:
Use your email service's embedded
form code to replace the current
form - this requires no backend
coding and works immediately.

Would you like me to help set up
the integration once you choose an
email service?

# EmailJS Setup Guide for Solinex Contact Form

This guide will help you set up EmailJS for the contact form on the Solinex website.

## Overview

EmailJS allows you to send emails directly from the client-side without setting up a backend server. This is perfect for simple contact forms.

## Prerequisites

- A free EmailJS account (create one at https://www.emailjs.com/)
- Access to your email provider (Gmail, Outlook, etc.)

## Setup Steps

### 1. Create an EmailJS Account

1. Go to https://www.emailjs.com/
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Connect Your Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click "Add New Service"
3. Choose your email provider (e.g., Gmail, Outlook, etc.)
4. Follow the prompts to connect your email account
5. Name your service (e.g., "Solinex Contact Form")
6. Save and copy your **Service ID** (you'll need this later)

### 3. Create an Email Template

1. Go to **Email Templates** in the EmailJS dashboard
2. Click "Create New Template"
3. Design your email template with the following variables:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Company: {{company}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested: {{service}}

Message:
{{message}}

---
This email was sent via the Solinex website contact form.
Reply to: {{from_email}}
```

4. Save your template and copy the **Template ID**

### 4. Get Your Public Key

1. Go to **Account** in the EmailJS dashboard
2. Find your **Public Key** (formerly called User ID)
3. Copy this key

### 5. Configure Your Application

1. Create a `.env` file in the root of your project (copy from `.env.example`):

```bash
cp .env.example .env
```

2. Edit `.env` and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Important:** Never commit your `.env` file to version control. It's already included in `.gitignore`.

### 6. Template Variable Mapping

The contact form sends the following data to EmailJS:

| Form Field | EmailJS Variable | Description |
|------------|------------------|-------------|
| Service | `{{service}}` | The service the user is interested in |
| Name | `{{from_name}}` | User's full name |
| Company | `{{company}}` | User's company name |
| Phone | `{{phone}}` | User's phone number |
| Email | `{{from_email}}` | User's email address |
| Message | `{{message}}` | User's message |
| To Email | `{{to_email}}` | Recipient email (admin@solinex.dev) |

Make sure your EmailJS template includes these variables where you want the data to appear.

### 7. Test Your Setup

1. Start your development server:

```bash
npm run dev
```

2. Navigate to the contact form on your website
3. Fill out the form and submit it
4. Check your email inbox for the submission

### 8. Production Deployment

When deploying to production, make sure to set your environment variables in your hosting platform:

- **Vercel:** Add environment variables in Project Settings → Environment Variables
- **Netlify:** Add environment variables in Site Settings → Environment Variables
- **Other platforms:** Consult your hosting provider's documentation

## Troubleshooting

### Email Not Sending

1. **Check Console Logs:** Open browser DevTools and check for error messages
2. **Verify Credentials:** Make sure all three EmailJS credentials are correct
3. **Check Email Service:** Ensure your email service is properly connected in EmailJS dashboard
4. **Template Variables:** Verify all template variables match what's being sent from the form
5. **Rate Limits:** Free EmailJS accounts have limits (200 emails/month). Check if you've exceeded them

### Invalid API Keys

- Double-check that you've copied the correct Service ID, Template ID, and Public Key
- Ensure there are no extra spaces or characters in your `.env` file
- Restart your development server after changing `.env` variables

### Email Goes to Spam

- In EmailJS, configure your email service to use your domain
- Set up SPF and DKIM records (consult EmailJS documentation)
- Test from different email addresses

## Email Quota

**Free Plan Limits:**
- 200 emails per month
- 2 email services
- 4 email templates

If you need more, consider upgrading to a paid plan at https://www.emailjs.com/pricing

## Security Notes

1. **Never expose your Private Key:** Only use the Public Key in client-side code
2. **Keep .env secure:** Never commit `.env` to Git
3. **Use environment variables:** Always use `import.meta.env` for sensitive data
4. **Rate limiting:** EmailJS has built-in rate limiting to prevent abuse

## Support

- **EmailJS Documentation:** https://www.emailjs.com/docs/
- **EmailJS Support:** https://www.emailjs.com/support/

## Alternative: Using reCAPTCHA

To prevent spam, consider adding Google reCAPTCHA to your form:

1. Get reCAPTCHA v3 keys from https://www.google.com/recaptcha/
2. Add the reCAPTCHA script to your HTML
3. Validate the token before sending the email

This is recommended for production environments to prevent form spam.

---

**Last Updated:** October 2025



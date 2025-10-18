# EmailJS Template for Solinex Contact Form

## Template Configuration

Use this template in your EmailJS dashboard for **template_vw90k8i**

### ✨ What's New in This Version

- **Minimal, Outlook-safe HTML**: Table-based, inline styles only; no animations or gradients
- **Consistent across clients**: Works in Outlook, Gmail, Apple Mail, Yahoo, mobile apps
- **Readable & compact**: Clear hierarchy, generous spacing, high contrast
- **Responsive-friendly**: Fluid tables and scalable type without fragile CSS
- **Print-friendly**: Plain backgrounds, simple borders

---

## 📸 Logo Setup

The email template includes the Solinex logo in the header. You have several options for hosting the logo:

### Option 1: Use Your Website Logo (RECOMMENDED)
The template is already configured with your hosted logo:
```html
<img src="https://iili.io/KezVGnV.png" alt="Solinex Logo" class="logo" />
```

### Option 2: Host on Image Hosting Service
Upload your logo to services like:
- **Cloudinary**: Free tier available
- **Imgur**: Simple hosting
- **GitHub**: If your repo is public
- **Your CDN**: If you have one

### Option 3: Remove Logo (Fallback)
If you don't want to use a logo, remove these lines from the HTML:
```html
<div class="logo-container">
    <img src="..." alt="Solinex Logo" class="logo" />
</div>
```

### Option 4: Use Text Logo Instead
Replace the logo with text:
```html
<div class="logo-text">SOLINEX</div>
```

---

## Email Subject

### Option 1: Service-Focused (Recommended)
```
{{service}} Request from {{from_name}}
```

### Option 2: With Company (when available)
```
New Inquiry: {{from_name}} from {{company}}
```

### Option 3: Simple & Direct
```
Contact Form: {{from_name}}
```

### Option 4: Business-Oriented
```
New Lead: {{from_name}} - {{service}}
```

---

## ⚠️ Important: Enable HTML in EmailJS

If you want to use HTML templates, you MUST enable HTML in your EmailJS template settings:

1. Go to your EmailJS template editor
2. Look for a toggle or checkbox that says "Content Type: HTML" or similar
3. Make sure it's set to **HTML** mode (not Plain Text)
4. Save your template

If you don't see this option or HTML still doesn't work, use the **Plain Text Template** below instead.

Tip: Some email clients (notably Outlook) ignore external CSS and modern layout features. This template intentionally uses inline styles and tables to ensure consistent rendering.

---

## Email Content (HTML or Plain Text)

### Option 1: Minimal, Outlook‑safe HTML (Recommended)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>New Contact Form Submission</title>
    <!-- Avoid heavy CSS. Use inline styles and tables for maximum compatibility. -->
  </head>
  <body style="margin:0;padding:0;background:#f4f6f8;color:#0f172a;">
    <!-- Preheader (hidden in most clients) -->
    <div style="display:none;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">You have received a new message via the Solinex contact form.</div>

    <!-- Wrapper -->
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f4f6f8;">
      <tr>
        <td align="center" style="padding:24px;">
          <!-- Container -->
          <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="width:100%;max-width:600px;background:#ffffff;border:1px solid #e5e7eb;">
            <!-- Header -->
            <tr>
              <td align="left" style="padding:24px 24px 8px 24px;border-bottom:1px solid #e5e7eb;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                  <tr>
                    <td valign="middle" style="font:700 18px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#0f172a;">
                      <img src="https://iili.io/KezVGnV.png" width="28" height="28" alt="Solinex" style="display:inline-block;vertical-align:middle;border:0;outline:none;text-decoration:none;border-radius:6px;margin-right:8px;" />
                      <span style="vertical-align:middle;">New Contact Form Submission</span>
                    </td>
                    <td align="right" valign="middle" style="font:500 12px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#64748b;">Solinex Website</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Intro -->
            <tr>
              <td style="padding:16px 24px 8px 24px;font:400 14px/20px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#334155;">
                You have received a new message through your website contact form. Review the details below.
              </td>
            </tr>

            <!-- Contact Information -->
            <tr>
              <td style="padding:8px 24px 0 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px 0 4px 0;font:600 12px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#64748b;text-transform:uppercase;">Name</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px 0;font:500 14px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#0f172a;border-bottom:1px solid #f1f5f9;">{{from_name}}</td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0 4px 0;font:600 12px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#64748b;text-transform:uppercase;">Company</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px 0;font:500 14px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#0f172a;border-bottom:1px solid #f1f5f9;">{{company}}</td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0 4px 0;font:600 12px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#64748b;text-transform:uppercase;">Email Address</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px 0;font:500 14px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#0f172a;border-bottom:1px solid #f1f5f9;"><a href="mailto:{{from_email}}" style="color:#0ea5e9;text-decoration:none;">{{from_email}}</a></td>
                  </tr>

                  <tr>
                    <td style="padding:12px 0 4px 0;font:600 12px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#64748b;text-transform:uppercase;">Phone Number</td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 12px 0;font:500 14px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#0f172a;border-bottom:1px solid #f1f5f9;">{{phone}}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Service Interested -->
            <tr>
              <td style="padding:16px 24px 0 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#f8fafc;border:1px solid #e5e7eb;">
                  <tr>
                    <td style="padding:10px 12px;font:600 12px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#64748b;text-transform:uppercase;">Service Interested</td>
                  </tr>
                  <tr>
                    <td style="padding:0 12px 12px 12px;font:600 14px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#0f172a;">{{service}}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Customer Message -->
            <tr>
              <td style="padding:16px 24px 24px 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid #e5e7eb;background:#fff;">
                  <tr>
                    <td style="padding:10px 12px;font:600 12px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#64748b;text-transform:uppercase;">Customer Message</td>
                  </tr>
                  <tr>
                    <td style="padding:0 12px 16px 12px;font:400 14px/20px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#0f172a;white-space:pre-wrap;word-wrap:break-word;">{{message}}</td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td align="center" style="padding:16px 24px;border-top:1px solid #e5e7eb;background:#f8fafc;">
                <div style="font:400 12px/18px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#64748b;">This message was sent via the <strong style="font-weight:600;color:#334155;">Solinex</strong> website contact form</div>
                <div style="font:400 12px/18px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#64748b;">Reply directly to: <a href="mailto:{{from_email}}" style="color:#0ea5e9;text-decoration:none;">{{from_email}}</a></div>
                <div style="font:400 11px/16px, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;color:#94a3b8;margin-top:8px;">
                  Language: {{language}} | Submitted: {{submission_time}}
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
 </html>
```

---

### Option 2: Plain Text Template (Clean & Minimal)

```
NEW CONTACT FORM SUBMISSION
Solinex Website
═══════════════════════════════════════════════════

CONTACT INFORMATION
──────────────────────────────────────────────────

Name:    {{from_name}}
Company: {{company}}
Email:   {{from_email}}
Phone:   {{phone}}

SERVICE INTERESTED
──────────────────────────────────────────────────

{{service}}

MESSAGE
──────────────────────────────────────────────────

{{message}}

═══════════════════════════════════════════════════

Sent via Solinex website contact form
Language: {{language}} | Submitted: {{submission_time}}
Reply to: {{from_email}}
```

---

### Option 3: Ultra-Minimal Plain Text

```
SOLINEX CONTACT FORM SUBMISSION
═══════════════════════════════

{{from_name}} ({{company}})
{{from_email}} | {{phone}}

Service: {{service}}

Message:
{{message}}

─────────────────────────────
Language: {{language}} | {{submission_time}}
Reply to: {{from_email}}
```

---

## EmailJS Template Settings

When setting up your template in EmailJS dashboard:

1. **Template Name**: Solinex Contact Form
2. **Subject**: `{{service}} Request from {{from_name}}` (Recommended)
3. **Content**: Copy one of the templates above
4. **From Name**: Solinex Contact Form
5. **From Email**: (Use your verified email)
6. **Reply To**: `{{from_email}}`

---

## Template Variables Reference

These variables are automatically populated from the contact form:

| Variable | Description | Example |
|----------|-------------|---------|
| `{{from_name}}` | Customer's full name | "John Smith" |
| `{{company}}` | Company name (optional) | "Tech Corp" or empty |
| `{{from_email}}` | Customer's email | "john@example.com" |
| `{{phone}}` | Phone number | "+66 62-129-2126" |
| `{{service}}` | Selected service | "web-development" |
| `{{message}}` | Customer's message | "I need help with..." |
| `{{to_email}}` | Destination email | "admin@solinex.dev" |
| `{{language}}` | Form language used | "English" or "ไทย" |
| `{{submission_time}}` | Submission timestamp | "1/15/2025, 2:30:45 PM" |

---

## How to Add Template to EmailJS

1. Go to https://dashboard.emailjs.com/admin
2. Click on **Email Templates**
3. Find template **template_vw90k8i** or create new one
4. Click **Edit**
5. Set the **Subject** to: `{{service}} Request from {{from_name}}`
6. Copy and paste the HTML or Plain Text template above into the content area
7. Set **Reply To** field to: `{{from_email}}`
8. Click **Save**
9. Test your template using the "Test It" button

---

## Testing

After setting up the template, test it by:

1. Going to your contact form
2. Filling out all fields
3. Submitting the form
4. Checking your email at admin@solinex.dev

You should receive a nicely formatted email with all the customer's information!

---

**Last Updated:** October 2025


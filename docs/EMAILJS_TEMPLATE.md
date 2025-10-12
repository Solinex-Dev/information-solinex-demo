# EmailJS Template for Solinex Contact Form

## Template Configuration

Use this template in your EmailJS dashboard for **template_vw90k8i**

---

## Email Subject

```
New Contact Form Submission from {{from_name}}
```

---

## ⚠️ Important: Enable HTML in EmailJS

If you want to use HTML templates, you MUST enable HTML in your EmailJS template settings:

1. Go to your EmailJS template editor
2. Look for a toggle or checkbox that says "Content Type: HTML" or similar
3. Make sure it's set to **HTML** mode (not Plain Text)
4. Save your template

If you don't see this option or HTML still doesn't work, use the **Plain Text Template** below instead.

---

## Email Content (HTML or Plain Text)

### Option 1: HTML Template (Beautiful & Modern)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: #f3f4f6;
            padding: 20px;
        }
        .email-wrapper {
            max-width: 650px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #1e3a8a 0%, #0d9488 50%, #10b981 100%);
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        .header::after {
            content: '';
            position: absolute;
            bottom: -20px;
            left: 0;
            right: 0;
            height: 20px;
            background: linear-gradient(135deg, #1e3a8a 0%, #0d9488 50%, #10b981 100%);
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 100%);
        }
        .header-icon {
            font-size: 48px;
            margin-bottom: 10px;
            display: block;
        }
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 8px 0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header p {
            color: #d1fae5;
            font-size: 16px;
            margin: 0;
        }
        .content {
            padding: 50px 30px 30px 30px;
            background: #ffffff;
        }
        .section {
            margin-bottom: 30px;
        }
        .section-title {
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #1e3a8a;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .section-title::before {
            content: '';
            display: inline-block;
            width: 4px;
            height: 20px;
            background: linear-gradient(to bottom, #1e3a8a, #10b981);
            border-radius: 2px;
        }
        .info-grid {
            display: table;
            width: 100%;
            border-collapse: separate;
            border-spacing: 0 12px;
        }
        .info-row {
            display: table-row;
        }
        .info-label {
            display: table-cell;
            font-size: 13px;
            font-weight: 600;
            color: #6b7280;
            padding: 12px 20px 12px 0;
            width: 120px;
            vertical-align: top;
        }
        .info-value {
            display: table-cell;
            font-size: 15px;
            color: #1f2937;
            padding: 12px 20px;
            background: #f9fafb;
            border-left: 3px solid #10b981;
            border-radius: 6px;
            font-weight: 500;
        }
        .service-badge {
            display: inline-block;
            padding: 10px 20px;
            background: linear-gradient(135deg, #dbeafe 0%, #d1fae5 100%);
            color: #1e3a8a;
            border-radius: 25px;
            font-weight: 600;
            font-size: 15px;
            border: 2px solid #10b981;
        }
        .message-box {
            background: #f9fafb;
            padding: 20px;
            border-radius: 8px;
            border: 1px solid #e5e7eb;
            color: #374151;
            font-size: 15px;
            line-height: 1.7;
            white-space: pre-wrap;
            word-wrap: break-word;
            margin-top: 10px;
        }
        .divider {
            height: 1px;
            background: linear-gradient(to right, transparent, #e5e7eb 50%, transparent);
            margin: 30px 0;
        }
        .footer {
            background: #f9fafb;
            padding: 25px 30px;
            text-align: center;
            border-top: 3px solid #10b981;
        }
        .footer p {
            font-size: 13px;
            color: #6b7280;
            margin: 8px 0;
            line-height: 1.6;
        }
        .footer strong {
            color: #1e3a8a;
            font-weight: 600;
        }
        .reply-button {
            display: inline-block;
            margin-top: 15px;
            padding: 12px 28px;
            background: linear-gradient(135deg, #1e3a8a 0%, #10b981 100%);
            color: #ffffff;
            text-decoration: none;
            border-radius: 25px;
            font-weight: 600;
            font-size: 14px;
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }
        .icon {
            font-size: 18px;
            margin-right: 5px;
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
            <span class="header-icon">📧</span>
            <h1>New Contact Form Submission</h1>
            <p>Solinex Website • Contact Form</p>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Contact Information Section -->
            <div class="section">
                <div class="section-title">
                    <span>📋 Contact Information</span>
                </div>
                <div class="info-grid">
                    <div class="info-row">
                        <div class="info-label">👤 Name</div>
                        <div class="info-value">{{from_name}}</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">🏢 Company</div>
                        <div class="info-value">{{company}}</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">📧 Email</div>
                        <div class="info-value">{{from_email}}</div>
                    </div>
                    <div class="info-row">
                        <div class="info-label">📱 Phone</div>
                        <div class="info-value">{{phone}}</div>
                    </div>
                </div>
            </div>
            
            <div class="divider"></div>
            
            <!-- Service Section -->
            <div class="section">
                <div class="section-title">
                    <span>🎯 Service Interested</span>
                </div>
                <div class="service-badge">{{service}}</div>
            </div>
            
            <div class="divider"></div>
            
            <!-- Message Section -->
            <div class="section">
                <div class="section-title">
                    <span>💬 Message</span>
                </div>
                <div class="message-box">{{message}}</div>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p>✅ This email was sent via the <strong>Solinex</strong> website contact form.</p>
            <p>📨 Reply directly to this email to respond to: <strong>{{from_email}}</strong></p>
            <a href="mailto:{{from_email}}" class="reply-button">💌 Reply to {{from_name}}</a>
            <p style="margin-top: 20px; font-size: 12px; color: #9ca3af;">Destination: {{to_email}}</p>
        </div>
    </div>
</body>
</html>
```

---

### Option 2: Plain Text Template (RECOMMENDED - Always Works)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   📧 NEW CONTACT FORM SUBMISSION
   Solinex Website Contact Form
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT INFORMATION
──────────────────────────────────────────────

Name:        {{from_name}}
Company:     {{company}}
Email:       {{from_email}}
Phone:       {{phone}}

🎯 SERVICE INTERESTED
──────────────────────────────────────────────

{{service}}

💬 MESSAGE
──────────────────────────────────────────────

{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📌 This email was sent via the Solinex website contact form.
📧 Reply directly to this email to respond to: {{from_email}}
📮 Destination: {{to_email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### Option 3: Clean Plain Text (Minimal)

```
NEW CONTACT FROM SOLINEX WEBSITE
=================================

From: {{from_name}}
Company: {{company}}
Email: {{from_email}}
Phone: {{phone}}
Service: {{service}}

MESSAGE:
--------
{{message}}

=================================
Reply to: {{from_email}}
```

---

## EmailJS Template Settings

When setting up your template in EmailJS dashboard:

1. **Template Name**: Solinex Contact Form
2. **Subject**: `New Contact Form Submission from {{from_name}}`
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
| `{{company}}` | Company name | "Tech Corp" |
| `{{from_email}}` | Customer's email | "john@example.com" |
| `{{phone}}` | Phone number | "+66 62-129-2126" |
| `{{service}}` | Selected service | "web-development" |
| `{{message}}` | Customer's message | "I need help with..." |
| `{{to_email}}` | Destination email | "admin@solinex.dev" |

---

## How to Add Template to EmailJS

1. Go to https://dashboard.emailjs.com/admin
2. Click on **Email Templates**
3. Find template **template_vw90k8i** or create new one
4. Click **Edit**
5. Set the **Subject** to: `New Contact Form Submission from {{from_name}}`
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


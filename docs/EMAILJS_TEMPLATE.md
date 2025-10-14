# EmailJS Template for Solinex Contact Form

## Template Configuration

Use this template in your EmailJS dashboard for **template_vw90k8i**

### ✨ What's New in This Version

- **Modern Sophisticated Design**: Premium look with advanced gradients and micro-animations
- **Enhanced Brand Identity**: Sophisticated use of Solinex colors with dynamic visual elements
- **Welcome Section**: Professional introduction with icon and descriptive text
- **Advanced Interactions**: Subtle hover effects, shimmer animations, and smooth transitions
- **Premium Typography**: Inter font with perfect spacing and hierarchy
- **Layered Design**: Multiple visual layers with depth and sophistication
- **Enhanced UX**: Better information architecture and user flow
- **Fully Responsive**: Optimized for all devices with refined mobile experience
- **Print Optimized**: Clean printing with professional formatting

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

### Option 1: HTML Template (Modern & Sophisticated)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Reset & Base Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #1e293b;
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            padding: 20px;
            -webkit-text-size-adjust: 100%;
            min-height: 100vh;
        }
        
        /* Email Container */
        .email-wrapper {
            max-width: 640px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 
                0 25px 50px -12px rgba(0, 0, 0, 0.08),
                0 0 0 1px rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(20px);
            position: relative;
        }
        
        .email-wrapper::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #FFE838 0%, #67C090 50%, #339AC7 100%);
        }
        
        /* Header */
        .header {
            background: linear-gradient(135deg, #67C090 0%, #339AC7 50%, #FFE838 100%);
            padding: 40px 32px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%);
            animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(30px, -30px) rotate(120deg); }
            66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        
        .logo-container {
            position: relative;
            z-index: 2;
            margin-bottom: 20px;
        }
        
        .logo {
            width: 80px;
            height: 80px;
            border-radius: 20px;
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            padding: 12px;
            box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.12),
                0 0 0 1px rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            position: relative;
        }
        
        .logo::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 20px;
            padding: 2px;
            background: linear-gradient(135deg, #FFE838, #67C090, #339AC7);
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: xor;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .logo:hover::after {
            opacity: 1;
        }
        
        .header-content {
            position: relative;
            z-index: 2;
        }
        
        .header h1 {
            color: #ffffff;
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 8px 0;
            letter-spacing: -0.02em;
            text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }
        
        .header p {
            color: #ffffff;
            font-size: 16px;
            margin: 0;
            font-weight: 500;
            opacity: 0.95;
            text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
        }
        
        /* Content */
        .content {
            padding: 48px 32px;
            background: #ffffff;
        }
        
        .welcome-section {
            text-align: center;
            margin-bottom: 40px;
            padding: 32px;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-radius: 20px;
            border: 1px solid #e2e8f0;
        }
        
        .welcome-icon {
            width: 64px;
            height: 64px;
            background: linear-gradient(135deg, #FFE838 0%, #67C090 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 16px;
            font-size: 28px;
            box-shadow: 0 8px 24px rgba(255, 232, 56, 0.3);
        }
        
        .welcome-title {
            font-size: 20px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 8px;
        }
        
        .welcome-text {
            color: #64748b;
            font-size: 15px;
            line-height: 1.5;
        }
        
        .section {
            margin-bottom: 32px;
        }
        
        .section:last-child {
            margin-bottom: 0;
        }
        
        .section-title {
            font-size: 16px;
            font-weight: 600;
            color: #1e293b;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            position: relative;
        }
        
        .section-title::before {
            content: '';
            display: inline-block;
            width: 6px;
            height: 24px;
            background: linear-gradient(135deg, #FFE838 0%, #67C090 100%);
            border-radius: 3px;
            box-shadow: 0 2px 8px rgba(255, 232, 56, 0.3);
        }
        
        /* Contact Info Grid */
        .info-grid {
            display: grid;
            gap: 20px;
        }
        
        .info-item {
            display: flex;
            flex-direction: column;
            padding: 24px;
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .info-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 6px;
            height: 100%;
            background: linear-gradient(135deg, #339AC7 0%, #67C090 100%);
        }
        
        .info-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }
        
        .info-label {
            font-size: 13px;
            font-weight: 600;
            color: #64748b;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        
        .info-label::before {
            content: '';
            width: 4px;
            height: 4px;
            background: #67C090;
            border-radius: 50%;
        }
        
        .info-value {
            font-size: 16px;
            color: #1e293b;
            font-weight: 500;
            word-break: break-word;
            line-height: 1.5;
        }
        
        /* Service Badge */
        .service-section {
            text-align: center;
            padding: 40px 32px;
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border-radius: 20px;
            border: 1px solid #e2e8f0;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .service-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #FFE838 0%, #67C090 100%);
        }
        
        .service-badge {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
            padding: 20px 40px;
            background: linear-gradient(135deg, #FFE838 0%, #67C090 100%);
            color: #ffffff;
            border-radius: 50px;
            font-weight: 600;
            font-size: 16px;
            border: none;
            box-shadow: 
                0 8px 24px rgba(255, 232, 56, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.2);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
            text-align: center;
            min-width: 280px;
            max-width: 100%;
            line-height: 1.4;
        }
        
        .service-badge::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }
        
        .service-badge:hover::before {
            left: 100%;
        }
        
        /* Message Box */
        .message-box {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            padding: 32px;
            border-radius: 16px;
            border: 1px solid #e2e8f0;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
            color: #1e293b;
            font-size: 16px;
            line-height: 1.7;
            white-space: pre-wrap;
            word-wrap: break-word;
            position: relative;
            overflow: hidden;
            text-align: left;
            display: block;
        }
        
        .message-box::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 6px;
            height: 100%;
            background: linear-gradient(135deg, #339AC7 0%, #67C090 100%);
        }
        
        /* Footer */
        .footer {
            background: linear-gradient(135deg, #447170 0%, #67C090 100%);
            padding: 40px 32px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }
        
        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #FFE838 0%, #67C090 50%, #339AC7 100%);
        }
        
        .footer-content {
            position: relative;
            z-index: 2;
        }
        
        .footer p {
            font-size: 14px;
            color: #ffffff;
            margin: 0 0 12px 0;
            line-height: 1.6;
            opacity: 0.9;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
        
        .footer p:last-child {
            margin-bottom: 0;
        }
        
        .footer strong {
            color: #ffffff;
            font-weight: 600;
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
        }
        
        .reply-button {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-top: 20px;
            padding: 14px 28px;
            background: linear-gradient(135deg, #67C090 0%, #339AC7 100%);
            color: #ffffff;
            text-decoration: none;
            border-radius: 50px;
            font-weight: 600;
            font-size: 15px;
            transition: all 0.3s ease;
            box-shadow: 0 8px 24px rgba(103, 192, 144, 0.3);
            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
            position: relative;
            overflow: hidden;
        }
        
        .reply-button::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            transition: left 0.5s;
        }
        
        .reply-button:hover {
            background: linear-gradient(135deg, #339AC7 0%, #67C090 100%);
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(103, 192, 144, 0.4);
        }
        
        .reply-button:hover::before {
            left: 100%;
        }
        
        .reply-button::after {
            content: '→';
            margin-left: 4px;
            transition: transform 0.3s ease;
        }
        
        .reply-button:hover::after {
            transform: translateX(4px);
        }
        
        /* Responsive Design */
        @media only screen and (max-width: 600px) {
            body {
                padding: 12px;
                background: #f8fafc;
            }
            
            .email-wrapper {
                border-radius: 16px;
                max-width: 100%;
            }
            
            .header {
                padding: 32px 20px;
            }
            
            .logo {
                width: 64px;
                height: 64px;
                padding: 10px;
            }
            
            .logo-container {
                margin-bottom: 16px;
            }
            
            .header h1 {
                font-size: 22px;
            }
            
            .header p {
                font-size: 14px;
            }
            
            .content {
                padding: 32px 20px;
            }
            
            .welcome-section {
                padding: 24px;
                margin-bottom: 32px;
            }
            
            .welcome-icon {
                width: 56px;
                height: 56px;
                font-size: 24px;
            }
            
            .section {
                margin-bottom: 28px;
            }
            
            .info-item {
                padding: 20px;
            }
            
            .service-section {
                padding: 24px;
            }
            
            .service-badge {
                padding: 16px 28px;
                font-size: 15px;
                min-width: 240px;
                gap: 10px;
            }
            
            .message-box {
                padding: 24px;
                font-size: 15px;
                text-align: left;
            }
            
            .footer {
                padding: 32px 20px;
            }
            
            .footer p {
                font-size: 13px;
            }
            
            .reply-button {
                padding: 12px 24px;
                font-size: 14px;
            }
        }
        
        /* Tablet Styles */
        @media only screen and (min-width: 601px) and (max-width: 768px) {
            .email-wrapper {
                max-width: 600px;
            }
            
            .content {
                padding: 40px 28px;
            }
            
            .header {
                padding: 36px 28px;
            }
        }
        
        /* Print Styles */
        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .email-wrapper {
                box-shadow: none;
                border: 1px solid #000;
                border-radius: 0;
            }
            
            .header::before {
                display: none;
            }
            
            .reply-button {
                display: none;
            }
            
            .info-item:hover,
            .service-badge:hover,
            .reply-button:hover {
                transform: none;
            }
        }
    </style>
</head>
<body>
    <div class="email-wrapper">
        <!-- Header -->
        <div class="header">
            <div class="logo-container">
                <img src="https://iili.io/KezVGnV.png" alt="Solinex Logo" class="logo" />
            </div>
            <div class="header-content">
                <h1>New Contact Form Submission</h1>
                <p>Solinex Website • Professional Communication</p>
            </div>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Welcome Section -->
            <div class="welcome-section">
                <div class="welcome-icon">📧</div>
                <div class="welcome-title">New Contact Request</div>
                <div class="welcome-text">You have received a new message through your website contact form. Please review the details below.</div>
            </div>
            
            <!-- Contact Information Section -->
            <div class="section">
                <div class="section-title">Contact Information</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="info-label">Full Name</div>
                        <div class="info-value">{{from_name}}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Company</div>
                        <div class="info-value">{{company}}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Email Address</div>
                        <div class="info-value">{{from_email}}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Phone Number</div>
                        <div class="info-value">{{phone}}</div>
                    </div>
                </div>
            </div>
            
            <!-- Service Section -->
            <div class="section">
                <div class="section-title">Service Interested</div>
                <div class="service-section">
                    <div class="service-badge">
                        <span style="font-size: 18px;">🎯</span>
                        <span>Mobile Application Development</span>
                    </div>
                </div>
            </div>
            
            <!-- Message Section -->
            <div class="section">
                <div class="section-title">Customer Message</div>
                <div class="message-box">{{message}}</div>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-content">
                <p>This message was sent via the <strong>Solinex</strong> website contact form</p>
                <p>Reply directly to: <strong>{{from_email}}</strong></p>
                <a href="mailto:{{from_email}}" class="reply-button">Reply to {{from_name}}</a>
            </div>
        </div>
    </div>
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


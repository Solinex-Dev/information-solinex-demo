# Web3Forms Setup Guide for Solinex Contact Form

Simple, fast, and **unlimited free form submissions**! 🚀

## ⚡ Quick Setup (2 minutes)

### **Step 1: Get Your Access Key** (1 minute)

1. Go to **https://web3forms.com/**
2. Click **"Get Started - It's Free"**
3. Enter your email: `admin@solinex.dev`
4. Click **"Create Access Key"**
5. ✅ **Copy the Access Key** (looks like: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)
6. Check your email inbox for confirmation

---

### **Step 2: Add Access Key to .env File**

1. Open the `.env` file in your project root
2. Replace `your_access_key_here` with your actual access key:

```env
VITE_WEB3FORMS_ACCESS_KEY=a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6
```

3. Save the file
4. The dev server will auto-restart! ✅

---

### **Step 3: Test Your Form** 🧪

1. Go to: **http://localhost:5176/**
2. Scroll to the "Contact Us" section
3. Fill in the form with test data
4. Click "Send Message"
5. ✅ You should see a success message!
6. 📧 Check your email - you'll receive the form submission

---

## 🎯 **What You Get:**

✅ **Unlimited form submissions** (100% free forever)  
✅ **Email notifications** to admin@solinex.dev  
✅ **Built-in spam protection**  
✅ **No rate limits**  
✅ **Form submissions dashboard** at https://web3forms.com/  
✅ **No firewall/CORS issues**  
✅ **Custom email templates**  
✅ **File upload support** (if needed later)  

---

## 📊 **View Your Submissions:**

1. Go to https://web3forms.com/
2. Enter your email: `admin@solinex.dev`
3. Click "Login"
4. You'll see all form submissions in a dashboard!

---

## 🎨 **Email Format:**

Emails will arrive with:
- **Subject:** "New Contact Form Submission from [Name] | Solinex Website"
- **From:** Solinex Website
- **Contains:**
  - Name
  - Email
  - Phone
  - Company
  - Message
- **Reply-To:** Customer's email (so you can reply directly)

---

## 🔧 **Configuration Options:**

You can customize the form in `src/components/ContactForm.jsx`:

### Change Email Template:
```javascript
subject: `Your custom subject here`,
from_name: 'Your Company Name',
```

### Add More Fields:
```javascript
const formDataToSend = {
  access_key: accessKey,
  // ... existing fields
  website: formData.website,
  budget: formData.budget,
  // any custom fields you want
}
```

### Change Redirect After Submit:
```javascript
redirect: 'https://yoursite.com/thank-you'
```

---

## 🛡️ **Spam Protection:**

Web3Forms includes:
- ✅ Honeypot field (already added in code)
- ✅ Rate limiting per IP
- ✅ Email verification
- ✅ Bot detection

No need to add reCAPTCHA unless you get lots of spam!

---

## 🔍 **Troubleshooting:**

### Not receiving emails?
- Check spam/junk folder
- Verify access key is correct in `.env`
- Restart dev server after changing `.env`
- Check Web3Forms dashboard for submissions

### Error: "Form service not configured"
- Make sure `.env` file exists in project root
- Verify the access key is set correctly
- Restart the dev server

### Success message shows but no email?
- Check Web3Forms dashboard - submission might be there
- Verify your email address in Web3Forms settings
- Check if email service is set up correctly

---

## 💰 **Pricing:**

- **Free Forever:** Unlimited submissions
- No credit card required
- No monthly limits
- No hidden fees

---

## 📚 **Additional Features:**

Visit https://web3forms.com/docs for:
- Custom email templates
- Webhooks integration
- API documentation
- File uploads
- Auto-responders (reply to customers automatically)
- Multiple recipients
- CC/BCC options

---

## 🎉 **You're Done!**

Your contact form is now:
- ✅ Working with unlimited free submissions
- ✅ Sending emails to your inbox
- ✅ Protected from spam
- ✅ Storing submissions in a dashboard

**No more network issues, no rate limits, completely free!** 🚀

---

## 🆚 **Why Web3Forms > EmailJS:**

| Feature | Web3Forms | EmailJS |
|---------|-----------|---------|
| Free Submissions | **Unlimited** | 200/month |
| Network Issues | **None** | CORS/Firewall |
| Setup Time | **2 min** | 10 min |
| Dashboard | **Yes** | Yes |
| Rate Limits | **None** | 200/month |
| Cost | **$0** | Free tier limited |

---

Need help? Visit https://web3forms.com/docs or contact support@web3forms.com


# 📊 Admin Dashboard Setup Guide

## 🎉 What You Get

A **custom admin dashboard** to view all contact form submissions directly on your website!

### ✅ Features:
- 📊 **Real-time statistics** (Total, Unread, Read, Today)
- 📝 **View all submissions** with full details
- ✉️ **Mark as read/unread**
- 🗑️ **Delete submissions**
- 🔐 **Password protected** admin access
- 💾 **Persistent storage** (JSON file database)
- 📱 **Responsive design** (works on mobile)
- 🎨 **Beautiful UI** matching your website theme

---

## 🚀 Quick Start

### **Step 1: Start Both Servers**

Run this single command to start both frontend and backend:

```bash
npm run dev
```

This will start:
- ✅ **Frontend**: http://localhost:5176 (Vite)
- ✅ **Backend API**: http://localhost:3001 (Express)

---

### **Step 2: Access Admin Dashboard**

Go to: **http://localhost:5176/admin**

**Default Login:**
- Password: `admin123`

---

### **Step 3: Test Contact Form**

1. Go to: http://localhost:5176/
2. Scroll to Contact Form
3. Submit a test form
4. Go to admin dashboard to see it appear!

---

## 🔐 Change Admin Password

Edit the `.env` file:

```env
ADMIN_PASSWORD=your_secure_password_here
```

Then restart the servers (stop with Ctrl+C, then `npm run dev` again)

---

## 📁 Project Structure

```
your-project/
├── server/
│   ├── index.js           # Backend API server
│   ├── submissions.json   # Database file (auto-created)
│   └── package.json       # Server dependencies
├── src/
│   ├── pages/
│   │   └── AdminDashboard.jsx    # Admin dashboard component
│   ├── components/
│   │   └── ContactForm.jsx       # Updated to use backend API
│   └── App.jsx            # Updated with routing
├── .env                   # Configuration (don't commit!)
└── package.json          # Updated with scripts
```

---

## 🛠️ API Endpoints

### Public Endpoints

**POST** `/api/contact`
- Submit contact form
- Body: `{ name, email, phone, company, message }`

### Admin Endpoints (require password)

**GET** `/api/admin/submissions?password=xxx`
- Get all submissions

**GET** `/api/admin/stats?password=xxx`
- Get statistics

**PATCH** `/api/admin/submissions/:id/read?password=xxx`
- Mark submission as read

**DELETE** `/api/admin/submissions/:id?password=xxx`
- Delete submission

---

## 📊 Dashboard Features

### Statistics Cards
- **Total Submissions**: All-time count
- **Unread**: New submissions needing attention
- **Read**: Processed submissions
- **Today**: Submissions from today

### Submissions Table
- **Status column**: Shows "New" (orange) or "Read" (green)
- **Click any row**: View full details in modal
- **Mark as read button** (✓)
- **Delete button** (✕)

### Submission Details Modal
- View full message
- See all contact information
- Mark as read or delete

---

## 💾 Data Storage

Submissions are stored in `server/submissions.json`:

```json
[
  {
    "id": "unique-id",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+66 12-345-6789",
    "company": "ABC Company",
    "message": "Hello!",
    "submittedAt": "2025-01-15T10:30:00.000Z",
    "read": false,
    "ip": "127.0.0.1",
    "userAgent": "Mozilla/5.0..."
  }
]
```

---

## 🔒 Security Notes

### ⚠️ Important for Production:

1. **Change the default password!**
   ```env
   ADMIN_PASSWORD=use_a_strong_password_here
   ```

2. **Add `.env` to .gitignore** (already done ✅)

3. **Use HTTPS in production**

4. **Consider adding:**
   - Rate limiting
   - JWT tokens instead of password query params
   - Database (MongoDB, PostgreSQL) instead of JSON file
   - Email notifications for new submissions

---

## 🚦 Running Separate Servers

If you want to run frontend and backend separately:

```bash
# Terminal 1 - Frontend
npm run dev:frontend

# Terminal 2 - Backend
npm run dev:backend
```

---

## 🐛 Troubleshooting

### "Cannot connect to server" error in form
- Make sure backend is running: `npm run dev:backend`
- Check backend console for errors
- Verify API URL: `http://localhost:3001`

### "Unauthorized" in admin dashboard
- Check your password in `.env`
- Try logging out and back in
- Clear localStorage: `localStorage.removeItem('adminPassword')`

### Port already in use
- Frontend (5176): Stop other Vite instances
- Backend (3001): Stop other Node servers
- Change port in `server/index.js` (PORT variable)

### Submissions not showing up
- Check `server/submissions.json` file exists
- Verify backend console shows "✅ New submission from..."
- Refresh admin dashboard

---

## 📈 Upgrading to Production Database

When you're ready for production, consider upgrading from JSON file to a real database:

### MongoDB (Recommended)
```bash
npm install mongoose
```

### PostgreSQL
```bash
npm install pg
```

### SQLite (Simple, file-based)
```bash
npm install better-sqlite3
```

I can help you migrate when you're ready!

---

## 🎯 Next Steps

### Optional Enhancements:

1. **Email Notifications**
   - Get email when new submission arrives
   - Can integrate with Nodemailer or SendGrid

2. **Export to CSV**
   - Download all submissions as spreadsheet

3. **Search & Filter**
   - Search by name, email, date
   - Filter by read/unread

4. **Tags & Categories**
   - Organize submissions by type/category

5. **Response System**
   - Reply to customers directly from dashboard

**Let me know if you want any of these features!**

---

## 🎉 You're All Set!

Your custom admin dashboard is ready to use!

1. ✅ No third-party dependencies
2. ✅ Full control over your data
3. ✅ Beautiful, professional UI
4. ✅ Free forever (no limits!)

**Go to:** http://localhost:5176/admin

---

Need help? Check the main README or ask for assistance! 🚀


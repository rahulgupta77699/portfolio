# EmailJS Setup Instructions

## Current Status
The contact form is configured with demo credentials. To make it fully functional and send emails to **sera4tech@gmail.com**, follow these steps:

## Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Click "Sign Up" (top right)
3. Sign up with **sera4tech@gmail.com**
4. Verify your email

### Step 2: Add Email Service
1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Click "Connect Account" and log in with sera4tech@gmail.com
5. Copy the **Service ID** (looks like: service_xxxxxxx)

### Step 3: Create Email Template
1. Click "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Template Name:** Contact Form
**Subject:** New Contact from {{from_name}}
**Content:**
```
You received a new message from your website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Copy the **Template ID** (looks like: template_xxxxxxx)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (looks like: xxxxxxxxxxxxxx)

### Step 5: Update the Code
Open `src/components/ContactForm.tsx` and replace lines 38-43 with your credentials:

```typescript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',   // Replace with your Service ID
  'YOUR_TEMPLATE_ID',  // Replace with your Template ID
  templateParams,
  'YOUR_PUBLIC_KEY'    // Replace with your Public Key
);
```

### Step 6: Test
1. Save the file
2. Restart the dev server (npm run dev)
3. Fill out the contact form
4. Check sera4tech@gmail.com inbox!

---

## Free Tier Limits
- ✅ 200 emails/month
- ✅ No credit card required
- ✅ Works perfectly for small to medium websites

## Troubleshooting
If emails don't arrive:
1. Check spam folder in sera4tech@gmail.com
2. Verify all IDs are correct
3. Check EmailJS dashboard for error logs
4. Make sure Gmail service is connected properly

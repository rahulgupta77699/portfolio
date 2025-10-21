# Contact Form Setup Instructions

The contact form uses EmailJS to send emails to sera4tech@gmail.com

## Setup Steps:

1. **Go to https://www.emailjs.com/**
2. **Create a free account**
3. **Add Email Service:**
   - Click "Email Services"
   - Click "Add New Service"
   - Choose "Gmail"
   - Connect your sera4tech@gmail.com account
   - Note the Service ID

4. **Create Email Template:**
   - Click "Email Templates"
   - Click "Create New Template"
   - Use this template:
   ```
   Subject: New Contact from {{from_name}}
   
   Name: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
   - Note the Template ID

5. **Get Public Key:**
   - Click on your account name
   - Go to "Account"
   - Copy the Public Key

6. **Update .env.local file:**
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

7. **Restart the dev server:**
   ```
   npm run dev
   ```

The form will now send emails directly to sera4tech@gmail.com!

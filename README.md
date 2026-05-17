# UsPe Website - Deployment Guide

## 📁 Website Structure

```
uspe-website/
├── index.html          # Main landing page
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features
├── assets/            # Images and media (create this folder)
│   └── dashboard-preview.png  # Add your app screenshot
└── README.md          # This file
```

---

## 🚀 Quick Deployment Options

### **Option 1: GitHub Pages (FREE & RECOMMENDED)**

#### Step 1: Create GitHub Repository
1. Go to [github.com](https://github.com) and create new repository
2. Name it: `uspe-website`
3. Keep it **Public**

#### Step 2: Upload Files
```bash
# In your terminal/command prompt:
cd uspe-website
git init
git add .
git commit -m "Initial UsPe website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/uspe-website.git
git push -u origin main
```

#### Step 3: Enable GitHub Pages
1. Go to your repository → **Settings** → **Pages**
2. Source: Deploy from a branch
3. Branch: `main` → folder: `/ (root)`
4. Click **Save**

✅ **Your website will be live at:** `https://YOUR_USERNAME.github.io/uspe-website/`

---

### **Option 2: Netlify (FREE - Even Easier)**

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click **"Add new site"** → **"Import an existing project"**
4. Connect to GitHub and select your `uspe-website` repository
5. Click **Deploy**

✅ **You'll get a URL like:** `https://uspe-project.netlify.app`
   - You can customize the subdomain in settings

---

### **Option 3: Vercel (FREE - Great for Projects)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Click **"New Project"**
4. Import your `uspe-website` repository
5. Click **Deploy**

✅ **Live URL:** `https://uspe-website.vercel.app`

---

### **Option 4: Simple Drag & Drop (No Git Required)**

#### Netlify Drop
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your `uspe-website` folder onto the page
3. Done! ✅ Instant deployment

#### Vercel Drop
1. Install Vercel CLI: `npm install -g vercel`
2. Run: `vercel` in your project folder
3. Follow prompts

---

## 🎨 Adding Your App Screenshots

### Create the `assets` folder:
```bash
mkdir assets
```

### Add these images:
1. **dashboard-preview.png** - Screenshot of your UsPe Flutter app dashboard
   - Recommended size: 300x600px (phone mockup)
   
2. **logo.png** (optional) - UsPe logo
   - Recommended size: 512x512px

### Update image paths in `index.html`:
```html
<!-- Line ~62 in index.html -->
<img src="assets/dashboard-preview.png" alt="UsPe Dashboard">
```

---

## 🔧 Customization Guide

### 1. Update Contact Information

**In `index.html` (around line 730):**
```html
<a href="mailto:YOUR_EMAIL@gmail.com" class="btn btn-primary btn-large">Request Demo</a>

<div class="contact-item">
    <span class="contact-icon">📧</span>
    <span>YOUR_EMAIL@gmail.com</span>
</div>
```

### 2. Add Your Domain Name

After deployment, you can add a custom domain:

**For GitHub Pages:**
1. Buy domain from [Namecheap](https://namecheap.com) or [GoDaddy](https://godaddy.com)
2. Add `CNAME` file to your repository with your domain
3. Configure DNS settings

**For Netlify/Vercel:**
1. Go to **Domain Settings**
2. Click **Add custom domain**
3. Follow DNS instructions

---

## 📱 Testing Your Website

### Before Deployment:
1. Open `index.html` in your browser (double-click the file)
2. Check all sections load correctly
3. Test on mobile (press F12 → Toggle device toolbar)

### After Deployment:
1. Check responsiveness on actual mobile device
2. Test all navigation links
3. Verify images load correctly

---

## 🎯 SEO Optimization (Optional but Recommended)

### Add these meta tags to `<head>` in `index.html`:

```html
<!-- Open Graph for Social Media -->
<meta property="og:title" content="UsPe - UPI Attribution for Unbanked Vendors">
<meta property="og:description" content="Track UPI payments for 63M+ micro-vendors without smartphones">
<meta property="og:image" content="https://YOUR_DOMAIN/assets/og-image.png">
<meta property="og:url" content="https://YOUR_DOMAIN">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="UsPe - Financial Inclusion for Street Vendors">
<meta name="twitter:description" content="Auto-attribute UPI payments. Zero cost for vendors.">
```

---

## 📊 Analytics (Track Visitors)

### Add Google Analytics:

1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get your tracking code
3. Add before `</head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🐛 Common Issues & Fixes

### Issue 1: Images Not Loading
**Fix:** Check file paths are correct
```html
<!-- Wrong -->
<img src="/assets/logo.png">

<!-- Correct -->
<img src="assets/logo.png">
```

### Issue 2: Mobile Menu Not Working
**Fix:** Ensure `script.js` is loaded:
```html
<!-- At end of body tag -->
<script src="script.js"></script>
```

### Issue 3: CSS Not Applied
**Fix:** Clear browser cache (Ctrl+F5)

---

## 📧 Contact Form Setup (Optional)

To add a working contact form, use [Formspree](https://formspree.io):

1. Sign up at formspree.io
2. Create a form
3. Add this to your HTML:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" placeholder="Your email" required>
  <textarea name="message" placeholder="Your message" required></textarea>
  <button type="submit">Send</button>
</form>
```

---

## ✅ Pre-Launch Checklist

- [ ] Added app screenshots to `assets/` folder
- [ ] Updated email addresses in contact section
- [ ] Tested on mobile device
- [ ] All links working
- [ ] No console errors (press F12 to check)
- [ ] Favicon added (optional)
- [ ] Domain name configured (if using custom domain)
- [ ] Analytics tracking code added (optional)

---

## 🎓 For iStart Rajasthan Registration

Use your deployed website URL in:
- **Startup Website field**: `https://your-uspe-website.netlify.app`
- **Project documentation**: Link to your GitHub repository
- **Pitch deck**: Include website screenshots

---

## 💡 Next Steps After Launch

1. **Share your website:**
   - LinkedIn post
   - WhatsApp to mentors/professors
   - Email to iStart Rajasthan team

2. **Add to your resume:**
   - Portfolio section: "Built and deployed UsPe landing page"
   - Link: Your deployed URL

3. **Future enhancements:**
   - Add blog section for updates
   - Add demo video
   - Create pitch deck download
   - Add testimonials section

---

## 📞 Need Help?

**Created by:** Toufeeq Ahmed Siddiqui  
**Project:** MBA Final Year - Business Analytics  
**Institution:** Engineering College Ajmer

---

**🎉 Congratulations! Your UsPe website is ready to go live!**

Remember: This website is part of your iStart Rajasthan application and can be used in your final year project presentation.

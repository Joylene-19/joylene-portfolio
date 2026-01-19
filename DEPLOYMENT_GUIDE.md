# 🚀 GitHub Pages Deployment Guide

## 📋 Step-by-Step Instructions

### 1. **Create Repository on GitHub**
1. Go to [GitHub.com](https://github.com/Joylene-19)
2. Click **"New Repository"** (green button)
3. Repository name: `joylene-portfolio` or `portfolio-website`
4. Make it **Public** (required for free GitHub Pages)
5. ✅ Check **"Add a README file"**
6. Click **"Create repository"**

### 2. **Upload Your Portfolio Files**
You have two options:

#### Option A: Using GitHub Web Interface (Easier)
1. In your new repository, click **"uploading an existing file"**
2. Drag and drop ALL these files:
   - `index.html`
   - `style.css`
   - `script.js`
   - `images/` folder (with all subfolders)
3. Write commit message: "Add portfolio website"
4. Click **"Commit changes"**

#### Option B: Using Git Commands (Advanced)
```bash
git clone https://github.com/Joylene-19/your-repo-name.git
cd your-repo-name
# Copy all your portfolio files here
git add .
git commit -m "Add portfolio website"
git push origin main
```

### 3. **Enable GitHub Pages**
1. In your repository, go to **Settings** tab
2. Scroll down to **"Pages"** in left sidebar
3. Under **"Source"**, select **"Deploy from a branch"**
4. Choose **"main"** branch
5. Choose **"/ (root)"** folder
6. Click **"Save"**

### 4. **Your Website Will Be Live At:**
```
https://joylene-19.github.io/your-repo-name/
```

### 5. **Custom Domain (Optional)**
If you want a custom domain like `joylene.dev`:
1. Buy domain from provider (Namecheap, GoDaddy, etc.)
2. In Pages settings, add your domain
3. Configure DNS records with your provider

## 📁 **Files to Upload:**
Make sure you upload ALL these files:
```
portfolio-website/
├── index.html
├── style.css
├── script.js
├── images/
│   ├── profile/
│   │   └── joylene.jpg
│   └── projects/
│       ├── jai-hind/
│       ├── initium-novum/
│       ├── trueline-spaces/
│       ├── eatheallove/
│       ├── kindry-media/
│       └── trueline-scaping/
├── README.md
└── DEPLOYMENT_GUIDE.md
```

## ⚡ **Quick Checklist:**
- [ ] Repository created and public
- [ ] All files uploaded
- [ ] GitHub Pages enabled
- [ ] Website accessible at GitHub Pages URL
- [ ] Images added to folders
- [ ] All links working

## 🔧 **Troubleshooting:**
- **404 Error**: Check if `index.html` is in root folder
- **Images not loading**: Verify image paths and file names
- **CSS not working**: Check if `style.css` is in same folder as `index.html`
- **Takes time**: GitHub Pages can take 5-10 minutes to update

## 🎯 **Pro Tips:**
1. **Repository Name**: Use `joylene-19.github.io` as repo name for shorter URL
2. **README**: Add a nice README with project description
3. **Updates**: Any changes you push will automatically update the live site
4. **Mobile**: Test your site on mobile devices
5. **SEO**: Add meta tags for better search engine visibility

---
**🎉 Once deployed, share your portfolio URL with potential employers and clients!**
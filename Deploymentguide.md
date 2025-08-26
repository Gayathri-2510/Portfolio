# 🚀 Portfolio Deployment Guide

Complete step-by-step guide to deploy your portfolio on GitHub Pages.

## 📋 Pre-Deployment Checklist

### ✅ **Step 1: Verify Your Portfolio**
1. Check that the website runs locally: `cd frontend && yarn start`
2. Test all sections: Hero, About, Skills, Projects, Contact
3. Verify responsive design on mobile and desktop
4. Test navigation and contact form

### ✅ **Step 2: Update Personal Information**

**Edit `/frontend/src/data/mock.js`:**
```javascript
// Update with your actual details
export const contactInfo = {
  email: "your-actual-email@domain.com",
  phone: "your-actual-phone",
  linkedin: "your-actual-linkedin-url",
  github: "your-actual-github-url" // Add if available
};
```

**Optional: Add your photo in `/frontend/src/components/About.js`**

## 🎯 GitHub Deployment Steps

### **Method 1: GitHub Pages (Recommended)**

#### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) and sign in
2. Click "New Repository" (green button)
3. Name it: `portfolio` or `your-name-portfolio`
4. Make it **Public** (required for free GitHub Pages)
5. ✅ Check "Add a README file"
6. Click "Create repository"

#### Step 2: Upload Your Code
1. Download/copy all your files from `/app/` folder
2. In your GitHub repository, click "uploading an existing file"
3. Drag and drop ALL files including:
   - `frontend/` folder (entire folder)
   - `README.md`
   - `.gitignore`
   - `DEPLOYMENT_GUIDE.md`

#### Step 3: Configure GitHub Pages
1. Go to repository **Settings** tab
2. Scroll to **Pages** section (left sidebar)
3. Under "Source": Select "Deploy from a branch"
4. Choose branch: `main` 
5. Choose folder: `/ (root)`
6. Click **Save**

#### Step 4: Update Package.json
1. Edit `frontend/package.json` in GitHub
2. Update the `homepage` field:
   ```json
   "homepage": "https://your-username.github.io/repository-name"
   ```
3. Commit changes

#### Step 5: Deploy Using GitHub Actions

**Create `.github/workflows/deploy.yml`:**

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'yarn'
        cache-dependency-path: frontend/yarn.lock
        
    - name: Install dependencies
      run: |
        cd frontend
        yarn install
        
    - name: Build
      run: |
        cd frontend
        yarn build
        
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./frontend/build
```

### **Method 2: Alternative - Direct Upload**

If GitHub Actions seems complex:

1. **Local Setup** (if you have Node.js):
   ```bash
   cd frontend
   yarn install
   yarn build
   ```

2. **Upload build folder**:
   - Copy contents of `frontend/build/` folder
   - Create new branch called `gh-pages`
   - Upload all build files to `gh-pages` branch
   - Set GitHub Pages to use `gh-pages` branch

## 🌐 Other Deployment Options

### **Option A: Netlify (Easiest)**
1. Go to [Netlify.com](https://netlify.com)
2. Sign up with GitHub
3. Click "New site from Git"
4. Choose your repository
5. Set build command: `cd frontend && yarn build`
6. Set publish directory: `frontend/build`
7. Deploy!

### **Option B: Vercel**
1. Go to [Vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your repository
4. Set root directory: `frontend`
5. Deploy automatically!

## 🔧 Troubleshooting

### **Common Issues:**

1. **404 Error on deployment:**
   - Check homepage URL in package.json
   - Ensure GitHub Pages is enabled
   - Wait 5-10 minutes for deployment

2. **Build fails:**
   - Check all dependencies are installed
   - Verify Node.js version compatibility
   - Check for any console errors

3. **Images not showing:**
   - Use relative paths: `./images/photo.jpg`
   - Place images in `frontend/public/` folder

### **Success Indicators:**
- ✅ Repository created and files uploaded
- ✅ GitHub Pages enabled in settings
- ✅ Build completes without errors
- ✅ Site accessible at your GitHub Pages URL

## 📱 Post-Deployment

### **Testing Your Live Site:**
1. Visit your GitHub Pages URL
2. Test on mobile and desktop
3. Check all sections load correctly
4. Verify contact form shows toast notifications
5. Test navigation between sections

### **Sharing Your Portfolio:**
- Add the URL to your LinkedIn profile
- Include it in your resume
- Share with potential employers
- Update README.md with live demo link

## 🎯 Final Checklist

- [ ] Repository created on GitHub
- [ ] All files uploaded successfully  
- [ ] GitHub Pages configured and enabled
- [ ] Personal information updated
- [ ] Portfolio accessible via GitHub Pages URL
- [ ] All sections working correctly
- [ ] Mobile responsiveness tested
- [ ] Contact information verified

---

🎉 **Congratulations!** Your professional portfolio is now live and ready to impress potential employers!

**Your Portfolio URL:** `https://your-username.github.io/repository-name`

## 📞 Need Help?

If you encounter any issues:
1. Check the GitHub repository's "Actions" tab for build logs
2. Verify all file paths are correct
3. Ensure package.json homepage URL matches your repository
4. Wait a few minutes after each change for deployment

---

**Made with ❤️ for your professional success!**

# 🚀 Deployment Guide

## Quick Start - Deploy to GitHub

Follow these steps to deploy your calculator to GitHub:

### 1. Create a GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Create a new repository named `calculator` (or any name you prefer)
3. **Don't** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

### 2. Push Your Code

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/calculator.git

# Push your code
git push -u origin main
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Click **Pages** in the left sidebar
4. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
5. Click **Save**

### 4. Wait for Deployment

- Go to the **Actions** tab in your repository
- You'll see the deployment workflow running
- Wait for it to complete (usually 2-3 minutes)
- Once complete, your calculator will be live!

### 5. Access Your Calculator

Your calculator will be available at:
```
https://YOUR-USERNAME.github.io/calculator/
```

---

## Alternative: Deploy to Vercel (Recommended for easier setup)

Vercel offers zero-configuration deployment:

### Option A: Deploy via Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click **"New Project"**
4. Import your `calculator` repository
5. Click **Deploy** (Vercel auto-detects Next.js settings)
6. Your calculator is live! 🎉

### Option B: Deploy via CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts
```

Your calculator will be deployed to a URL like: `calculator.vercel.app`

---

## Troubleshooting

### GitHub Pages not working?

1. Check Actions tab for errors
2. Make sure GitHub Pages source is set to "GitHub Actions"
3. Verify the workflow file exists at `.github/workflows/deploy.yml`

### Build failing?

1. Test locally first: `npm run build`
2. Check for TypeScript errors
3. Review the Actions logs for specific errors

### Images not loading?

The `next.config.ts` is already configured for static export with unoptimized images.

---

## Configuration Files

The following files have been configured for deployment:

- ✅ `.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ `next.config.ts` - Static export configuration
- ✅ `.gitignore` - Excludes node_modules and build files

## Need Help?

- Check the [Next.js deployment docs](https://nextjs.org/docs/deployment)
- Review [GitHub Pages documentation](https://docs.github.com/en/pages)
- Check [Vercel documentation](https://vercel.com/docs)

---

**🎉 That's it! Your calculator is now ready to be deployed!**

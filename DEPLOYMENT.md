# Deployment Guide

Open the extracted folder in VS Code.

```bash
npm install
npm run dev
```

Push to GitHub:

```bash
git init
git add .
git commit -m "Initial version"
git branch -M main
git remote add origin https://github.com/hoque07/vivatrack-fitness-platform.git
git push -u origin main
```

Enable GitHub Pages:
GitHub repository → Settings → Pages → Build and deployment → Source → GitHub Actions

Expected live link:
https://hoque07.github.io/vivatrack-fitness-platform/

Troubleshooting: If the site is blank, confirm the repository name is exactly vivatrack-fitness-platform. If the workflow fails, open the Actions tab and check npm install or npm run build.

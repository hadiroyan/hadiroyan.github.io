# Deployment Guide

## Prerequisites

- Node.js installed
- Git configured

## Deploy to GitHub Pages

Run these commands:

```bash
npm run build

git add dist -f

git commit -m 'deploy'

git push origin `git subtree split --prefix dist main`:gh-pages --force

git reset HEAD~1
```

## Notes

- Build output goes to gh-pages branch
- Live site: https://hadiroyan.github.io

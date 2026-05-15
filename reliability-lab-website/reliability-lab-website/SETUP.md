# 🚀 Setup Guide — Upload to GitHub

This guide will help you push this starter kit to your GitHub repository:
**https://github.com/JirawatSuwannasit/Reliability-lab-promote**

---

## Step 1: Download & Extract

1. Download the `reliability-lab-website.zip` file from this chat
2. Extract it to a location of your choice (e.g., `~/Documents/` or `~/Projects/`)
3. Open Terminal / Command Prompt and navigate into the folder:

```bash
cd path/to/reliability-lab-website
```

---

## Step 2: Initialize Git & Push to GitHub

### Option A: If the GitHub repo is EMPTY (no commits yet)

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit: design brief, content, and starter setup"

# Set main branch
git branch -M main

# Connect to your GitHub repo
git remote add origin https://github.com/JirawatSuwannasit/Reliability-lab-promote.git

# Push
git push -u origin main
```

### Option B: If the GitHub repo ALREADY HAS commits (e.g., README from GitHub)

```bash
# Clone the existing repo to a TEMP location first
cd ~/Desktop
git clone https://github.com/JirawatSuwannasit/Reliability-lab-promote.git temp-repo

# Copy all starter files INTO the cloned repo
cp -R /path/to/reliability-lab-website/* temp-repo/
cp -R /path/to/reliability-lab-website/.gitignore temp-repo/

# Go into the cloned repo
cd temp-repo

# Commit and push
git add .
git commit -m "Add design brief, content, and starter setup"
git push origin main
```

---

## Step 3: Verify on GitHub

Visit https://github.com/JirawatSuwannasit/Reliability-lab-promote and confirm you see:

```
✓ README.md
✓ docs/
  ├── design-brief.pdf
  ├── design-tokens.json
  ├── content.md
  └── site-structure.md
✓ assets/machine-photos/README.md
✓ tailwind.config.js
✓ package.json
✓ .gitignore
```

---

## Step 4: Open in Claude Code

After the files are on GitHub (and you've cloned the repo locally):

```bash
# Navigate to your project folder
cd path/to/Reliability-lab-promote

# Start Claude Code
claude
```

Then give Claude Code this prompt:

```
Read README.md and the files in docs/ to understand the project.
Then build the landing page using Vite + React + Tailwind CSS.
Follow the design tokens, content, and structure specifications exactly.
Start by setting up the project scaffolding, then build components one by one.
```

Claude Code will:
1. Read all the docs
2. Initialize the Vite project (or extend the existing package.json)
3. Build out components based on the spec
4. Run the dev server so you can preview

---

## Troubleshooting

### "Permission denied" on push

You need to authenticate with GitHub. Use one of:

**Option 1: Personal Access Token (recommended)**
1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token with `repo` scope
3. When pushing, use the token as your password

**Option 2: SSH Key**
1. Use SSH URL instead: `git@github.com:JirawatSuwannasit/Reliability-lab-promote.git`
2. Make sure your SSH key is added to GitHub

### "Repository not found"

Check that:
- The repo exists at the URL above
- The repo is public, OR you're authenticated as the owner

### Files too large

The PDF is small (~14KB), so this shouldn't be an issue. But if you add machine photos later and they're huge (>50MB), consider Git LFS:

```bash
git lfs install
git lfs track "*.jpg"
git lfs track "*.png"
```

---

## What's Next?

After successful push:
1. ✅ Files are in GitHub
2. ⏭️ Clone the repo locally
3. ⏭️ Open in Claude Code
4. ⏭️ Let Claude Code build the site
5. ⏭️ Add real machine photos to `assets/machine-photos/`
6. ⏭️ Deploy to Vercel / Netlify

Good luck! 🚀

# Reliability Lab Promotional Website

**Client:** Panasonic Automotive — Automotive Quality Assurances Center (Reliability Lab)
**Type:** Promotional landing page showcasing 5 reliability testing services
**Status:** 🟡 In development

---

## 🎯 Project Goal

Build a modern, responsive landing page that promotes our reliability testing services to B2B clients (electrical & electronic component manufacturers). The design should match our existing print poster — same aesthetic, same content structure, same brand identity.

**Tagline:** *"Where Reliability is Proven, Not Assumed"*

---

## 🚀 Quick Start for Claude Code

If you are Claude Code working on this project, please:

1. **Read these files in order:**
   - `docs/design-brief.pdf` — Full design specification (visual reference)
   - `docs/design-tokens.json` — Colors, typography, spacing
   - `docs/content.md` — All page content (services, specs, copy)
   - `docs/site-structure.md` — Page structure and components needed

2. **Recommended tech stack:**
   - **Framework:** Next.js 14+ (App Router) or Vite + React
   - **Styling:** Tailwind CSS (config provided in `tailwind.config.js`)
   - **Icons:** Lucide React (thin line style matches our design language)
   - **Fonts:** Inter (body) + JetBrains Mono (spec numerals) via Google Fonts
   - **Animation:** Framer Motion (optional, for subtle transitions)
   - **Deployment target:** Vercel or Netlify

3. **Build approach:**
   - Mobile-first responsive design (breakpoints: 640px, 768px, 1024px, 1280px)
   - Match the dark "Industrial + Clean Professional" aesthetic from the poster
   - 5 service cards = hero section on desktop, stacked vertically on mobile
   - Use real machine photos from `assets/machine-photos/` (placeholders OK if not provided)
   - Include CTA: "Request a Quote" / "Contact Us"

4. **Do NOT:**
   - Use generic stock photos
   - Add gradient backgrounds (keep flat dark)
   - Use more than 2 accent colors (Panasonic Blue + Industrial Amber)
   - Use cute/cartoon icons (thin technical line icons only)

---

## 📁 Project Structure

```
reliability-lab-website/
├── docs/                          ← Design specs & content (READ FIRST)
│   ├── design-brief.pdf
│   ├── design-tokens.json
│   ├── content.md
│   └── site-structure.md
├── assets/
│   └── machine-photos/            ← 5 machine photos go here (4:3 ratio)
├── public/                        ← Static assets for the site
├── src/                           ← Source code
├── tailwind.config.js             ← Pre-configured with design tokens
├── package.json
└── README.md                      ← You are here
```

---

## 🎨 Design Language (Quick Reference)

| Element | Value |
|---------|-------|
| Background | Dark Navy `#0A1628` |
| Card surface | Charcoal `#1A2332` |
| Primary accent | Panasonic Blue `#00AEEF` |
| Secondary accent | Industrial Amber `#FFA726` (mechanical card only) |
| Text primary | White `#FFFFFF` |
| Text secondary | Cool Gray `#8B95A7` |
| Hero font | Inter Bold (or Barlow Condensed) |
| Spec numerals | JetBrains Mono (engineering feel) |
| Body | Inter Regular |

---

## 📝 Suggested Page Sections

1. **Header/Nav** — Logo + nav links + language switcher (EN/TH)
2. **Hero** — Tagline + intro + CTA button
3. **Services Grid** — 5 service cards (matches poster layout on desktop)
4. **Each Service Detail** — Click card → expanded view with full specs, photo, use cases
5. **About the Lab** — Brief intro to Automotive Quality Assurances Center
6. **Why Choose Us** — Trust signals, certifications, experience
7. **Contact / Request Quote** — Form + contact info
8. **Footer** — Panasonic Automotive branding, links, copyright

---

## 🛠️ Development Commands

After Claude Code generates the project:

```bash
npm install         # Install dependencies
npm run dev         # Start dev server
npm run build       # Build for production
npm run preview     # Preview production build
```

---

## 📧 Contact

Project owner: Jirawat Suwannasit
Repo: https://github.com/JirawatSuwannasit/Reliability-lab-promote

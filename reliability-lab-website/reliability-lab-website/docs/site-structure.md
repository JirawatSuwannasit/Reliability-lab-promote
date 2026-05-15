# Site Structure & Component Specification

Detailed structure of the website. Use this alongside `design-tokens.json` and `content.md` to build the UI.

---

## Page Sections (Single Landing Page)

```
┌─────────────────────────────────────────┐
│           1. NAVIGATION BAR             │  Sticky, dark background
├─────────────────────────────────────────┤
│                                         │
│              2. HERO                    │  Tagline + intro + CTA
│                                         │
├─────────────────────────────────────────┤
│         3. SERVICES OVERVIEW            │  5 cards (grid)
│         [ Cards in a row ]              │
├─────────────────────────────────────────┤
│        4. SERVICE DETAIL CARDS          │  Each service expanded
│        (alternating left/right)         │
├─────────────────────────────────────────┤
│           5. ABOUT THE LAB              │  Trust building
├─────────────────────────────────────────┤
│           6. WHY CHOOSE US              │  4 value props
├─────────────────────────────────────────┤
│           7. CTA SECTION                │  Request quote
├─────────────────────────────────────────┤
│            8. FOOTER                    │  Links, copyright
└─────────────────────────────────────────┘
```

---

## 1. Navigation Bar

**Layout:** Horizontal sticky header, transparent on top of hero, becomes solid dark navy on scroll.

**Contents:**
- Left: Panasonic Automotive logo (white version on dark bg)
- Center: Nav links — `Services`, `About`, `Contact`
- Right: Language toggle (`EN / ไทย`) + CTA button "Get Quote"

**Behavior:**
- Mobile: Hamburger menu, full-screen overlay when open
- Scroll: Background becomes solid `#0A1628` with subtle bottom border `#00AEEF` 8% opacity

---

## 2. Hero Section

**Layout:** Full viewport height (or 80vh on mobile), centered content.

**Background:**
- Dark Navy `#0A1628`
- Technical grid overlay (8% opacity Panasonic Blue, 40px grid)
- Optional: subtle animated particles or scan lines (very minimal)

**Contents:**
- Eyebrow text (small, uppercase, Panasonic Blue): `RELIABILITY TESTING SERVICES`
- Main headline (huge, white): `Where Reliability is Proven, Not Assumed`
- Subheadline (cool gray, max 60ch): Description from content.md
- Two CTAs:
  - Primary (filled Panasonic Blue): `Request a Test Quote`
  - Secondary (outline white): `View Capabilities`

**Decorative:**
- L-shaped corner brackets in Panasonic Blue at 4 corners of viewport
- Animated scroll indicator at bottom

---

## 3. Services Overview

**Layout:**
- Desktop (≥1024px): 5 cards in a single row (matches poster!)
- Tablet (768–1023px): 2-column grid + 1 full-width card OR 3+2 layout
- Mobile (<768px): Stack vertically, full-width cards

**Card Anatomy:**
```
┌─────────────────────────┐
│ ╔═══════════════════╗   │
│ ║   MACHINE PHOTO   ║   │  ← Image (4:3 ratio)
│ ║                   ║   │
│ ╚═══════════════════╝   │
│                         │
│  [icon]  CARD TITLE     │  ← Icon + title
│  ─────                  │  ← Accent underline
│                         │
│  +200°C                 │  ← Large mono spec number
│  to -20°C               │
│                         │
│  ENVIRONMENT            │  ← Category label (uppercase)
└─────────────────────────┘
```

**Styles:**
- Background: Charcoal `#1A2332`
- Border: 1px subtle `rgba(255,255,255,0.06)`
- Border-radius: 8px
- Image: dark overlay 25%, accent-color 1px inner border
- Hover: lift effect + glow shadow `0 8px 30px rgba(0,174,239,0.15)`
- Card 5 (Vibration): all accents in Industrial Amber instead of Blue

**Section Heading:** "Our Testing Capabilities" (h2, centered)

---

## 4. Service Detail Cards

**Layout:** Each service gets its own row, alternating left/right (image on opposite side each time).

```
Row 1:  [PHOTO] [TEXT]
Row 2:  [TEXT] [PHOTO]
Row 3:  [PHOTO] [TEXT]
... etc
```

**Each row contains:**
- Large machine photo (left or right)
- Service title
- Category badge
- Full specs in mono font (large)
- Description paragraph
- Bullet list: use cases
- "Request this test →" link

**Mobile:** Photo on top, content below.

---

## 5. About the Lab

**Layout:** Two columns on desktop, stacked on mobile.

**Left column:**
- Heading: "Inside the Automotive Quality Assurances Center"
- Body paragraph
- Bullet list of standards/certifications

**Right column:**
- Lab facility photo (or composite image)
- Small caption

---

## 6. Why Choose Us

**Layout:** 4-column grid (desktop), 2x2 (tablet), stacked (mobile).

**Each card:**
- Large icon (Panasonic Blue)
- Title
- Short description

**Background:** Slightly lighter than main bg, `#1A2332`

---

## 7. CTA Section

**Layout:** Full-width band, centered content, contrast background.

**Background:** Panasonic Blue `#00AEEF` (the only blue-dominant section)

**Contents:**
- Heading (white, large): "Ready to test your components?"
- Body (white 90% opacity)
- Button (dark navy filled, white text): "Request a Quote →"

---

## 8. Footer

**Layout:** Multi-column footer on desktop, stacked on mobile.

**Columns:**
1. Logo + tagline
2. Services links
3. Company links
4. Contact info

**Bottom strip:**
- Copyright text
- Social icons (if any)
- Language switcher

---

## Global Components Needed

- [ ] `<Button>` — primary, secondary, ghost variants
- [ ] `<ServiceCard>` — for grid and standalone use
- [ ] `<SpecNumber>` — large mono-style numeric display
- [ ] `<CategoryBadge>` — outlined pill with accent color
- [ ] `<CornerBracket>` — L-shape decorative SVG
- [ ] `<GridOverlay>` — background pattern
- [ ] `<LanguageToggle>` — EN/TH switcher
- [ ] `<ContactForm>` — for quote requests

---

## Accessibility Requirements

- Color contrast: WCAG AA minimum (white on dark navy = AAA ✓)
- All interactive elements: focus visible state in Panasonic Blue
- Alt text on all machine photos
- Semantic HTML (use `<section>`, `<article>`, `<nav>`)
- Keyboard navigation throughout
- Lang attribute: `lang="en"` with proper switching

---

## Performance Targets

- Lighthouse score: 90+ in all categories
- Largest Contentful Paint: <2.5s
- Images: WebP format, lazy load below fold
- Fonts: preload Inter and JetBrains Mono
- No layout shift (use `aspect-ratio` for images)

---

## SEO Meta

```html
<title>Reliability Testing Services | Panasonic Automotive Quality Assurances Center</title>
<meta name="description" content="Automotive-grade reliability testing for electrical and electronic components. Temperature, humidity, thermal shock, vibration, and mechanical stress testing.">
<meta property="og:title" content="Panasonic Automotive Reliability Lab">
<meta property="og:type" content="website">
```

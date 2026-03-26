# LEVERY_SPEC.md
# Levery Website — Complete Project Specification
# Version: 1.0 — March 2026
# Use this file to restore Claude context in new sessions.
# Paste the content of this file at the start of a new conversation.

---

## 1. COMPANY

**Levery S.r.l. Società Benefit**
- Founded: 2024, Bellaria-Igea Marina (RN), Italy
- P.IVA: 04730050400
- Role: External R&D partner for the construction sector
- Positioning: "Specialist R&D, built around your team."
- Email: info@levery.it · Phone: (+39) 339 646 9607

**Team:**
- Alessandro Pracucci — Co-founder & Director. PhD, Adjunct Professor UniBo, 50+ publications h-index 10, 15+ EU projects, €65M+ funding secured. LinkedIn: https://it.linkedin.com/in/alessandropracucci
- Matteo Giovanardi — Co-founder. PhD Politecnico di Torino, sustainability/LCA/circular economy. LinkedIn: https://it.linkedin.com/in/matteo-giovanardi-b36ba1117
- Francesca Pollet — Researcher. PhD Student Università di Ferrara, bio-based materials/DPP. LinkedIn: https://it.linkedin.com/in/francesca-pollet-42a345355

**Products:**
- ARyze (aryze.it) — XR platform for building O&M. JV Levery + Exvirience. EU co-funded.
- DeePPy (deeppy.eu) — Digital Product Passport platform for ESPR compliance.

---

## 2. TECH STACK

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js 14 App Router | TypeScript off (plain JSX) |
| CMS | Outstatic | Git-based, login via GitHub OAuth |
| Deploy | Cloudflare Pages (free, commercial ok) | URL: levery-website.pages.dev → levery.it |
| Repo | github.com/levery-srl/levery-website | |
| Analytics | PostHog + GA4 | Gated by cookie consent |
| Contact form | Formspree | |
| Booking | Microsoft Teams Bookings | env: NEXT_PUBLIC_BOOKING_URL |

**Key files:**
- `lib/tokens.js` — ALL design tokens (colours, type, spacing). Change here → changes everywhere.
- `lib/content.js` — reads MDX files for projects and insights
- `components/LeveryNav.jsx` — shared nav (client component)
- `components/LeveryFooter.jsx` — shared footer (server component)
- `outstatic.config.js` — CMS schema for projects and insights collections

---

## 3. DESIGN SYSTEM

### Colours (from lib/tokens.js)
```js
C.brand      = '#2D4059'   // navy blue — primary background
C.brandDark  = '#1C2D40'   // darker navy — hero gradients
C.green      = '#1E6B45'   // CTA buttons, active states
C.greenMid   = '#2A8A58'   // hover state for green
C.greenLight = '#E8F5EE'   // active badge background
C.white      = '#FFFFFF'   // page background (ALL pages)
C.sand       = '#F5F2EC'   // tags/badges ONLY — not page backgrounds
C.ink        = '#1A1A1A'   // primary text
C.inkMid     = '#4A4A4A'   // secondary text
C.inkLight   = '#8A8A8A'   // tertiary text, labels
C.rule       = '#E0DBD3'   // dividers, card borders
```

### Domain palette
```js
DOMAIN.digital = { bg:'#1C2D40', accent:'#7EC8E3', label:'R&D'  }
DOMAIN.green   = { bg:'#1A3D2B', accent:'#A8E6CF', label:'ECO'  }
DOMAIN.funding = { bg:'#2A2010', accent:'#FFD97D', label:'EU'   }
DOMAIN.xr      = { bg:'#2A1E3D', accent:'#C3A8E6', label:'XR'   }
```

### Typography
- Headings: Georgia serif
- Body: Helvetica Neue / Arial sans-serif
- Labels/monospace: system monospace
- Hero H1: 52px (34px mobile)
- Page titles: 44px
- Section headers: 22px Georgia + 22px monospace number side by side
- Body: 15px, line-height 1.8
- Border radius: 2px everywhere

### Key layout decisions
- Page background: **always C.white** — no C.sand as page bg
- Max content width: 1200px with 32px horizontal padding
- Section vertical padding: 72px top / 88px bottom (standard)
- Nav height: 64px fixed, transparent → rgba(45,64,89,0.97) on scroll
- Card gap in grids: 2px with C.rule background (creates thin rule separator)
- Card border radius: 2px

---

## 4. PAGES — STATUS

| Page | File | Status | Notes |
|---|---|---|---|
| `/` | app/page.jsx | ✅ JSX preview done | levery-homepage.jsx in outputs |
| `/work` | app/work/page.jsx | ✅ JSX preview done | levery-work.jsx in outputs |
| `/work/[slug]` | app/work/[slug]/page.jsx | ✅ Next.js done | reads MDX automatically |
| `/products` | app/products/page.jsx | ✅ JSX preview done | levery-products.jsx in outputs |
| `/team` | app/team/page.jsx | ✅ JSX preview done | levery-team.jsx in outputs |
| `/insights` | app/insights/page.jsx | 🔲 Not built yet | |
| `/insights/[slug]` | app/insights/[slug]/page.jsx | 🔲 Not built yet | |
| `/impact` | app/impact/page.jsx | 🔲 Not built yet | |
| `/contact` | app/contact/page.jsx | 🔲 Not built yet | |

**MDX content files (10 projects in content/projects/):**
bio-corner, w2w, mc20, prometheus, winloop, bios-mater, agro-builder, digi4bio, pv-igu, belm

---

## 5. NAVIGATION STRUCTURE

```
Work        → /work
Products    → /products  (ARyze card → aryze.it, DeePPy card → deeppy.eu)
Insights    → /insights
Impact      → /impact
Team        → /team
Contact     → /contact
```
Nav CTA button: "Book a call" → NEXT_PUBLIC_BOOKING_URL (Microsoft Teams Bookings)
Lang switch: EN/IT toggle (state-based, no routing)

---

## 6. COPY DECISIONS (locked)

- Tagline: "Specialist R&D, built around your team." (EN) / "R&D specializzato, costruito intorno al tuo team." (IT)
- Hero H1: "Your external R&D team / for the construction industry."
- Hero sub EN: "We work alongside manufacturers, material producers, and contractors — bringing specialist R&D capabilities in new product development, sustainability compliance, and EU funding access."
- Products page title: "Digital tools for the construction industry."
- Team page sub: "A focused team of senior specialists — PhD-level expertise across R&D, sustainability and EU funding."
- Società Benefit: footer badge only → links to /impact. NOT featured prominently.

---

## 7. COMPONENTS BUILT

### Shared (components/)
- `LeveryLogo` — SVG inline, white/dark variants, height prop
- `LeveryNav` — fixed, transparent→brand on scroll, active link underline, lang switch, CTA
- `LeveryFooter` — 3-column (brand+tagline+SB badge / legal / contact), GEO paragraph hidden

### Page-specific patterns (copy into each page)
- `GradientMesh` — CSS blob animation for hero background (homepage)
- `CardHeader` — coloured header with stripe pattern + corner accent + ghost label
- `PhotoPlaceholder` → replaced by `<img>` with onError fallback in /team
- Section header pattern: `{secNum} {secTitle}` side by side on baseline

### Team card
- Default view: photo (300px tall) + name + credentials + tags + LinkedIn/ORCiD links
- Hover: coloured panel slides up from bottom with full bio (translateY transition 0.3s)
- Photos: raw.githubusercontent.com/levery-srl/levery-website/main/public/team/{name}.jpg

### Product card (/products)
- Filter tags in header: active filter dims non-selected card to opacity:0.35
- 50/50 grid on C.white background with 2px gap (same as service cards in homepage)
- ARyze: bg #1C2230, accent #C3A8E6 | DeePPy: bg #152C1E, accent #A8E6CF

---

## 8. CONTENT SCHEMA (Outstatic CMS)

### Projects collection
Fields: name, subtitle, domain (select), status (select), fund, fundUrl, period, tags, partners, heroImage
Body: MDX markdown with h2 sections: "About the project", "Funding & context", "Levery's role"

### Insights collection  
Fields: title, series (select), domain (select), num (e.g. "03/26"), excerpt, author, date, heroImage, tags
Body: full article MDX

---

## 9. PROJECTS DATA (10 projects)

| Slug | Name | Domain | Status |
|---|---|---|---|
| bio-corner | BIO.CO.R.N.ER | green | Active |
| agro-builder | Agro.build.ER | green | Active |
| winloop | WINLOOP | green | Active |
| bios-mater | BIOS MATER | green | Active |
| w2w | W2W | green | Active |
| digi4bio | Digi4BioMat | digital | Active |
| prometheus | PROMETHEUS | xr | Completed |
| mc20 | MC2.0 | digital | Active |
| pv-igu | PV-IGU | digital | Completed |
| belm | BELM | digital | Active |

---

## 10. INSIGHTS DATA (3 articles — homepage preview)

| Num | Series | Domain | Title |
|---|---|---|---|
| 03/26 | Make It Digital | digital | AI-based solutions for the construction sector |
| 02/26 | Make It Digital | digital | Robotic & Automation for Construction |
| 01/26 | Make It Green | green | Bio-based building materials & products |

Full articles scraped from levery.it/blog — MDX files to be created.

---

## 11. ENVIRONMENT VARIABLES

```
OST_GITHUB_ID=            # GitHub OAuth App ID
OST_GITHUB_SECRET=        # GitHub OAuth App Secret
OST_TOKEN_SECRET=         # Random 32-char string
OST_REPO_SLUG=levery-website
OST_GITHUB_URL=https://github.com/levery-srl
NEXT_PUBLIC_POSTHOG_KEY=  # PostHog project key
NEXT_PUBLIC_FORMSPREE_ID= # Formspree form ID
NEXT_PUBLIC_BOOKING_URL=  # Microsoft Teams Bookings URL
```

---

## 12. HOW TO USE THIS SPEC IN A NEW CLAUDE SESSION

Paste this entire file at the start of the conversation, then say what you need:

Examples:
- "Build the /insights page following this spec"
- "Change the hero H1 font size to 48px everywhere"
- "Add a /contact page with Formspree form"
- "The /team hover bio is not working on mobile — fix it with a tap toggle"
- "Update the Società Benefit badge copy"

Claude will have full context without re-reading the entire conversation history.

---

## 13. SESSIONS LOG

| Date | What was done |
|---|---|
| Mar 2026 | Full design system defined, homepage JSX built (levery-homepage.jsx) |
| Mar 2026 | /products, /team, /work pages built as JSX previews |
| Mar 2026 | 10 project MDX files created |
| Mar 2026 | Next.js project scaffolded with Outstatic CMS |
| Mar 2026 | lib/tokens.js and LEVERY_SPEC.md created |
| — | /insights, /insights/[slug], /impact, /contact — TO DO |
| — | Convert all JSX previews to Next.js pages — TO DO |
| — | Upload to GitHub + Vercel deploy — TO DO |

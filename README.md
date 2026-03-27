# LEVERY_SPEC — Complete Project Reference
# Version: 2.0 — March 2026

---

## 1. COMPANY

**Levery S.r.l. Società Benefit**
- Founded: 2024, Bellaria-Igea Marina (RN), Italy
- P.IVA / VAT: IT04730050400
- Address: Via Pisino 66, 47814 Bellaria Igea Marina (RN)
- Email: info@levery.it · Phone: (+39) 339 646 9607
- Booking: https://outlook.office.com/book/InfoLevert@levery.it/

**Team:**
- Alessandro Pracucci — Co-founder & Director. PhD, Adjunct Professor UniBo, 50+ publications h-index 10, 15+ EU projects. LinkedIn: https://it.linkedin.com/in/alessandropracucci
- Matteo Giovanardi — Co-founder. PhD Politecnico di Torino, LCA/circular economy. LinkedIn: https://it.linkedin.com/in/matteo-giovanardi-b36ba1117
- Francesca Pollet — Researcher. PhD Student Università di Ferrara, bio-based/DPP. LinkedIn: https://it.linkedin.com/in/francesca-pollet-42a345355

**Products:**
- ARyze (aryze.it) — XR platform for building O&M. JV Levery + Exvirience. EU co-funded.
- DeePPy (deeppy.eu) — Digital Product Passport platform for ESPR compliance.

---

## 2. TECH STACK

| Layer | Tool | Notes |
|---|---|---|
| Framework | Next.js 14.2.5 App Router | Plain JSX, no TypeScript |
| Deploy | Cloudflare Pages free | levery-website.pages.dev → levery.it |
| Repo | github.com/levery-srl/levery-website | Public |
| Analytics | GA4 G-LL1GSHR21G + PostHog | In app/layout.jsx |
| Contact form | Formspree | Replace FORMSPREE_ID in contact/page.jsx |
| Booking | Microsoft Teams Bookings | https://outlook.office.com/book/InfoLevert@levery.it/ |

**Cloudflare Pages build settings:**
- Framework preset: Next.js (Static HTML Export)
- Build command: npm run build
- Output directory: out

**next.config.js:**
```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
}
module.exports = nextConfig
```

**package.json dependencies:**
```json
{
  "next": "14.2.5",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "gray-matter": "^4.0.3",
  "next-mdx-remote": "^4.4.1"
}
```

---

## 3. DESIGN SYSTEM

### Colours
```js
C.brand      = '#2D4059'   // navy — nav background
C.brandMid   = '#3A5274'   // hover state
C.brandDark  = '#1C2D40'   // hero gradients
C.green      = '#1E6B45'   // CTA buttons, active states
C.greenMid   = '#2A8A58'   // green hover
C.greenLight = '#E8F5EE'   // active badge bg
C.white      = '#FFFFFF'   // ALL page backgrounds
C.sand       = '#F5F2EC'   // hero bg, tags — NOT page bg
C.sandDark   = '#EDE9E1'   // stats section bg
C.ink        = '#1A1A1A'   // primary text
C.inkMid     = '#4A4A4A'   // secondary text
C.inkLight   = '#8A8A8A'   // labels, tertiary
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
- Labels: monospace
- Hero H1: clamp(38px, 3.8vw, 64px)
- Border radius: 2px everywhere

### Key rules
- Page background: ALWAYS C.white
- C.sand: hero bg and tags ONLY
- Nav: always rgba(45,64,89,0.97) fixed — never transparent
- Max content width: 1200px, 32px horizontal padding
- All Book a call links → https://outlook.office.com/book/InfoLevert@levery.it/
- P.IVA in EN pages → VAT

### Logo
- Nav: `<img src="/logo-white.svg" alt="Levery" height="30"/>`
- Footer: `<img src="/logo-white.svg" alt="Levery" height="36"/>`
- Favicon: /public/favicon.png

---

## 4. FILE STRUCTURE

```
app/
  page.jsx                    ✅ Homepage — hero C.sand bg, clamp H1, stripe pattern right
  layout.jsx                  ✅ GA4 + favicon
  globals.css
  work/
    page.jsx                  ✅ Project grid with domain filters
    [slug]/
      page.jsx                ✅ Server component — generateStaticParams, imports ProjectClient
      ProjectClient.jsx       ✅ Client component — all 10 projects inline
  products/page.jsx           ✅ ARyze + DeePPy 50/50 cards
  team/page.jsx               ✅ 3 people, hover bio panel
  insights/page.jsx           ✅ 6 articles grid with Make It Digital / Make It Green filters
  impact/page.jsx             ✅ Società Benefit metrics, SDGs, PDF report download
  contact/page.jsx            ✅ Formspree form + Book a call + direct contacts
  privacy/page.jsx            ✅ Privacy & Cookie Policy combined, bilingual IT/EN
public/
  logo-white.svg              ✅ Horizontal logo (monogram L + wordmark LEVERY)
  favicon.png                 ✅ L monogram icon
content/
  projects/                   ✅ 10 MDX files (one per project)
```

---

## 5. COPY (locked)

- Tagline EN: "Specialist R&D, built around your team."
- Hero H1: "Your external R&D team / for the construction industry."
- Hero sub: "We work alongside manufacturers, material producers, and contractors — bringing specialist R&D capabilities in new product development, sustainability compliance, and EU funding access."
- Team sub: "A focused team of senior specialists — PhD-level expertise across R&D, sustainability and EU funding."
- Società Benefit: footer badge only → links to /impact

### Stats homepage
```
€15M+   EU projects contributed to
€700K+  Direct R&D budget managed
50+     Peer-reviewed publications
100+    Partners we work with
```

### Service capabilities
**New Product Development:**
Concept development & prototyping / Material selection & testing /
Market validation & competitive benchmarking / Certification pathway support / Business model definition

**Sustainability & Compliance:**
Digital Product Passport (DPP) / LCA / ESPR & CE marking compliance /
Decarbonisation roadmap / ESG Scope 1–3 reporting

**EU Funding:**
Horizon Europe proposal writing / Open call scouting / Consortium building /
EU project management & reporting / Technical documentation for regulators

---

## 6. NAVIGATION

```
Work        → /work
Products    → /products
Insights    → /insights
Impact      → /impact
Team        → /team
Contact     → /contact
```
Nav CTA: "Book a call" → https://outlook.office.com/book/InfoLevert@levery.it/
Footer: Privacy & Cookie Policy → /privacy
Footer: Società Benefit badge → /impact

---

## 7. PROJECTS (10 — all inline in ProjectClient.jsx)

| Slug | Name | Domain | Status |
|---|---|---|---|
| bio-corner | BIO.CO.R.N.ER | green | Active |
| w2w | W2W | green | Active |
| mc20 | MC2.0 | digital | Active |
| prometheus | PROMETHEUS | xr | Completed |
| winloop | WINLOOP | green | Active |
| bios-mater | BIOS MATER | green | Active |
| agro-builder | Agro.build.ER | green | Active |
| digi4bio | Digi4BioMat | digital | Active |
| pv-igu | PV-IGU | digital | Completed |
| belm | BELM | digital | Active |

---

## 8. INSIGHTS (6 articles — all inline in insights/page.jsx)

| Num | Series | Domain | Author | Date | Slug |
|---|---|---|---|---|---|
| 03/26 | Make It Digital | digital | MG | Feb 25, 2026 | ai-solutions-construction-products |
| 02/26 | Make It Digital | digital | AP | Feb 3, 2026 | robotics-automation-construction-products |
| 01/26 | Make It Green | green | AP | Jan 7, 2026 | bio-based-building-materials-products |
| 12/25 | Make It Digital | digital | MG | Nov 26, 2025 | ai-copilot-construction-stakeholders |
| 11/25 | Make It Digital | digital | AP | Oct 29, 2025 | robotics-automation-construction-stakeholders |
| 08/25 | Make It Green | green | AP | Oct 1, 2025 | bio-based-building-materials-stakeholders |

Full article content on: https://www.levery.it/blog
Individual article URLs: https://www.levery.it/ai_02, /rob_02, /rob_01, etc.
Note: /insights/[slug] pages NOT YET BUILT — clicking article links gives 404.

---

## 9. IMPACT PAGE DATA (from levery.it/insight — Feb–Dec 2024)

**Dissemination & Training:**
12 LinkedIn posts / 3,923 interactions / 250 stakeholders in trainings /
2 scientific publications / 2 focus groups / 2 seminars & events

**R&D:**
4 sustainable projects / 1 new partnership with foundations / 10+ active EU projects

**Economic:**
€700K+ direct R&D budget / €15M+ total EU funding contributed / 50+ publications

**Report:** https://irp.cdn-website.com/f62b8008/files/uploaded/LEVERY_BenefitReport_2024.pdf

---

## 10. TECHNICAL RULES (avoid build errors)

1. Every page using useState/useEffect MUST start with `'use client'`
2. generateStaticParams() CANNOT be in a 'use client' file → use server/client split
3. No server-side imports (fs, path, gray-matter) in client components
4. No useRouter() — use plain `<a href>` tags
5. Dynamic routes ([slug]) need generateStaticParams() for output:export
6. output:'export' incompatible with: API routes, middleware, server components with data fetching
7. All data for [slug] pages must be inline (no file reading at runtime)
8. Booking URL: https://outlook.office.com/book/InfoLevert@levery.it/ (not the old bookwithme URL)

---

## 11. PENDING — TO DO

- [ ] /insights/[slug] — single article pages (6 articles, content at levery.it/blog)
- [ ] Team photos — upload to public/team/alessandro.jpg, matteo.jpg, francesca.jpg
- [ ] Formspree — replace FORMSPREE_ID in contact/page.jsx with real form ID
- [ ] Domain redirect — point levery.it to Cloudflare Pages when approved
- [ ] Impact report 2025 — update when available
- [ ] Insights new articles — add to insights/page.jsx ARTICLES array

---

## 12. SESSION LOG

| Date | What was done |
|---|---|
| Mar 2026 | Full design system, homepage JSX, all page JSX previews |
| Mar 2026 | Next.js project, Cloudflare Pages deploy (free, commercial ok) |
| Mar 2026 | Fixed: use client, generateStaticParams, server/client split for [slug] |
| Mar 2026 | All 10 projects inline in ProjectClient.jsx |
| Mar 2026 | Nav fixed: brand dark always, logo SVG, real hrefs |
| Mar 2026 | Booking URL updated to outlook.office.com/book/InfoLevert@levery.it/ |
| Mar 2026 | GA4 G-LL1GSHR21G in layout.jsx |
| Mar 2026 | Insights page with 6 real articles from levery.it/blog |
| Mar 2026 | Impact page with 2024 metrics + PDF report download |
| Mar 2026 | Contact page with Formspree form |
| Mar 2026 | Privacy & Cookie Policy combined page (GDPR IT/EN) |
| Mar 2026 | Fresh clean repo — levery-website-CLEAN.zip |

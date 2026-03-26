# Levery Website
**levery.it** — Next.js 14 + Outstatic CMS + Cloudflare Pages

## Deploy: Cloudflare Pages (free, commercial use ok)

### Passo 1 — Carica su GitHub
1. Vai su github.com/levery-srl → New repository → `levery-website` → Public → Create
2. Estrai il ZIP sul computer
3. Nella pagina GitHub vuota clicca "uploading an existing file"
4. Trascina tutto il contenuto della cartella estratta
5. Commit message: `Initial commit` → Commit changes

### Passo 2 — Crea account Cloudflare
1. Vai su **cloudflare.com** → Sign up (gratis, nessuna carta)
2. Puoi registrarti con email o con Google

### Passo 3 — Connetti a Cloudflare Pages
1. Nel dashboard Cloudflare → clicca **"Workers & Pages"** nel menu sinistro
2. Clicca **"Create"** → tab **"Pages"** → **"Connect to Git"**
3. Connetti il tuo account GitHub → seleziona `levery-srl/levery-website`
4. **Build settings:**
   - Framework preset: `Next.js (Static HTML Export)`
   - Build command: `npm run build`
   - Build output directory: `out`
5. Clicca **"Save and Deploy"**

Dopo 3-4 minuti ricevi URL tipo: `levery-website.pages.dev`

### Passo 4 — Variabili d'ambiente (in Cloudflare Pages)
Settings → Environment variables → aggiungi:
```
OST_GITHUB_ID        = (da creare — vedi sotto)
OST_GITHUB_SECRET    = (da creare — vedi sotto)
OST_TOKEN_SECRET     = (qualsiasi stringa 32 caratteri)
OST_REPO_SLUG        = levery-website
OST_GITHUB_URL       = https://github.com/levery-srl
```

### Passo 5 — GitHub OAuth App (per il CMS)
1. github.com → Settings → Developer settings → OAuth Apps → New OAuth App
2. Application name: `Levery CMS`
3. Homepage URL: `https://levery-website.pages.dev`
4. Callback URL: `https://levery-website.pages.dev/api/outstatic/callback`
5. Copia Client ID → `OST_GITHUB_ID`
6. Generate secret → `OST_GITHUB_SECRET`

### Passo 6 — Dominio levery.it (quando pronto)
In Cloudflare Pages → Custom domains → Add domain → `levery.it`
Cloudflare gestisce il DNS automaticamente.

## Struttura file
```
app/page.jsx              → Homepage
app/work/page.jsx         → Griglia progetti
app/work/[slug]/page.jsx  → Pagina singolo progetto (legge MDX)
app/products/page.jsx     → ARyze + DeePPy
app/team/page.jsx         → Team
content/projects/         → 10 file MDX (un file = una pagina progetto)
lib/tokens.js             → Design system — modifica qui i colori
lib/content.js            → Legge i file MDX
```

## Modificare il design
Tutto il design è in `lib/tokens.js`:
- Cambia `C.green` per il colore dei bottoni
- Cambia `C.brand` per il colore della nav
- Cambia `TYPE` per la tipografia

## Aggiungere un progetto (senza codice)
1. Crea `content/projects/nome-progetto.mdx`
2. Copia il frontmatter da un file esistente
3. Commit su GitHub → Cloudflare rebuilda automaticamente → online in 3 minuti

## Pagine da completare
- [ ] app/insights/page.jsx
- [ ] app/insights/[slug]/page.jsx
- [ ] app/impact/page.jsx
- [ ] app/contact/page.jsx

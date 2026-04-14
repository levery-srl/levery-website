import './globals.css'
import CookieBanner from './CookieBanner'

export const metadata = {
  title: {
    default: 'Levery — Specialist R&D for Construction',
    template: '%s | Levery'
  },
  description: 'Levery is a specialist R&D partner for the construction sector. New product development, sustainability compliance, Digital Product Passport and EU funding for manufacturers and innovators.',
  keywords: ['R&D construction', 'partner R&D costruzioni', 'digital product passport', 'passaporto digitale prodotto', 'ESPR compliance', 'bio-based materials', 'materiali bio-based edilizia', 'BIPV', 'Horizon Europe', 'circular economy construction', 'economia circolare costruzioni', 'building innovation Italy', 'innovazione edilizia', 'Levery'],
  authors: [{ name: 'Levery S.r.l. Società Benefit', url: 'https://levery.it' }],
  creator: 'Levery S.r.l. Società Benefit',
  metadataBase: new URL('https://levery.it'),
  alternates: {
    canonical: 'https://levery.it',
    languages: {
      'en': 'https://levery.it',
      'it': 'https://levery.it',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: 'it_IT',
    url: 'https://levery.it',
    siteName: 'Levery',
    title: { default: 'Levery — Specialist R&D for Construction', template: '%s | Levery' },
    description: 'Specialist R&D, built around your team. New product development, sustainability compliance and EU funding for the construction sector.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Levery — Specialist R&D for Construction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: { default: 'Levery — Specialist R&D for Construction', template: '%s | Levery' },
    description: 'Specialist R&D, built around your team.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  verification: {
    google: '',  // add Google Search Console verification code when available
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LL1GSHR21G"/>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent','default',{'analytics_storage':'denied'});
          gtag('js',new Date());
          var _consent=typeof localStorage!=='undefined'?localStorage.getItem('levery_cookie_consent'):null;
          if(_consent==='accepted'){gtag('consent','update',{'analytics_storage':'granted'});}
          gtag('config','G-LL1GSHR21G',{'anonymize_ip':true});
        `}}/>
        {/* Structured data — Organization */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Levery S.r.l. Società Benefit",
          "alternateName": "Levery",
          "url": "https://levery.it",
          "logo": "https://levery.it/logo-white.svg",
          "description": "Specialist R&D partner for the construction sector. New product development, sustainability compliance, Digital Product Passport and EU funding.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Via Pisino 66",
            "addressLocality": "Bellaria Igea Marina",
            "addressRegion": "RN",
            "postalCode": "47814",
            "addressCountry": "IT"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "info@levery.it",
            "telephone": "+39-339-646-9607",
            "contactType": "customer service",
            "availableLanguage": ["Italian", "English"]
          },
          "sameAs": [
            "https://www.linkedin.com/company/levery-srl",
            "https://deeppy.eu",
            "https://aryze.it"
          ],
          "knowsAbout": [
            "Construction R&D",
            "Digital Product Passport",
            "ESPR Compliance",
            "Bio-based Materials",
            "BIPV",
            "Horizon Europe",
            "Circular Economy",
            "Extended Reality",
            "Building Information Modeling"
          ]
        })}}/>
      </head>
      <body>{children}</body>
        <CookieBanner/>
    </html>
  )
}

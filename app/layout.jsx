import './globals.css'

export const metadata = {
  title: { default: 'Levery — Specialist R&D for Construction', template: '%s | Levery' },
  description: 'Specialist R&D, built around your team. New product development, sustainability compliance and EU funding for the construction sector.',
  metadataBase: new URL('https://levery.it'),
  icons: { icon: '/favicon.png', shortcut: '/favicon.png' },
  openGraph: { type: 'website', locale: 'en_GB', url: 'https://levery.it', siteName: 'Levery' },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LL1GSHR21G"/>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer=window.dataLayer||[];
          function gtag(){dataLayer.push(arguments);}
          gtag('js',new Date());
          gtag('config','G-LL1GSHR21G');
        `}}/>
      </head>
      <body>{children}</body>
    </html>
  )
}

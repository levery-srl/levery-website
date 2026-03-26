import './globals.css'
export const metadata = {
  title: { default: 'Levery — Specialist R&D for Construction', template: '%s | Levery' },
  description: 'Specialist R&D, built around your team.',
  metadataBase: new URL('https://levery.it'),
}
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>
}

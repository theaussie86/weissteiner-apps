import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import CookieConsent from '@/components/CookieConsentBanner'

export const metadata: Metadata = {
  title: {
    template: '%s - CWeissteiner',
    default:
      'CWeissteiner - Automation für Selbstständige und KMUs - Effizienz steigern und Wachstum fördern',
  },
  description:
    'Entdecke maßgeschneiderte Automatisierungslösungen für Selbstständige und kleine bis mittelständische Unternehmen (KMUs). Optimiere Deine Geschäftsprozesse, spare Zeit und Ressourcen und konzentriere Dich auf das Wesentliche - Dein Geschäftswachstum. Unsere Experten helfen Dir, die richtige Technologie zu finden und nahtlos zu integrieren. Starte jetzt und mache den ersten Schritt in eine effizientere Zukunft!',
  icons: {
    icon: `/favicon.ico?v=2`,
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="de"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <CookieConsent />
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}

import Image from 'next/image'

import backgroundImage from '@/images/background-custom.png'
import { Header } from './Header'
import { Footer } from './Footer'
import clsx from 'clsx'
import { Inter, Lexend } from 'next/font/google'

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

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main
        className={clsx(
          'mx-auto w-full max-w-xl flex-1 break-after-all px-4',
          inter.variable,
          lexend.variable,
        )}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

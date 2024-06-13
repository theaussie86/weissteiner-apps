import Image from 'next/image'

import backgroundImage from '@/images/background-custom.png'
import { Header } from './Header'
import { Footer } from './Footer'

export function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-xl flex-1 break-after-all px-4">
        {children}
      </main>
      <Footer />
    </>
  )
}

import { LegalLayout } from '@/components/LegalLayout'
import Link from 'next/link'
import React from 'react'

export default function Impressum() {
  return (
    <LegalLayout>
      <h1 className="mb-4 text-4xl font-bold">Impressum</h1>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        Angaben gemäß § 5 TMG
      </h2>
      <p className="mb-4">
        Christoph Weissteiner
        <br />
        Waibelweg 8<br />
        87700 Memmingen
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">Kontakt</h2>
      <p className="mb-4">
        Telefon: +49 176 3048 7024
        <br />
        E-Mail:{' '}
        <Link
          href="mailto:christoph.weissteiner@gmail.com"
          className="text-blue-500 hover:underline"
        >
          christoph.weissteiner@gmail.com
        </Link>
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">Umsatzsteuer-ID</h2>
      <p className="mb-4">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
        <br />
        DE349508578
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        Redaktionell verantwortlich
      </h2>
      <p className="mb-4">
        Christoph Weissteiner
        <br />
        Waibelweg 8<br />
        87700 Memmingen
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">EU-Streitschlichtung</h2>
      <p className="mb-4">
        Die Europäische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit:
        <Link
          href="https://ec.europa.eu/consumers/odr/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          https://ec.europa.eu/consumers/odr/
        </Link>
        .
        <br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
      </p>

      <h2 className="mb-2 mt-6 text-2xl font-semibold">
        Verbraucher­streit­beilegung/Universal­schlichtungs­stelle
      </h2>
      <p className="mb-4">
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </LegalLayout>
  )
}

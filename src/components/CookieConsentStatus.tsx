'use client'

import Cookies from 'js-cookie'
import {
  USER_CONSENT_DATE_KEY,
  USER_CONSENT_STATUS_KEY,
  accept,
  decline,
} from './CookieConsentBanner'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { formatDate } from 'date-fns'
import { Button } from './Button'

export default function ConsentStatus() {
  const [status, setStatus] = useState('')
  const [consent, setConsent] = useState(false)
  const router = useRouter()

  const handleDecline = () => {
    setConsent(false)
    decline(router)
  }
  const handleAccept = () => {
    accept(router)
    setConsent(true)
  }

  useEffect(() => {
    const hasGivenConsent = Cookies.get(USER_CONSENT_STATUS_KEY) === 'true'
    setConsent(hasGivenConsent)

    const dateStr = Cookies.get(USER_CONSENT_DATE_KEY)

    if (!dateStr)
      return hasGivenConsent
        ? setStatus('Einwilligung akzeptiert')
        : setStatus('Einwilligung abgelehnt')

    const date = new Date(parseInt(dateStr))
    const formattedDate = formatDate(date, 'PPpp')
    return hasGivenConsent
      ? setStatus(`Einwilligung akzeptiert am ${formattedDate}`)
      : setStatus(`Einwilligung abgelehnt am ${formattedDate}`)
  }, [consent])

  return (
    <p className="text-lg">
      {status}
      <Button
        type="button"
        onClick={consent ? handleDecline : handleAccept}
        className="ml-4"
      >
        {consent ? 'Ablehnen' : 'Akzeptieren'}
      </Button>
    </p>
  )
}

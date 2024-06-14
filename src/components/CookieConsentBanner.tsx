'use client'

import { Fragment, useEffect, useState } from 'react'
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
} from '@headlessui/react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { Button } from './Button'

const CONSENT_DISPLAY_KEY = 'cookie_consent_shown'
export const USER_CONSENT_STATUS_KEY = 'cookie_consent_accepted'
export const USER_CONSENT_DATE_KEY = 'cookie_consent_date'
const EXPIRE_DATE = 365

export const accept = (router: AppRouterInstance) => {
  Cookies.set(CONSENT_DISPLAY_KEY, 'true', { expires: EXPIRE_DATE })
  Cookies.set(USER_CONSENT_STATUS_KEY, 'true', { expires: EXPIRE_DATE })
  Cookies.set(USER_CONSENT_DATE_KEY, Date.now().toString(), {
    expires: EXPIRE_DATE,
  })
  router.refresh()
}

export const decline = (router: AppRouterInstance) => {
  Cookies.set(CONSENT_DISPLAY_KEY, 'true', { expires: EXPIRE_DATE })
  Cookies.set(USER_CONSENT_STATUS_KEY, 'false', { expires: EXPIRE_DATE })
  Cookies.set(USER_CONSENT_DATE_KEY, Date.now().toString(), {
    expires: EXPIRE_DATE,
  })
  Cookies.remove(
    `_ga_${process.env.NEXT_PUBLIC_GA_STREAM_ID?.replace('G-', '')}`,
  )
  router.refresh()
}

const CookieConsent = () => {
  const [showModal, setShowModal] = useState(false)
  const router = useRouter()

  const handleAccept = () => {
    setShowModal(false)
    accept(router)
    window.location.reload()
  }

  const handleDecline = () => {
    setShowModal(false)
    decline(router)
    window.location.reload()
  }

  useEffect(() => {
    const alreadyShown = Cookies.get(CONSENT_DISPLAY_KEY) === 'true'
    setShowModal(!alreadyShown)

    const hasGivenConsent = Cookies.get(USER_CONSENT_STATUS_KEY) === 'true'
    if (!hasGivenConsent) {
      Cookies.remove(
        `_ga_${process.env.NEXT_PUBLIC_GA_STREAM_ID?.replace('G-', '')}`,
      )
    }
  }, [])

  return (
    <Transition
      show={showModal}
      as={Fragment}
      enter="duration-200 ease-out"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="duration-300 ease-out"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => setShowModal(false)}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="min-h-screen px-4 text-center">
          {/* <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span> */}
          <DialogPanel className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <DialogTitle
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Verwendung von Cookies
            </DialogTitle>
            <Description className="mt-2">
              <p className="text-sm text-gray-500">
                Wir verwenden Cookies (auch von Drittanbietern), um
                Informationen über die Nutzung unserer Websites zu sammeln.
                Diese Cookies helfen uns dabei, dir das bestmögliche
                Online-Erlebnis zu bieten und dir Angebote zu unterbreiten, die
                auf deine Interessen zugeschnitten sind. Mit dem Klick auf den
                Button "Alles Speichern" erklärst du dich mit der Verwendung
                aller Cookies einverstanden.
              </p>
            </Description>

            <div className="mt-4 flex gap-x-1">
              <Button
                color="primary"
                type="button"
                className="font-normal"
                onClick={handleAccept}
              >
                Akzeptieren
              </Button>
              <Button
                type="button"
                color="white"
                onClick={handleDecline}
                className="font-normal"
              >
                Ablehnen
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  )
}

export default CookieConsent

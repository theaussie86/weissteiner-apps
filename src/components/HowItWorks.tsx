'use client'

import { useId } from 'react'
import Image, { type ImageProps } from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import screenshotContacts from '@/images/screenshots/contacts.png'
import screenshotInventory from '@/images/screenshots/inventory.png'
import screenshotProfitLoss from '@/images/screenshots/profit-loss.png'

interface Step {
  name: React.ReactNode
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType
}

const steps: Array<Step> = [
  {
    name: 'Gratis Gespräch',
    summary: 'Was möchtest du erreichen?',
    description:
      'Wir können gemeinsam herausfinden, ob ich dir helfen kann und ob wir gut zusammenarbeiten können.',
    image: screenshotProfitLoss,
    icon: function () {
      return (
        <>
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="24"
            fill="#fff"
          >
            1
          </text>
        </>
      )
    },
  },
  {
    name: 'Umfang & Angebot',
    summary: 'Wie erreichst du das?',
    description:
      'Ich erstelle dir ein detailliertes Angebot mit den einzelnen Schritten, wie lange diese dauern und dens Kosten. Zusätzlich erhälst du eine Liste möglicher Erweiterungen.',
    image: screenshotInventory,
    icon: function () {
      return (
        <>
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="24"
            fill="#fff"
          >
            2
          </text>
        </>
      )
    },
  },
  {
    name: 'Projekt Kickoff',
    summary: "Wann geht's los?",
    description:
      'Sobald du das Angebot angenommen hast, vereinbaren wir einen Termin für den Kickoff, bei dem wir alle Details besprechen und den Projektplan festlegen.',
    image: screenshotContacts,
    icon: function () {
      return (
        <>
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="24"
            fill="#fff"
          >
            3
          </text>
        </>
      )
    },
  },
]

function Step({
  step,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  step: Step
  isActive: boolean
}) {
  return (
    <div
      className={clsx(className, !isActive && 'opacity-75 hover:opacity-100')}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg',
          isActive ? 'bg-primary-800' : 'bg-slate-500',
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <step.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium',
          isActive ? 'text-primary-800' : 'text-slate-600',
        )}
      >
        {step.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">{step.summary}</p>
      <p className="mt-4 text-sm text-slate-600">{step.description}</p>
    </div>
  )
}

function StepsMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {steps.map((step) => (
        <div key={step.summary}>
          <Step step={step} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                className="w-full"
                src={step.image}
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function StepsDesktop() {
  return (
    <TabGroup className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <TabList className="grid grid-cols-3 gap-x-8">
            {steps.map((step, stepIndex) => (
              <Step
                key={step.summary}
                step={{
                  ...step,
                  name: (
                    <Tab className="ui-not-focus-visible:outline-none">
                      <span className="absolute inset-0" />
                      {step.name}
                    </Tab>
                  ),
                }}
                isActive={stepIndex === selectedIndex}
                className="relative"
              />
            ))}
          </TabList>
          <TabPanels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {steps.map((step, stepIndex) => (
                <TabPanel
                  static
                  key={step.summary}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out ui-not-focus-visible:outline-none',
                    stepIndex !== selectedIndex && 'opacity-60',
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={stepIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      className="w-full"
                      src={step.image}
                      alt=""
                      sizes="52.75rem"
                    />
                  </div>
                </TabPanel>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </TabPanels>
        </>
      )}
    </TabGroup>
  )
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="Features for simplifying everyday business tasks"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            So funktioniert’s
          </h2>
        </div>
        <StepsMobile />
        <StepsDesktop />
      </Container>
    </section>
  )
}

import headlessuiPlugin from '@headlessui/tailwindcss'
import formsPlugin from '@tailwindcss/forms'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      colors: {
        primary: {
          '50': '#ebf3ff',
          '100': '#dae9ff',
          '200': '#bcd4ff',
          '300': '#94b6ff',
          '400': '#6a8cff',
          '500': '#4863ff',
          '600': '#2735ff',
          '700': '#1c26e6',
          '800': '#1a25b9',
          '900': '#1a237e',
          '950': '#121654',
        },
        secondary: {
          '50': '#fffbeb',
          '100': '#fdf3c8',
          '200': '#fce48b',
          '300': '#fad14f',
          '400': '#f9bf2d',
          '500': '#f39c0d',
          '600': '#d77608',
          '700': '#b2520b',
          '800': '#913f0f',
          '900': '#773410',
          '950': '#441a04',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
    },
  },
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config

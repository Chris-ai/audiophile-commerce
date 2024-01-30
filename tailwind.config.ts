import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      h1: [
        '3.5rem',
        {
          fontWeight: '700',
          lineHeight: '3.625rem',
          letterSpacing: '0.125rem',
        },
      ],
      h2: [
        '2.5rem',
        {
          fontWeight: '700',
          lineHeight: '2.75rem',
          letterSpacing: '0.089rem',
        },
      ],
      h3: [
        '2rem',
        {
          fontWeight: '700',
          lineHeight: '2.25rem',
          letterSpacing: '0.071rem',
        },
      ],
      h4: [
        '1.75rem',
        {
          fontWeight: '700',
          letterSpacing: '0.125rem',
        },
      ],
      h5: [
        '1.5rem',
        {
          fontWeight: '700',
          letterSpacing: '0.107rem',
        },
      ],
      h6: [
        '1.125rem',
        {
          fontWeight: '700',
          letterSpacing: '0.080375rem',
        },
      ],
      regular: [
        '0.9375rem',
        {
          fontWeight: '500',
          lineHeight: '1.5625rem',
        },
      ],
      overline: [
        '0.875rem',
        {
          fontWeight: '400',
          letterSpacing: '0.625rem',
        },
      ],
      subtitle: [
        '0.8125rem',
        {
          fontWeight: '700',
          lineHeight: '1.5625rem',
          letterSpacing: '0.05806rem',
        },
      ],
    },
    extend: {
      colors: {
        orange: '#D87D4A',
        'light-orange': '#FBAF85',
        dark: '#101010',
        'dark-grey': '#F1F1F1',
        'light-grey': '#FAFAFA',
        grey: '#CFCFCF',
      },
      backgroundImage: {
        'hero-mobile': "url('/home/hero/mobile.jpg')",
        'hero-tablet': "url('/home/hero/tablet.jpg')",
        'hero-desktop': "url('/home/hero/desktop.jpg')",
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;

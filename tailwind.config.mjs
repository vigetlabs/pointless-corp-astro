import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#fff',
      gray: {
        darker: '#22201f',
        dark: '#373939',
        light: '#d2cfc8',
      },
      brick: {
        light: '#5f5250',
        DEFAULT: '#482723',
        dark: '#47170d',
      },
      green: {
        DEFAULT: '#94b991',
        dark: '#6d9055',
      },
      mud: {
        light: '#a27974',
        DEFAULT: '#a37a74',
      },
      red: {
        DEFAULT: '#dc6569',
        dark: '#8e473e',
      },
      experiments: '#82a680',
      stunts: '#778396',
      tools: '#d0585d',
    },
    screens: {
      xs: '520px',
      sm: '640px',
      md: '720px',
      lg: '1000px',
      xl: '1200px',
    },
    extend: {
      maxWidth: {
        '2xl': '620px',
        '3xl': '740px',
        '4xl': '960px',
        '7xl': '1220px',
      },
      fontFamily: {
        base: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        functionpro: ['FunctionPro', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({addComponents, theme}) {
      addComponents({
        '.bg-tiled': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          backgroundBlendMode: 'overlay',
          backgroundImage: `url('/src/images/patterns/bg-paper.png')`,
          backgroundRepeat: 'repeat',
        },
        '.bg-tiled-gradient': {
          backgroundImage: `
            linear-gradient(to right,
              rgba(0, 0, 0, 0) 50%,
              rgba(0, 0, 0, 0.04) 50%
            ),
            url('/src/images/patterns/bg-paper.png')
          `,
          backgroundRepeat: 'repeat',
        },
        '.about-text p + p': {
          marginTop: theme('spacing.6'),
        },
        '.about-text p:nth-child(3) b:nth-child(1)': {
          color: theme('colors.tools'),
        },
        '.about-text p:nth-child(3) b:nth-child(2)': {
          color: theme('colors.experiments'),
        },
        '.about-text p:nth-child(3) b:nth-child(3)': {
          color: theme('colors.stunts'),
        },
        '.process-text p:nth-child(1)': {
          color: theme('colors.green.DEFAULT'),
        },
        '.caption-peek figcaption': {
          transform: 'translateY(100%)',
        },
        '.caption-peek:hover figcaption': {
          transform: 'translateY(0)',
        },
        '.faq-text a': {
          color: theme('colors.red.dark'),
          fontWeight: theme('fontWeight.bold'),
          textDecoration: 'underline',
        },
        '.faq-text a:hover': {
          textDecoration: 'none',
        },
        '.contact-link b': {
          textDecoration: 'underline',
        },
        '.contact-link:hover b': {
          textDecoration: 'none',
        },
        '.project-list': {
          backgroundImage: `url('/src/images/patterns/bg-waves.png')`,
          backgroundRepeat: 'repeat',
        },
        '.project-item': {
          backgroundColor: 'var(--projectBackgroundColor)',
          color: 'var(--projectTextColor)',
        },
        '.project-item .stamp-icon': {
          color: 'var(--projectStampColor)',
        },
        '.project-item:hover .stamp-icon': {
          transform: 'rotate3d(0, 1, 0, 360deg)',
        },
        '.project-item-link::before': {
          bottom: 0,
          content: '""',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        },
        '.project': {
          backgroundColor: 'var(--backgroundColor)',
          color: 'var(--textColor)',
        },
        '.project a': {
          color: 'var(--linkColor)',
          textDecoration: 'underline',
        },
        '.metatable li, .metatable-label': {
          borderColor: 'var(--accentColor)',
        },
        '.metatable-value': {
          color: 'var(--linkColor)',
        },
        '.slide-nav': {
          backgroundColor: 'var(--backgroundColor)',
        },
        '.process-nav-button span': {
          backgroundColor: 'var(--linkColor)',
          borderColor: 'transparent',
        },
        '.process-nav-button span.selected': {
          backgroundColor: 'transparent',
          borderColor: 'var(--linkColor)',
        },
        '.project-description a': {
          color: 'var(--linkColor)',
          fontWeight: theme('fontWeight.bold'),
          textDecoration: 'underline',
        },
        '.project-description p + p': {
          marginTop: theme('spacing.6'),
        },
        '.image-blok': {
          color: 'var(--accentColor)',
        },
        '.image-blok svg': {
          height: '100%',
          left: 0,
          position: 'absolute',
          top: 0,
          width: '100%',
        },
        '.footer-social svg': {
          height: theme('spacing.8'),
          width: theme('spacing.8'),
        },
        '.text-blok p + p': {
          marginTop: theme('spacing.6'),
        },
        '.text-blok a': {
          fontWeight: theme('fontWeight.bold'),
          textDecoration: 'underline',
        },
      })
    })
  ],
}

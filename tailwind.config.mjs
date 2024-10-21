import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      white: '#fff',
      gray: {
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
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.bg-tiled': {
          backgroundImage: `url('/src/images/patterns/bg-paper.png')`,
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
          backgroundBlendMode: 'overlay',
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
          marginTop: '1.5em',
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
      })
    })
  ],
}

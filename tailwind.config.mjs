import { P } from './dist/chunks/StoryblokComponent_DgO6R1lv.mjs';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      'brick': {
        light: '#5f5250',
        DEFAULT: '#482723',
      },
      'green': {
        DEFAULT: '#94b991',
        dark: '#6d9055',
      },
      'mud': {
        light: '#a27974',
        DEFAULT: '#a37a74',
      },
      'red': {
        DEFAULT: '#dc6569',
        dark: '#8e473e',
      },
      'experiments': '#82a680',
      'stunts': '#778396',
      'tools': '#d0585d',
    },
    screens: {
      'sm': '640px',
      'md': '720px',
      'lg': '1000px',
      'xl': '1200px',
    },
    extend: {
      maxWidth: {
        '2xl': '620px',
        '3xl': '740px',
        '4xl': '960px',
        '7xl': '1220px',
      }
    },
  },
  plugins: [],
}

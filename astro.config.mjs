import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        homepage: 'storyblok/Home',
      },
      apiOptions: {
        region: 'us',
      },
    }),
    alpinejs(),
    tailwind(),
  ],
});

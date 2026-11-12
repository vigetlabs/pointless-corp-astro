import { defineConfig } from 'astro/config';
import { storyblok } from '@storyblok/astro';
import { loadEnv } from 'vite';

import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      components: {
        homepage: 'storyblok/Homepage',
        project: 'storyblok/Project',
        embeddedContent: 'storyblok/bloks/EmbeddedContentBlok',
        image: 'storyblok/bloks/ImageBlok',
        text: 'storyblok/bloks/TextBlok',
        video: 'storyblok/bloks/VideoBlok',
      },
      apiOptions: {
        region: 'us',
      },
    }),
    alpinejs({
      entrypoint: '/src/alpine.ts'
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});

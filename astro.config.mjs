import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';

const env = loadEnv("", process.cwd(), 'STORYBLOK');

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: netlify(),
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Quality of output images (1-100)
        quality: 80,
        // Format preferences in order
        formats: ['avif', 'webp', 'jpeg'],
        // Default widths for responsive images
        widths: [640, 750, 828, 1080, 1200, 1920],
        // Default sizes attribute
        sizes: '(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw',
        // Cache duration for optimized images (in seconds)
        cacheDuration: 604800, // 7 days
      },
    },
  },
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
      entrypoint: '/src/alpine.js'
    }),
    tailwind(),
  ],
});

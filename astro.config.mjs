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
    alpinejs(),
    tailwind(),
  ],
});

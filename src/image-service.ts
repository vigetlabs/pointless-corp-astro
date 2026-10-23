import type { ExternalImageService } from 'astro';
import { baseService } from 'astro/assets';

// Storyblok's image service already handles resizing and format conversion,
// so leave remote URLs untouched instead of downloading them into the build.
const service: ExternalImageService = {
  ...baseService,
  getURL(options) {
    return typeof options.src === 'string' ? options.src : options.src.src;
  },
};

export default service;

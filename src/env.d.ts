/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly STORYBLOK_TOKEN: string;
  // Set by Netlify during builds
  readonly NETLIFY?: string;
  readonly CONTEXT?: string;
  readonly DEPLOY_PRIME_URL?: string;
}

interface Window {
  dataLayer: unknown[];
}

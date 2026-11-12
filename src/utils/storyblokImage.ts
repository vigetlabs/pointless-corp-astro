// Helpers for building Storyblok Image Service URLs.
// https://www.storyblok.com/docs/api/image-service

export type ImageFormat = 'avif' | 'webp' | 'jpeg' | 'png';

export interface StoryblokImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: ImageFormat;
  /** Fit the image inside width x height instead of cropping it. */
  fitIn?: boolean;
  /** Fill color for the empty area left by fitIn (hex without #, or "transparent"). */
  fill?: string;
}

export const DEFAULT_WIDTHS = [320, 480, 640, 768, 1024, 1366, 1536, 1920, 2048];
export const DEFAULT_QUALITY = 70;

// Storyblok asset URLs encode the original size: /f/{space}/{width}x{height}/{hash}/{name}
const DIMENSIONS_PATTERN = /\/f\/\d+\/(\d+)x(\d+)\//;

export function getImageDimensions(filename: string): { width: number; height: number } | undefined {
  const match = filename.match(DIMENSIONS_PATTERN);
  if (!match) return undefined;

  const width = Number(match[1]);
  const height = Number(match[2]);
  return width > 0 && height > 0 ? { width, height } : undefined;
}

export function isSvg(filename: string): boolean {
  return /\.svg$/i.test(filename);
}

export function storyblokImageUrl(filename: string, options: StoryblokImageOptions = {}): string {
  const { width, height, quality, format, fitIn, fill } = options;
  const segments = ['m'];

  if (fitIn) segments.push('fit-in');
  if (width || height) segments.push(`${width ?? 0}x${height ?? 0}`);

  const filters: string[] = [];
  if (quality) filters.push(`quality(${quality})`);
  if (fill) filters.push(`fill(${fill})`);
  if (format) filters.push(`format(${format})`);
  if (filters.length) segments.push(`filters:${filters.join(':')}`);

  return `${filename}/${segments.join('/')}`;
}

/**
 * Widths to request for a srcset, never larger than the original image.
 * If the original falls between two requested widths, it becomes the top candidate.
 */
export function responsiveWidths(filename: string, widths: number[] = DEFAULT_WIDTHS): number[] {
  const sorted = [...new Set(widths)].sort((a, b) => a - b);
  const original = getImageDimensions(filename)?.width;
  if (!original) return sorted;

  const capped = sorted.filter(width => width <= original);
  if (capped.at(-1) !== original && original < sorted.at(-1)!) capped.push(original);
  return capped;
}

export function storyblokSrcset(
  filename: string,
  widths: number[],
  options: Omit<StoryblokImageOptions, 'width' | 'height'> = {},
): string {
  return widths
    .map(width => `${storyblokImageUrl(filename, { ...options, width })} ${width}w`)
    .join(', ');
}

/** A 1200x630 social card image, padded with `background` so logos aren't cropped. */
export function storyblokOgImageUrl(filename: string, background = 'ffffff'): string {
  return storyblokImageUrl(filename, {
    width: 1200,
    height: 630,
    fitIn: true,
    fill: background.replace(/^#/, ''),
    format: 'png',
  });
}

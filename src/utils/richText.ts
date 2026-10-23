import type { RichText } from '../types/storyblok';

/**
 * Returns the plain text of each top-level block (e.g. paragraph) in a rich text field
 */
export function richTextParagraphs(doc: RichText): string[] {
  return doc.content.map(block =>
    'content' in block && block.content
      ? block.content.map(child => (child.type === 'text' ? child.text : '')).join('')
      : ''
  );
}

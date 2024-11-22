export function getContrastColor(hexColor: string): string {
  // Remove the hash at the start if it's there
  hexColor = hexColor.replace(/^#/, '');

  // Parse the color to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate the perceptive luminance (aka luma) - human eye favors green color
  const luma = ((0.299 * r) + (0.587 * g) + (0.114 * b)) / 255;

  // Return black for bright colors, white for dark colors
  return luma > 0.5 ? '#000' : '#FFF';
}

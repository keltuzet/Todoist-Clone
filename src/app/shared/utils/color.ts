export function toTransparencyHexColor(color: string, opacity: number): string {
  // coerce values so ti is between 0 and 1.
  const colorOpacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + colorOpacity.toString(16).toUpperCase();
}

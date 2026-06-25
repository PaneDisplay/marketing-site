/** placehold.co helper — keeps the brand bg/fg consistent across placeholders.
 *  The `label` becomes both the visible text in the image and should be mirrored
 *  in the consuming element's `alt` describing the real asset that belongs there. */
export function placeholder(width: number, height: number, label: string) {
  const text = encodeURIComponent(label);
  return `https://placehold.co/${width}x${height}/0e0e11/3f3f46?font=source-sans-pro&text=${text}`;
}

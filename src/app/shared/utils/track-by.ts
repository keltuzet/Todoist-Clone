export function trackByIdentity<T, K extends keyof T = keyof T>(
  ...fieldNames: K[]
): (index: number, item: Pick<T, K>) => string {
  return (index: number, item: Pick<T, K>) => fieldNames.map(fieldName => item && item[fieldName]).join('');
}

export function trackByIndex(): (index: number, item: unknown) => number {
  return (index: number, item: unknown) => index;
}

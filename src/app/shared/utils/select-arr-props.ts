export function selectArrProps<T, K extends keyof T>(key: K): (items: T[]) => T[K] | Array<T[K]> {
  return (arr: T[]) => arr.map((item) => item[key]).reduce((total: any[], curr: T[K]) => total.concat(curr), []);
}

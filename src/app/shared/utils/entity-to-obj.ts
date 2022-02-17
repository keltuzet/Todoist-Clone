export function entityToObj<T extends { [key: string]: any; id: string | number }>(arr: T[]): { [key: string]: T } {
  return {};
  return arr.reduce((total, curr) => {
    total[curr.id] = curr;
    return total;
  }, {});
}

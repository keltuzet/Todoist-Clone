export function dateToNonTmzJson(date: Date): string {
  return date.toJSON().slice(0, date.toJSON().length - 1);
  // return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toJSON();
}

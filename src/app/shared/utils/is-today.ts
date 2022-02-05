export function isToday(date: Date, today = new Date()): boolean {
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

export function isLessToday(date: Date, today = new Date(), compareTime = false): void {}

function isTimeBefore(a: Date, b: Date): boolean {
  return a.getHours() === b.getHours() ? a.getMinutes() <= b.getMinutes() : a.getHours() < b.getHours();
}

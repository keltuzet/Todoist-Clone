export function isToday(date: Date, today = new Date(), compareTime = false): boolean {
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() == today.getMonth() &&
    date.getFullYear() == today.getFullYear() &&
    (!compareTime || !isTimeBefore(date, today))
  );
}

function isTimeBefore(a: Date, b: Date) {
  return a.getHours() === b.getHours() ? a.getMinutes() <= b.getMinutes() : a.getHours() < b.getHours();
}

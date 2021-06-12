export function isOverdue(date: Date, today = new Date()): boolean {
  if (date.getFullYear() > today.getFullYear()) return false;

  if (date.getFullYear() < today.getFullYear()) return true;

  if (date.getMonth() > today.getMonth()) return false;

  if (date.getMonth() < today.getMonth()) return true;

  return date.getDate() < today.getDate();
}

isOverdue(new Date('2021-05-27T22:00'), new Date())

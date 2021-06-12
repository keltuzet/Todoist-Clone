import { isOverdue } from '../is-overdue';

describe('isOverdue', () => {
  it(`should return false if year of date less current year`, () => {
    const date = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
    console.log(date.toLocaleDateString());
    expect(isOverdue(date)).toBeTrue();
  });

  it(`should return false if month of date less current month`, () => {
    const date = new Date(new Date().setMonth(new Date().getMonth() - 1));
    console.log(date.toLocaleDateString());
    expect(isOverdue(date)).toBeTrue();
  });

  it(`should return false if day of date less current day`, () => {
    const date = new Date(new Date().setDate(new Date().getDate() - 1));
    console.log(date.toLocaleDateString());
    expect(isOverdue(date)).toBeTrue();
  });
});

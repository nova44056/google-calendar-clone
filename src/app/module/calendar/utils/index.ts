export function getTotalDaysOfGivenMonth(month: number, year: number): number {
  return new Date(year, month + 1, 0).getDate();
}

export function getDayOfWeekOfGivenDate(
  day: number,
  month: number,
  year: number
) {
  return new Date(year, month, day).getDay();
}

interface IDate {
  year: number;
  month: number;
  day: number;
}

/**
 *
 * @param d1
 * @param d2
 * @returns -1 if d1 is before d2, 0 if d1 is equal to d2, 1 if d1 is after d2
 */
export function compareDate(d1: IDate, d2: IDate): number {
  if (d1.year > d2.year) return 1;
  else if (d1.year < d2.year) return -1;
  else if (d1.month > d2.month) return 1;
  else if (d1.month < d2.month) return -1;
  else if (d1.day > d2.day) return 1;
  else if (d1.day < d2.day) return -1;
  else return 0;
}

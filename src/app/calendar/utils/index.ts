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

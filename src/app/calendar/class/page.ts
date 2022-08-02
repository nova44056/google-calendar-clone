import { getDayOfWeekOfGivenDate, getTotalDaysOfGivenMonth } from '../utils';
import { Day } from './day';

export class Page {
  private year: number;
  private month: number;
  private days: Day[][] = [];

  constructor(month: number, year: number) {
    this.year = year;
    this.month = month;

    const totalDaysInCurrentMonth = getTotalDaysOfGivenMonth(
      this.month,
      this.year
    );

    const daysInPreviousMonth =
      getDayOfWeekOfGivenDate(1, this.month, this.year) === 0
        ? []
        : this.getDaysForPreviousMonth().slice(
            -getDayOfWeekOfGivenDate(1, this.month, this.year)
          );

    const daysInCurrentMonth = this.getDaysForCurrentMonth();
    const daysInNextMonth = this.getDaysForNextMonth().slice(
      0,
      6 -
        getDayOfWeekOfGivenDate(totalDaysInCurrentMonth, this.month, this.year)
    );

    const days = [
      ...daysInPreviousMonth,
      ...daysInCurrentMonth,
      ...daysInNextMonth,
    ];

    // transformed 1*1 array into 6*7 array
    const transformedDays = Array.from(
      { length: Math.ceil(days.length / 7) },
      (_, i: number) => days.slice(i * 7, i * 7 + 7)
    );

    this.days = transformedDays;
  }

  public getDays(): Day[][] {
    return this.days;
  }

  private getDaysForPreviousMonth(): Day[] {
    const month = this.month - 1 > 0 ? this.month - 1 : 11;
    const year = this.month - 1 > 0 ? this.year : this.year - 1;

    const totalNumOfDaysInPreviousMonth: number = getTotalDaysOfGivenMonth(
      month,
      year
    );

    return Array.from(
      { length: totalNumOfDaysInPreviousMonth },
      (_, i: number) => new Day(i + 1, month, year)
    );
  }

  private getDaysForNextMonth(): Day[] {
    const month = this.month + 1 < 11 ? this.month + 1 : 1;
    const year = this.month + 1 < 11 ? this.year : this.year + 1;

    const totalNumOfDaysInNextMonth: number = getTotalDaysOfGivenMonth(
      month,
      year
    );

    return Array.from(
      { length: totalNumOfDaysInNextMonth },
      (_, i: number) => new Day(i + 1, month, year)
    );
  }

  private getDaysForCurrentMonth(): Day[] {
    const month = this.month;
    const year = this.year;

    const totalNumOfDaysInCurrentMonth: number = getTotalDaysOfGivenMonth(
      month,
      year
    );
    return Array.from(
      { length: totalNumOfDaysInCurrentMonth },
      (_, i: number) => new Day(i + 1, month, year)
    );
  }
}

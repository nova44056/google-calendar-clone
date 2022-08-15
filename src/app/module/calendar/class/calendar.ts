import { Location } from '@angular/common';
import { Page } from './page';

export class Calendar {
  protected TOTAL_MONTH = 12;
  protected MONTH = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  protected currentYear: number;
  protected currentMonth: number;
  protected currentDay: number;
  protected pages: Page[] = [];

  constructor(
    currentYear: number,
    currentMonth: number,
    currentDay: number,
    location: Location
  ) {
    this.currentYear = currentYear;
    this.currentMonth = currentMonth;
    this.currentDay = currentDay;
    this.pages = Array.from(
      {
        length: this.TOTAL_MONTH,
      },
      (_, i: number) => new Page(i, currentYear)
    );

    location.onUrlChange(() => {
      const prevYear = this.getCurrentYear();

      const currentYear = parseInt(location.path().split('/')[3]); // default current year
      const currentMonth = parseInt(location.path().split('/')[4]) - 1; // default current month
      const currentDay = parseInt(location.path().split('/')[5]); //default current day

      this.setCurrentYear(currentYear);
      this.setCurrentMonth(currentMonth);
      this.setCurrentDay(currentDay);

      // update calendar page when the url change
      if (
        this.getCurrentYear() - prevYear > 0 ||
        this.getCurrentYear() - prevYear < 0
      ) {
        const newPages: Page[] = Array.from(
          {
            length: this.TOTAL_MONTH,
          },

          (_, i: number) => new Page(i, this.getCurrentYear())
        );
        this.setPages(newPages);
      }
    });
  }

  public getCurrentYear(): number {
    return this.currentYear;
  }

  public setCurrentYear(year: number): void {
    this.currentYear = year;
  }

  public getCurrentMonth(): number {
    return this.currentMonth;
  }

  public setCurrentMonth(month: number): void {
    this.currentMonth = month;
  }

  public getPages(): Page[] {
    return this.pages;
  }

  public getCurrentDay(): number {
    return this.currentDay;
  }

  public setCurrentDay(newCurrentDay: number): void {
    this.currentDay = newCurrentDay;
  }

  public getPage(month: number): Page {
    return this.pages[month];
  }

  public setPages(pages: Page[]): void {
    this.pages = pages;
  }

  protected isToday(year: number, month: number, day: number): boolean {
    return (
      year === new Date().getFullYear() &&
      month === new Date().getMonth() &&
      day === new Date().getDate()
    );
  }

  protected next(): void {
    const prevYear = this.getCurrentYear();

    // navigating to next year
    if (this.getCurrentMonth() + 2 > this.TOTAL_MONTH)
      this.setCurrentYear(this.currentYear + 1);
    else this.setCurrentYear(this.currentYear);

    // navigating to next month
    if (this.getCurrentMonth() + 2 > this.TOTAL_MONTH) this.setCurrentMonth(0);
    else this.setCurrentMonth(this.getCurrentMonth() + 1);

    // navigating to next day
    if (
      this.getCurrentMonth() === new Date().getMonth() &&
      this.getCurrentYear() === new Date().getFullYear()
    )
      this.setCurrentDay(new Date().getDate());
    else this.setCurrentDay(1);

    // navigating to next calendar page
    if (this.getCurrentYear() - prevYear > 0) {
      const newPages: Page[] = Array.from(
        {
          length: this.TOTAL_MONTH,
        },

        (_, i: number) => new Page(i, this.getCurrentYear())
      );
      this.setPages(newPages);
    }
  }

  protected previous(): void {
    const prevYear = this.getCurrentYear();

    // navigating to previous year
    if (this.getCurrentMonth() - 1 < 0)
      this.setCurrentYear(this.currentYear - 1);
    else this.setCurrentYear(this.currentYear);

    // navigating to previous month
    if (this.getCurrentMonth() - 1 < 0) this.setCurrentMonth(11);
    else this.setCurrentMonth(this.getCurrentMonth() - 1);

    // navigating to previous day
    if (
      this.getCurrentMonth() === new Date().getMonth() &&
      this.getCurrentYear() === new Date().getFullYear()
    )
      this.setCurrentDay(new Date().getDate());
    else this.setCurrentDay(1);

    // navigating to previous calendar page
    if (this.currentYear - prevYear < 0) {
      const newPages: Page[] = Array.from(
        {
          length: this.TOTAL_MONTH,
        },

        (_, i: number) => new Page(i, this.getCurrentYear())
      );
      this.setPages(newPages);
    }
  }
}

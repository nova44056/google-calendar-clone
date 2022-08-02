import { Component, OnInit } from '@angular/core';
import { Page } from './class/page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  private TOTAL_MONTH = 12;
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

  private currentYear: number;
  private currentMonth: number;
  private pages: Page[] = [];

  constructor() {
    this.currentYear = new Date().getFullYear(); // default to current year
    this.currentMonth = new Date().getMonth(); // default to current month
    this.pages = Array.from(
      {
        length: this.TOTAL_MONTH,
      },
      (_, i: number) => new Page(i, this.currentYear)
    );
  }

  public nextMonth(): void {
    const prevYear = this.currentYear;

    this.currentYear =
      this.currentMonth + 1 > 11 ? this.currentYear + 1 : this.currentYear;
    this.currentMonth = this.currentMonth + 1 > 11 ? 0 : this.currentMonth + 1;

    if (this.currentYear - prevYear > 0) {
      this.pages = Array.from(
        {
          length: this.TOTAL_MONTH,
        },

        (_, i: number) => new Page(i, this.currentYear)
      );
    }
  }

  public previousMonth(): void {
    const prevYear = this.currentYear;
    this.currentYear =
      this.currentMonth - 1 < 0 ? this.currentYear - 1 : this.currentYear;

    this.currentMonth = this.currentMonth - 1 < 0 ? 11 : this.currentMonth - 1;
    if (this.currentYear - prevYear < 0) {
      this.pages = Array.from(
        {
          length: this.TOTAL_MONTH,
        },

        (_, i: number) => new Page(i, this.currentYear)
      );
    }
  }

  public getPages(): Page[] {
    return this.pages;
  }

  public getPage(month: number): Page {
    return this.pages[month];
  }

  public getCurrentMonth(): number {
    return this.currentMonth;
  }

  public getCurrentYear(): number {
    return this.currentYear;
  }

  ngOnInit(): void {}
}

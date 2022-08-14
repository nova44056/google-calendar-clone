import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Calendar, Page } from '../../class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mini-calendar',
  templateUrl: './mini-calendar.component.html',
  styleUrls: ['./mini-calendar.component.scss'],
})
export class MiniCalendarComponent extends Calendar implements OnInit {
  /**
   * Property
   */
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
  private currentDay: number;

  /**
   * Constructor
   */
  constructor(private location: Location, private router: Router) {
    const currentMonth = parseInt(location.path().split('/')[4]) - 1; // default current month
    const currentYear = parseInt(location.path().split('/')[3]); // default current year
    const currentDay = parseInt(location.path().split('/')[5]); //default current day

    super(currentMonth, currentYear);
    this.currentDay = currentDay;

    location.onUrlChange(() => {
      const prevYear = this.getCurrentYear();

      const currentYear = parseInt(location.path().split('/')[3]); // default current year
      const currentMonth = parseInt(location.path().split('/')[4]) - 1; // default current month
      const currentDay = parseInt(location.path().split('/')[5]); //default current day

      this.setCurrentYear(currentYear);
      this.setCurrentMonth(currentMonth);
      this.setCurrentDay(currentDay);

      // navigating to calendar page
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

  /**
   * Methods
   */
  public getCurrentDay(): number {
    return this.currentDay;
  }

  public setCurrentDay(newCurrentDay: number): void {
    this.currentDay = newCurrentDay;
  }

  public isToday(year: number, month: number, day: number): boolean {
    return (
      year === new Date().getFullYear() &&
      month === new Date().getMonth() &&
      day === new Date().getDate()
    );
  }

  public next(): void {
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

  public previous(): void {
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

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { Calendar } from './class/calendar';
import { Page } from './class/page';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent extends Calendar implements OnInit {
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

  constructor() {
    const currentMonth = new Date().getMonth(); // default current month
    const currentYear = new Date().getFullYear(); // default current year
    super(currentMonth, currentYear);
  }

  public nextMonth(): void {
    const prevYear = this.getCurrentYear();

    if (this.getCurrentMonth() + 2 > this.TOTAL_MONTH)
      this.setCurrentYear(this.currentYear + 1);
    else this.setCurrentYear(this.currentYear);

    if (this.getCurrentMonth() + 2 > this.TOTAL_MONTH) this.setCurrentMonth(0);
    else this.setCurrentMonth(this.getCurrentMonth() + 1);

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

  public previousMonth(): void {
    const prevYear = this.getCurrentYear();

    if (this.getCurrentMonth() - 1 < 0)
      this.setCurrentYear(this.currentYear - 1);
    else this.setCurrentYear(this.currentYear);

    if (this.getCurrentMonth() - 1 < 0) this.setCurrentMonth(11);
    else this.setCurrentMonth(this.getCurrentMonth() - 1);

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

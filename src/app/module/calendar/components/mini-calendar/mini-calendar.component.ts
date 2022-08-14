import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Calendar, Page } from '../../class';

@Component({
  selector: 'app-mini-calendar',
  templateUrl: './mini-calendar.component.html',
  styleUrls: ['./mini-calendar.component.scss'],
})
export class MiniCalendarComponent extends Calendar implements OnInit {
  constructor(private location: Location) {
    const currentYear = parseInt(location.path().split('/')[3]); // default current year
    const currentMonth = parseInt(location.path().split('/')[4]) - 1; // default current month
    const currentDay = parseInt(location.path().split('/')[5]); //default current day

    super(currentYear, currentMonth, currentDay);

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

  ngOnInit(): void {}
}

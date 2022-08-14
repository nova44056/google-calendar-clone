import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Calendar, Day, Page } from '../../class';
import { getTotalDaysOfGivenMonth } from '../../utils';

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

  public override getPage(month: number): Page {
    const page = this.pages[month];

    if (page.getDays().length < 6) {
      for (let i = page.getDays().length; i < 6; i++) {
        const lastRowOfPage = page.getDays().length;
        const lastColumnOfPage = page.getDays()[lastRowOfPage - 1].length;

        const lastDayInPage =
          page.getDays()[lastRowOfPage - 1][lastColumnOfPage - 1];

        const totalDaysInMonth = getTotalDaysOfGivenMonth(
          lastDayInPage.getMonth(),
          lastDayInPage.getYear()
        );

        const m =
          lastDayInPage.getDay() === totalDaysInMonth
            ? lastDayInPage.getMonth() + 1
            : lastDayInPage.getMonth();

        const y = lastDayInPage.getYear();

        const additionalDays = Array.from(
          {
            length: 7,
          },
          (_, i: number) =>
            new Day(y, m, (i + lastDayInPage.getDay() + 1) % totalDaysInMonth)
        );
        page.getDays().push(additionalDays);
      }
    }

    return page;
  }

  ngOnInit(): void {}
}

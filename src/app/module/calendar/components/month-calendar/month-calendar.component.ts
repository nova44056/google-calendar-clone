import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Location } from '@angular/common';
import { PortalBridgeService } from 'src/app/portal-bridge.service';
import { Calendar, Page } from '../../class';

@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss'],
})
export class MonthCalendarComponent extends Calendar implements AfterViewInit {
  @ViewChild('portalContent') portalContent: TemplateRef<unknown>;

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
  constructor(
    private portalBridgeService: PortalBridgeService,
    private _viewContainerRef: ViewContainerRef,
    private location: Location
  ) {
    const currentMonth = parseInt(location.path().split('/')[4]) - 1; // default current month
    const currentYear = parseInt(location.path().split('/')[3]); // default current year
    const currentDay = parseInt(location.path().split('/')[5]); //default current day

    super(currentMonth, currentYear);
    this.currentDay = currentDay;
  }

  /**
   * Methods
   */
  public getCurrentDay(): number {
    return this.currentDay;
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
      this.currentDay = new Date().getDate();
    else this.currentDay = 1;

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

    this.updateUrl();
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
      this.currentDay = new Date().getDate();
    else this.currentDay = 1;

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

    this.updateUrl();
  }

  private updateUrl(): void {
    this.location.replaceState(
      '/calendar/month/' +
        this.getCurrentYear() +
        '/' +
        (this.getCurrentMonth() + 1) +
        '/' +
        this.getCurrentDay()
    );
  }

  ngAfterViewInit(): void {
    const portal = new TemplatePortal(
      this.portalContent,
      this._viewContainerRef
    );
    this.portalBridgeService.setPortal(portal);
  }
}

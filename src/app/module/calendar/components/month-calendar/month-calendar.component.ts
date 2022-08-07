import { CdkPortal, TemplatePortal } from '@angular/cdk/portal';
import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { PortalBridgeService } from 'src/app/portal-bridge.service';
import { Calendar, Page } from '../../class';

@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss'],
})
export class MonthCalendarComponent extends Calendar implements AfterViewInit {
  @ViewChild('portalContent') portalContent: TemplateRef<unknown>;

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

  constructor(
    private portalBridgeService: PortalBridgeService,
    private _viewContainerRef: ViewContainerRef
  ) {
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

  ngAfterViewInit(): void {
    const portal = new TemplatePortal(
      this.portalContent,
      this._viewContainerRef
    );
    this.portalBridgeService.setPortal(portal);
  }
}

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

  constructor(
    private portalBridgeService: PortalBridgeService,
    private _viewContainerRef: ViewContainerRef,
    private location: Location
  ) {
    const currentYear = parseInt(location.path().split('/')[3]); // default current year
    const currentMonth = parseInt(location.path().split('/')[4]) - 1; // default current month
    const currentDay = parseInt(location.path().split('/')[5]); //default current day

    super(currentYear, currentMonth, currentDay);
  }

  public override next(): void {
    super.next();
    this.updateUrl();
  }

  public override previous(): void {
    super.previous();
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

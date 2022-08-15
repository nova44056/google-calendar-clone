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
import { Calendar } from '../../class';
import { monthCalendarAnimation } from './animation';

type CalendarAnimation = 'next' | 'prev' | 'next_next' | 'prev_prev' | 'void';

@Component({
  selector: 'app-month-calendar',
  templateUrl: './month-calendar.component.html',
  styleUrls: ['./month-calendar.component.scss'],
  animations: [monthCalendarAnimation],
})
export class MonthCalendarComponent extends Calendar implements AfterViewInit {
  @ViewChild('portalContent') portalContent: TemplateRef<unknown>;
  protected animationState: CalendarAnimation = 'void';
  constructor(
    private portalBridgeService: PortalBridgeService,
    private _viewContainerRef: ViewContainerRef,
    private location: Location
  ) {
    const currentYear = parseInt(location.path().split('/')[3]); // default current year
    const currentMonth = parseInt(location.path().split('/')[4]) - 1; // default current month
    const currentDay = parseInt(location.path().split('/')[5]); //default current day

    super(currentYear, currentMonth, currentDay, location);
  }

  public override next(): void {
    super.next();
    this.updateUrl();
    this.toggleAnimationStateForNext();
  }

  public override previous(): void {
    super.previous();
    this.updateUrl();
    this.toggleAnimationStateForPrevious();
  }

  private toggleAnimationStateForNext(): void {
    switch (this.animationState) {
      case 'void':
      case 'prev':
      case 'prev_prev':
      case 'next_next':
        this.setAnimationState('next');
        break;
      case 'next':
        this.setAnimationState('next_next');
        break;
    }
  }

  private toggleAnimationStateForPrevious(): void {
    switch (this.animationState) {
      case 'void':
      case 'next':
      case 'next_next':
      case 'prev_prev':
        this.setAnimationState('prev');
        break;
      case 'prev':
        this.setAnimationState('prev_prev');
        break;
    }
  }

  private setAnimationState(state: CalendarAnimation): void {
    this.animationState = state;
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

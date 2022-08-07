import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthCalendarComponent } from './components/month-calendar/month-calendar.component';
import { MiniCalendarComponent } from './components/mini-calendar/mini-calendar.component';
import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [MonthCalendarComponent, MiniCalendarComponent],
  imports: [CommonModule, PortalModule, MatIconModule],
  exports: [MonthCalendarComponent, MiniCalendarComponent],
})
export class CalendarModule {}

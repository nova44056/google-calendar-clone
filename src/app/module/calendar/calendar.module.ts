import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthCalendarComponent } from './components/month-calendar/month-calendar.component';
import { MiniCalendarComponent } from './components/mini-calendar/mini-calendar.component';
import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';
import { CreateDetailComponent } from 'src/app/components/modal/create-detail/create-detail.component';
import { TextFieldComponent } from 'src/app/components/input/text-field/text-field.component';
import { CreateTaskComponent } from 'src/app/components/partial_form/create-detail/create-task/create-task.component';
import { CreateEventComponent } from 'src/app/components/partial_form/create-detail/create-event/create-event.component';
import { CreateReminderComponent } from 'src/app/components/partial_form/create-detail/create-reminder/create-reminder.component';
import { CalendarCellComponent } from './components/month-calendar/calendar-cell/calendar-cell.component';

@NgModule({
  declarations: [
    MonthCalendarComponent,
    MiniCalendarComponent,
    CreateDetailComponent,
    TextFieldComponent,
    CreateEventComponent,
    CreateTaskComponent,
    CreateReminderComponent,
    CalendarCellComponent,
  ],
  imports: [CommonModule, PortalModule, MatIconModule],
  exports: [MonthCalendarComponent, MiniCalendarComponent],
})
export class CalendarModule {}

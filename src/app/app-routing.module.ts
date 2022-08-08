import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthCalendarComponent } from './module/calendar/components/month-calendar/month-calendar.component';

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

const routes: Routes = [
  {
    path: '',
    redirectTo: `calendar/month/${currentYear}/${currentMonth}/${currentDay}`,
    pathMatch: 'full',
  },
  {
    path: `calendar`,
    loadChildren: () =>
      import('./module/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

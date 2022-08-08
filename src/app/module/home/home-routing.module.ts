import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonthCalendarComponent } from '../calendar/components/month-calendar/month-calendar.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: ':type/:year/:month/:day',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavComponent } from 'src/app/component/nav/nav.component';
import { LogoComponent } from 'src/app/component/logo/logo.component';
import { MainMenuComponent } from 'src/app/component/btn/main-menu/main-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { DrawerComponent } from 'src/app/component/drawer/drawer.component';
import { CalendarModule } from '../calendar/calendar.module';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    LogoComponent,
    MainMenuComponent,
    DrawerComponent,
  ],
  imports: [CommonModule, MatIconModule, CalendarModule],
  exports: [HomeComponent],
})
export class HomeModule {}

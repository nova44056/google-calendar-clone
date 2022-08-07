import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavComponent } from 'src/app/components/nav/nav.component';
import { LogoComponent } from 'src/app/components/logo/logo.component';
import { MainMenuComponent } from 'src/app/components/btn/main-menu/main-menu.component';
import { MatIconModule } from '@angular/material/icon';
import { CalendarModule } from '../calendar/calendar.module';
import { SidebarComponent } from 'src/app/components/sidebar/sidebar.component';
import { PortalModule } from '@angular/cdk/portal';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    LogoComponent,
    MainMenuComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, MatIconModule, CalendarModule, PortalModule],
  exports: [HomeComponent],
})
export class HomeModule {}

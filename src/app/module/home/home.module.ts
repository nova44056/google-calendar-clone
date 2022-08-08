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
import { HomeRoutingModule } from './home-routing.module';
import { SecondaryBtnComponent } from 'src/app/components/btn/secondary-btn/secondary-btn.component';
import { SecondaryDropdownBtnComponent } from 'src/app/components/btn/secondary-dropdown-btn/secondary-dropdown-btn.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    LogoComponent,
    MainMenuComponent,
    SidebarComponent,
    SecondaryBtnComponent,
    SecondaryDropdownBtnComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    CalendarModule,
    PortalModule,
    HomeRoutingModule,
  ],
  exports: [HomeComponent],
  bootstrap: [HomeComponent],
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarModule } from './module/calendar/calendar.module';
import { LogoComponent } from './component/logo/logo.component';

@NgModule({
  declarations: [AppComponent, LogoComponent],
  imports: [BrowserModule, AppRoutingModule, CalendarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

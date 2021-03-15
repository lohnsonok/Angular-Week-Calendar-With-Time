import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CalendarDayComponent } from './components/calendar/calendar-day/calendar-day.component';
import { CalendarEventComponent } from './components/calendar/calendar-event/calendar-event.component';
import { DayDatePipe } from './components/calendar/utils/pipes/date.pipe';
import { MonthDatePipe } from './components/calendar/utils/pipes/date.pipe';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarDayComponent,
    CalendarEventComponent,
    DayDatePipe,
    MonthDatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr" }],
  bootstrap: [AppComponent]
})
export class AppModule { }

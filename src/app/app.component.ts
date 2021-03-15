import { Component } from '@angular/core';
import { CalendarEvent } from './components/calendar/interfaces/calendar-event.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Simple Weeday Calendar Component';
  timesToExclude: any;

  constructor() {
    this.timesToExclude = [
      '2021-08-15T15:09:30-05:00',
      '2021-08-15T15:10:30-05:00',
      '2021-08-16T09:30:00-05:00',
    ];
  }
}

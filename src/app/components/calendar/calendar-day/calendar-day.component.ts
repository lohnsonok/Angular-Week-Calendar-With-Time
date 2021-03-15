import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../interfaces/calendar-event.interface';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {
  @Input() dayName: string;
  @Input() dayMonth: string;
  @Input() timesToExcludePerDay: any;

  quarterHours = ["00", "15", "30", "45"]
  times: any;


  constructor() {

  }

  ngOnInit() {
    this.times = [];
    for (var i = 0; i < 24; i++) {
      for (var j = 0; j < 4; j++) {
        this.times.push(i + ":" + this.quarterHours[j]);
      }
    }
  }

  openDialog(time) {
    console.log(time)
  }

}

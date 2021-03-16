import { Component, OnInit, Input } from '@angular/core';
import moment from 'moment';
import { CalendarEvent } from './interfaces/calendar-event.interface';
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input() timesToExclude: any;
  timesToExcludePerDay: any[] = Array.from({ length: 7 }, () => []);

  currentWeek = [];
  currentWeekActive = [];

  date = new Date();

  constructor() {
  }

  ngOnInit() {
    this.date.setDate(this.date.getDate() + 1)

    for (let i = 0; i < 7; i++) {
      this.increment(this.date, i)
    }

    this.currentWeekActive = this.getBusinessDays(this.currentWeek)

  }

  getBusinessDays(week) {
    let newWeek = [];

    for (let i = 0; i < week.length; i++) {
      if ((moment(week[i]).format('dddd') !== "Saturday") && (moment(week[i]).format('dddd') !== "Sunday")) {
        newWeek.push(week[i])
      };
    }
    return newWeek;
  }

  prevWeek(date: Date) {
    this.currentWeek = [];
    date.setDate(date.getDate() - 1)

    for (let i = 0; i < 7; i++) {
      this.decrement(date, i)
    }
    this.currentWeek.reverse();
    this.currentWeekActive = this.getBusinessDays(this.currentWeek)
  }

  nextWeek(date: Date) {
    this.currentWeek = [];
    for (let i = 0; i < 7; i++) {
      this.increment(date, i)
    }
    this.currentWeekActive = this.getBusinessDays(this.currentWeek)
  }

  increment(date: Date, i) {
    date = new Date(date)
    date.setDate(date.getDate() + i)
    this.currentWeek.push(date);
  }

  decrement(date: Date, i) {
    date = new Date(date)
    date.setDate(date.getDate() - i)
    this.currentWeek.push(date);
  }

}

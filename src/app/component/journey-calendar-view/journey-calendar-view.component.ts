import { Component } from '@angular/core';
import {CalendarOptions, EventInput, EventSourceInput} from "@fullcalendar/core";
import rrulePlugin from "@fullcalendar/rrule";
import multiMonthPlugin from '@fullcalendar/multimonth'
import dayGridPlugin from "@fullcalendar/daygrid";
import {FullCalendarModule} from "@fullcalendar/angular";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-journey-calendar-view',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './journey-calendar-view.component.html',
  styleUrl: './journey-calendar-view.component.scss'
})
export class JourneyCalendarViewComponent {

  defaultEventProperties : EventInput = {
    rrule: {
      freq: 'yearly',
    }
  };

  journeys: EventSourceInput = [
    {
      id: '550e8400-e29b-41d4-a716-446655440000',
      title: 'New Journey which has length maximum of 50 characters',
      url: 'https://www.google.com',
      start: '2025-04-17',
      ...this.defaultEventProperties
    },
    {
      id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      title: 'Another Journey which has length maximum of 50 characters',
      url: 'https://www.google.com',
      start: '2025-04-17',
      ...this.defaultEventProperties
    }
  ];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      right: 'today prev,next',
      center: 'title',
      left: 'multiMonthYear,dayGridMonth,dayGridWeek,dayGridDay'
    },
    height: 'auto',
    initialView: 'multiMonthYear',
    plugins: [rrulePlugin, multiMonthPlugin, dayGridPlugin],
    editable: false,
    eventDisplay: 'block',
    events: this.journeys,
    defaultAllDay: true,
    navLinks: true,
    navLinkDayClick: function (date, jsEvent) {
      console.log('day', date.toISOString());
    },
    eventDidMount: info => {
      info.el.setAttribute('title', info.event.title);
    }
  };
}

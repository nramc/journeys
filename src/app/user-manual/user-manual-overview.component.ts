import {Component} from '@angular/core';
import {CalendarOptions, EventInput, EventSourceInput} from "@fullcalendar/core";
import {CommonModule} from "@angular/common";
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';
import rrulePlugin from '@fullcalendar/rrule'


@Component({
  selector: 'app-user-manual-overview',
  imports: [CommonModule, FullCalendarModule],
  template: '<full-calendar [options]="calendarOptions"></full-calendar>',
  styles: []
})
export class UserManualOverviewComponent {
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
    }
  ];
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      right: 'today prev,next',
      center: 'title',
      left: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    height: 'auto',
    initialView: 'dayGridMonth',
    plugins: [rrulePlugin, dayGridPlugin],
    editable: false,
    eventDisplay: 'block',
    events: this.journeys,
    defaultAllDay: true,
    navLinks: true,
    navLinkDayClick: function (date, jsEvent) {
      console.log('day', date.toISOString());
    },
  };

  // todo: Date & Time	https://fullcalendar.io/docs

}

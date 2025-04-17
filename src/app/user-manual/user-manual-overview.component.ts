import {Component} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import {CommonModule} from "@angular/common";
import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-user-manual-overview',
  imports: [CommonModule, FullCalendarModule],
  template: '<full-calendar [options]="calendarOptions"></full-calendar>',
  styles: []
})
export class UserManualOverviewComponent {
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      right: 'today prev,next',
      center: 'title',
      left: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    height: 'auto',
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    editable: false,
    events:[],
    defaultAllDay:true,
    navLinks: true,
    navLinkDayClick: function(date, jsEvent) {
      console.log('day', date.toISOString());
    }
  };

  // todo: Date & Time	https://fullcalendar.io/docs

}

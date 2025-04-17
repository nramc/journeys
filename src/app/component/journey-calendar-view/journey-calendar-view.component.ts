import {Component, inject} from '@angular/core';
import {CalendarOptions, EventInput, EventSourceInput} from "@fullcalendar/core";
import rrulePlugin from "@fullcalendar/rrule";
import multiMonthPlugin from '@fullcalendar/multimonth'
import dayGridPlugin from "@fullcalendar/daygrid";
import {FullCalendarModule} from "@fullcalendar/angular";
import {CommonModule} from "@angular/common";
import {JourneyService} from "../../service/journey/journey.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {FeatureCollection} from "geojson";
import {map} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-journey-calendar-view',
  imports: [CommonModule, FullCalendarModule],
  template: `
    <full-calendar [options]="calendarOptions" [events]="journeys()"></full-calendar>`,
  styles: []
})
export class JourneyCalendarViewComponent {
  private readonly journeyService = inject(JourneyService);
  private readonly router = inject(Router);
  defaultEventProperties: EventInput = {
    rrule: {
      freq: 'yearly',
    }
  };

  journeys = toSignal(this.journeyService.getAllJourneysAsGeoJson()
    .pipe(map(data => this.toEventData(data))), {initialValue: [] as EventSourceInput});

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      right: 'today prev,next',
      center: 'title',
      left: 'multiMonthYear,dayGridMonth,dayGridWeek,dayGridDay'
    },
    height: 'auto',
    initialView: 'dayGridMonth',
    plugins: [rrulePlugin, multiMonthPlugin, dayGridPlugin],
    editable: false,
    eventDisplay: 'block',
    events: this.journeys(),
    defaultAllDay: true,
    navLinks: true,
    navLinkDayClick: function (date) {
      console.log('day', date.toISOString());
    },
    eventDidMount: info => {
      info.el.setAttribute('title', info.event.title);
    },
    eventClick: info => {
      this.router.navigate(['/journey', info.event.id, 'view']).then(console.log);
    }
  };

  private toEventData(featureCollection: FeatureCollection) {
    return featureCollection?.features.map(feature => ({
      id: feature.id,
      title: feature.properties?.['name'],
      start: feature.properties?.['journeyDate'],
      ...this.defaultEventProperties
    })) as EventSourceInput;
  }

}

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

@Component({
  selector: 'app-journey-calendar-view',
  imports: [CommonModule, FullCalendarModule],
  templateUrl: './journey-calendar-view.component.html',
  styleUrl: './journey-calendar-view.component.scss'
})
export class JourneyCalendarViewComponent {
  private readonly journeyService = inject(JourneyService);
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
    events: [],
    defaultAllDay: true,
    navLinks: true,
    navLinkDayClick: function (date, jsEvent) {
      console.log('day', date.toISOString());
    },
    eventDidMount: info => {
      info.el.setAttribute('title', info.event.title);
    }
  };

  private toEventData(featureCollection: FeatureCollection) {
    return featureCollection?.features.map(feature => ({
      id: feature.properties?.['id'],
      title: feature.properties?.['name'],
      url: feature.properties?.['thumbnail'],
      start: feature.properties?.['journeyDate'],
      ...this.defaultEventProperties
    })) as EventSourceInput;
  }

}

import {Component, inject} from '@angular/core';
import {CalendarOptions, EventSourceInput, FullCalendarModule} from "@fullcalendar/angular";
import monarchThemePlugin from '@fullcalendar/angular/themes/monarch';
import rrulePlugin from "@fullcalendar/rrule";
import multiMonthPlugin from '@fullcalendar/angular/multimonth'
import dayGridPlugin from "@fullcalendar/angular/daygrid";

import {JourneyService} from "../../service/journey/journey.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {FeatureCollection} from "geojson";
import {map} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-journey-calendar-view',
    imports: [FullCalendarModule],
    template: `
        <div class="journey-calendar">
            <full-calendar [options]="calendarOptions" [events]="journeys()"></full-calendar>
        </div>`,
    styles: []
})
export class JourneyCalendarViewComponent {
    private readonly journeyService = inject(JourneyService);
    private readonly router = inject(Router);

    journeys = toSignal(this.journeyService.getAllJourneysAsGeoJson()
        .pipe(map(data => this.toEventData(data))), {initialValue: [] as EventSourceInput});

    calendarOptions: CalendarOptions = {
        headerToolbar: {
            right: 'today prev,next',
            center: 'title',
            left: 'multiMonthYear,dayGridMonth,dayGridWeek,dayGridDay'
        },
        buttons: {
            today: {text: 'Today'},
            dayGridMonth: {text: 'Month'},
            dayGridWeek: {text: 'Week'},
            dayGridDay: {text: 'Day'},
            multiMonthYear: {text: 'Year'}
        },
        height: 'auto',
        initialView: 'dayGridMonth',
        firstDay: 1,
        fixedWeekCount: false,
        dayMaxEvents: 3,
        moreLinkText: count => `+${count} more`,
        dayHeaderFormat: {weekday: 'short'},
        plugins: [monarchThemePlugin, rrulePlugin, multiMonthPlugin, dayGridPlugin],
        editable: false,
        eventDisplay: 'block',
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
            extendedProps: feature.properties,
            allDay: true,
            rrule: {
                freq: 'yearly',
                dtstart: feature.properties?.['journeyDate']
            }
        })) as EventSourceInput;
    }

}

import {DatePipe} from '@angular/common';
import {Component, computed, input, OnDestroy, OutputRefSubscription, signal, ViewChild, inject} from '@angular/core';
import {Overlay, OverlayModule, OverlayRef} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {CalendarOptions, EventSourceInput, FullCalendarComponent, FullCalendarModule} from "@fullcalendar/angular";
import monarchThemePlugin from '@fullcalendar/angular/themes/monarch';
import rrulePlugin from "@fullcalendar/rrule";
import multiMonthPlugin from '@fullcalendar/angular/multimonth'
import dayGridPlugin from "@fullcalendar/angular/daygrid";
import interactionPlugin from '@fullcalendar/angular/interaction';

import {Feature, FeatureCollection} from "geojson";
import {RouterLink} from "@angular/router";
import {DEFAULT_CATEGORY, DEFAULT_THUMBNAIL} from '../../model/core/journey.model';
import {JourneyData} from '../journey-card-view/journey.data';
import {JourneyCalendarEventPopupComponent} from './journey-calendar-event-popup.component';

@Component({
    selector: 'app-journey-calendar-view',
    imports: [DatePipe, FullCalendarModule, OverlayModule, RouterLink],
    template: `
        <div class="journey-calendar">
            <div class="journey-calendar__mobile-view-picker">
                <label for="journey-calendar-view">Calendar view</label>
                <select id="journey-calendar-view" [value]="activeView()" (change)="changeView($event)">
                    <option value="dayGridMonth">Month</option>
                    <option value="dayGridWeek">Week</option>
                    <option value="dayGridDay">Day</option>
                    <option value="multiMonthYear">Year</option>
                </select>
            </div>
            <full-calendar #calendar [options]="calendarOptions" [events]="events()">
                <ng-template #eventContent let-arg>
                    <span class="journey-calendar__event-name">{{ arg.event.title }}</span>
                    @if (arg.event.extendedProps['locationLabel']) {
                            <span class="journey-calendar__event-location"><span aria-hidden="true">⌖</span> {{ arg.event.extendedProps['locationLabel'] }}</span>
                    }
                </ng-template>
            </full-calendar>

            @if (selectedDay(); as date) {
                <section class="journey-calendar__day-results" aria-label="Journeys on selected date" aria-live="polite">
                    <div class="journey-calendar__day-heading">
                        <h3>Journeys on {{ date | date:'fullDate' }}</h3>
                        <button type="button" class="journey-calendar__dismiss" (click)="clearSelection()">Clear</button>
                    </div>
                    @if (journeysOnSelectedDay().length) {
                        <ul>
                            @for (dayJourney of journeysOnSelectedDay(); track dayJourney.id) {
                                <li>
                                    <a [routerLink]="['/journey', dayJourney.id, 'view']">
                                        <strong>{{ dayJourney.name }}</strong>
                                        @if (dayJourney.locationLabel) {
                                            <span class="journey-calendar__day-location">⌖ {{ dayJourney.locationLabel }}</span>
                                        } @else if (dayJourney.title) {
                                            <span>{{ dayJourney.title }}</span>
                                        }
                                    </a>
                                </li>
                            }
                        </ul>
                    } @else {
                        <p>No journeys are recorded for this calendar date.</p>
                    }
                </section>
            }
        </div>`,
    styles: []
})
export class JourneyCalendarViewComponent implements OnDestroy {
    private readonly overlay = inject(Overlay);
    private overlayRef?: OverlayRef;
    private popupCloseSubscription?: OutputRefSubscription;
    private backdropSubscription?: { unsubscribe(): void };
    private keydownSubscription?: { unsubscribe(): void };

    @ViewChild('calendar') private readonly calendar?: FullCalendarComponent;

    readonly journeys = input.required<FeatureCollection>();
    readonly events = computed<EventSourceInput>(() => this.toEventData(this.journeys()));
    readonly selectedDay = signal<Date | null>(null);
    readonly activeView = signal('dayGridMonth');
    readonly journeysOnSelectedDay = computed(() => {
        const selectedDay = this.selectedDay();
        if (!selectedDay) {
            return [];
        }

        const selectedMonthDay = this.monthDay(selectedDay.getMonth() + 1, selectedDay.getDate());
        return this.journeys().features
            .filter(feature => this.monthDayFromJourney(feature) === selectedMonthDay)
            .map(feature => ({
                ...this.toJourneyData(feature),
                locationLabel: this.locationLabelFromFeature(feature)
            }))
            .sort((first, second) => first.name.localeCompare(second.name));
    });

    readonly calendarOptions: CalendarOptions = {
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
            multiMonthYear: {text: 'Year'},
        },
        height: 'auto',
        initialView: 'dayGridMonth',
        firstDay: 1,
        fixedWeekCount: false,
        dayMaxEvents: 3,
        moreLinkText: count => `+${count} more`,
        dayHeaderFormat: {weekday: 'short'},
        plugins: [monarchThemePlugin, rrulePlugin, multiMonthPlugin, dayGridPlugin, interactionPlugin],
        editable: false,
        eventDisplay: 'block',
        navLinks: true,
        datesSet: info => this.activeView.set(info.view.type),
        dateClick: info => this.selectDay(info.date),
        navLinkDayClick: date => this.selectDay(date),
        eventDidMount: info => {
            const location = info.event.extendedProps['locationLabel'];
            const context = [info.event.title, location].filter(Boolean).join(', ');
            info.el.setAttribute('title', context);
            info.el.setAttribute('aria-label', context);
        },
        eventClick: info => {
            this.selectedDay.set(null);
            this.openJourneyPopup(info.el, info.event.extendedProps['journey'] as JourneyData);
        }
    };

    changeView(event: Event) {
        const view = (event.target as HTMLSelectElement).value;
        this.activeView.set(view);
        this.calendar?.getApi().changeView(view);
    }

    selectDay(date: Date) {
        this.closeJourneyPopup();
        this.selectedDay.set(date);
    }

    clearSelection() {
        this.closeJourneyPopup();
        this.selectedDay.set(null);
    }

    ngOnDestroy() {
        this.closeJourneyPopup();
    }

    private openJourneyPopup(origin: HTMLElement, journey: JourneyData) {
        this.closeJourneyPopup();
        this.overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position()
                .flexibleConnectedTo(origin)
                .withPositions([
                    {originX: 'center', originY: 'top', overlayX: 'center', overlayY: 'bottom', offsetY: -8},
                    {originX: 'center', originY: 'bottom', overlayX: 'center', overlayY: 'top', offsetY: 8},
                    {originX: 'start', originY: 'center', overlayX: 'end', overlayY: 'center', offsetX: -8},
                    {originX: 'end', originY: 'center', overlayX: 'start', overlayY: 'center', offsetX: 8}
                ])
                .withFlexibleDimensions(true)
                .withPush(true)
                .withViewportMargin(8),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            hasBackdrop: true,
            backdropClass: 'cdk-overlay-transparent-backdrop'
        });

        const popup = this.overlayRef.attach(new ComponentPortal(JourneyCalendarEventPopupComponent));
        popup.setInput('journey', journey);
        this.popupCloseSubscription = popup.instance.closed.subscribe(() => this.closeJourneyPopup());
        this.backdropSubscription = this.overlayRef.backdropClick().subscribe(() => this.closeJourneyPopup());
        this.keydownSubscription = this.overlayRef.keydownEvents().subscribe(event => {
            if (event.key === 'Escape') {
                this.closeJourneyPopup();
            }
        });
    }

    private closeJourneyPopup() {
        this.popupCloseSubscription?.unsubscribe();
        this.backdropSubscription?.unsubscribe();
        this.keydownSubscription?.unsubscribe();
        this.overlayRef?.dispose();
        this.popupCloseSubscription = undefined;
        this.backdropSubscription = undefined;
        this.keydownSubscription = undefined;
        this.overlayRef = undefined;
    }

    private toEventData(featureCollection: FeatureCollection): EventSourceInput {
        return featureCollection.features
            .filter(feature => feature.id !== undefined && this.monthDayFromJourney(feature) !== null)
            .map(feature => {
                const journey = this.toJourneyData(feature);
                const locationLabel = this.locationLabelFromFeature(feature);

                return {
                    id: journey.id,
                    title: journey.name,
                    extendedProps: {journey, locationLabel},
                    allDay: true,
                    rrule: {
                        freq: 'yearly',
                        dtstart: journey.journeyDate
                    }
                };
            });
    }

    private toJourneyData(feature: Feature): JourneyData {
        const properties = feature.properties ?? {};
        const tags = Array.isArray(properties['tags']) ? properties['tags'] : [];
        return new JourneyData(
            String(feature.id ?? ''),
            String(properties['name'] ?? 'Untitled journey'),
            String(properties['title'] ?? properties['city'] ?? properties['country'] ?? ''),
            String(properties['category'] ?? DEFAULT_CATEGORY),
            String(properties['journeyDate'] ?? ''),
            tags,
            String(properties['thumbnail'] ?? DEFAULT_THUMBNAIL)
        );
    }

    private monthDayFromJourney(feature: Feature): string | null {
        const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(feature.properties?.['journeyDate'] ?? ''));
        return match ? `${match[2]}-${match[3]}` : null;
    }

    private locationLabelFromFeature(feature: Feature): string {
        const properties = feature.properties ?? {};
        return [properties['city'], properties['country']].filter(Boolean).join(', ');
    }

    private monthDay(month: number, day: number): string {
        return `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    }

}

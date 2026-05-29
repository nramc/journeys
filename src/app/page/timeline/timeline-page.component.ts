import {ChangeDetectionStrategy, Component, computed, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {TimelineStoryComponent} from '../../component/timeline-story/timeline-story.component';
import {TimelineV2Response} from '../../component/timeline/timeline-data.model';
import {Journey} from '../../model/core/journey.model';
import {TimelineService} from '../../service/timeline/timeline.service';
import {TIMELINE_PAGE_INFO} from '../../model/page.info.model';
import {PageHeaderComponent} from '../../component/page-header/page-header.component';

export type JourniversaryDirection = 'upcoming' | 'past';

export interface TimeRangeOption {
  value: number;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-timeline-page',
  imports: [
    TimelineStoryComponent,
    PageHeaderComponent,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatDatepickerModule
  ],
  templateUrl: './timeline-page.component.html',
  styleUrl: './timeline-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelinePageComponent implements OnInit {
  protected readonly TIMELINE_PAGE_INFO = TIMELINE_PAGE_INFO;

  private readonly timelineService = inject(TimelineService);
  private readonly activatedRoute = inject(ActivatedRoute);

  timelineResponse = signal<TimelineV2Response | undefined>(undefined);
  reliveMode = signal<boolean>(false);
  /** Whether to auto-open relive mode after data loads (from ?autoplay=true query param) */
  private readonly autoplay = signal<boolean>(false);

  entries = computed<Journey[]>(() =>
    [...(this.timelineResponse()?.journeys ?? [])].sort((a, b) =>
      new Date(a.journeyDate).getTime() - new Date(b.journeyDate).getTime()
    )
  );
  heading = computed<string>(() => this.timelineResponse()?.heading ?? '');
  resultCount = computed<number>(() => this.entries().length);
  loading = signal<boolean>(false);

  /** Track which filter is active for UI highlighting */
  activeFilter = signal<string>('upcoming');

  /** Direction: upcoming or past */
  direction = signal<JourniversaryDirection>('upcoming');

  /** Currently selected time range in days (for upcoming) */
  selectedRange = signal<number>(7);

  /** Date range for past journeys */
  pastFromDate = signal<Date | null>(new Date(new Date().getFullYear(), 0, 1));
  pastToDate = signal<Date | null>(new Date());

  /** Max date for the date picker (today) */
  readonly today = new Date();

  readonly upcomingOptions: TimeRangeOption[] = [
    {value: 1, label: 'Tomorrow', icon: 'wb_sunny'},
    {value: 7, label: '1 Week', icon: 'date_range'},
    {value: 14, label: '2 Weeks', icon: 'date_range'},
    {value: 30, label: '1 Month', icon: 'calendar_month'}
  ];

  ngOnInit(): void {
    const journeyId = this.activatedRoute.snapshot.queryParams['id'];
    const city = this.activatedRoute.snapshot.queryParams['city'];
    const country = this.activatedRoute.snapshot.queryParams['country'];
    const year = this.activatedRoute.snapshot.queryParams['year'];
    const category = this.activatedRoute.snapshot.queryParams['category'];
    const autoplay = this.activatedRoute.snapshot.queryParams['autoplay'] === 'true';

    if (autoplay) {
      this.autoplay.set(true);
    }

    if (journeyId) {
      this.activeFilter.set('journey');
      this.getDataForJourney(journeyId);
    } else if (city) {
      this.activeFilter.set('city');
      this.getDataForCity(city);
    } else if (country) {
      this.activeFilter.set('country');
      this.getDataForCountry(country);
    } else if (year) {
      this.activeFilter.set('year');
      this.getDataForYear(year);
    } else if (category) {
      this.activeFilter.set('category');
      this.getDataForCategory(category);
    } else {
      this.activeFilter.set('upcoming');
      this.fetchJourniversaries();
    }
  }

  private onDataLoaded(data: TimelineV2Response) {
    this.timelineResponse.set(data);
    // Auto-open relive if autoplay was requested via query param
    if (this.autoplay()) {
      this.autoplay.set(false);
      // Small delay to let the view render before opening relive
      setTimeout(() => this.reliveMode.set(true), 100);
    }
  }

  onDirectionChange(dir: JourniversaryDirection) {
    this.direction.set(dir);
    if (dir === 'upcoming') {
      this.selectedRange.set(7);
      this.fetchJourniversaries();
    } else {
      // Default past range: Jan 1 of current year → today
      this.pastFromDate.set(new Date(new Date().getFullYear(), 0, 1));
      this.pastToDate.set(new Date());
      this.fetchPastJourneys();
    }
    this.activeFilter.set(dir);
  }

  onRangeSelected(days: number) {
    this.selectedRange.set(days);
    this.fetchJourniversaries();
  }

  onPastFromDateChange(date: Date | null) {
    this.pastFromDate.set(date);
    this.fetchPastJourneysIfValid();
  }

  onPastToDateChange(date: Date | null) {
    this.pastToDate.set(date);
    this.fetchPastJourneysIfValid();
  }

  fetchJourniversaries() {
    this.loading.set(true);
    this.timelineService.getTimelineV2ForUpcomingJourniversaries(this.selectedRange())
    .subscribe({
      next: data => {
        this.loading.set(false);
        this.onDataLoaded(data);
      },
      error: err => {
        this.loading.set(false);
        console.error(err);
      }
    });
  }

  /** Auto-fetch past journeys only when both dates form a valid range */
  private fetchPastJourneysIfValid() {
    const from = this.pastFromDate();
    const to = this.pastToDate();
    if (from && to && from <= to) {
      this.fetchPastJourneys();
    }
  }

  fetchPastJourneys() {
    const from = this.pastFromDate();
    const to = this.pastToDate();
    if (!from || !to) return;

    this.loading.set(true);
    const fromDate = this.toISODate(from);
    const toDate = this.toISODate(to);
    this.timelineService.getTimelineV2ForPastJourniversaries(fromDate, toDate)
    .subscribe({
      next: data => {
        this.loading.set(false);
        this.onDataLoaded(data);
      },
      error: err => {
        this.loading.set(false);
        console.error(err);
      }
    });
  }

  /** Format a Date to YYYY-MM-DD ISO string */
  private toISODate(date: Date): string {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
  }

  getDataForJourney(journeyId: string) {
    this.timelineService.getTimelineV2ForJourney(journeyId)
    .subscribe({
      next: data => this.onDataLoaded(data),
      error: err => console.error(err)
    });
  }

  getDataForCity(city: string) {
    this.timelineService.getTimelineV2ForCity(city)
    .subscribe({
      next: data => this.onDataLoaded(data),
      error: err => console.error(err)
    });
  }

  getDataForCountry(country: string) {
    this.timelineService.getTimelineV2ForCountry(country)
    .subscribe({
      next: data => this.onDataLoaded(data),
      error: err => console.error(err)
    });
  }

  getDataForYear(year: string) {
    this.timelineService.getTimelineV2ForYear(year)
    .subscribe({
      next: data => this.onDataLoaded(data),
      error: err => console.error(err)
    });
  }

  getDataForCategory(category: string) {
    this.timelineService.getTimelineV2ForCategory(category)
    .subscribe({
      next: data => this.onDataLoaded(data),
      error: err => console.error(err)
    });
  }
}

import {ChangeDetectionStrategy, Component, computed, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatChipsModule} from '@angular/material/chips';
import {TimelineStoryComponent} from '../../component/timeline-story/timeline-story.component';
import {TimelineV2Response} from '../../component/timeline/timeline-data.model';
import {Journey} from '../../model/core/journey.model';
import {TimelineService} from '../../service/timeline/timeline.service';
import {TIMELINE_PAGE_INFO} from '../../model/page.info.model';
import {PageHeaderComponent} from '../../component/page-header/page-header.component';

@Component({
  selector: 'app-timeline-page',
  imports: [
    TimelineStoryComponent,
    PageHeaderComponent,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule
  ],
  templateUrl: './timeline-page.component.html',
  styleUrl: './timeline-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimelinePageComponent implements OnInit {
  protected readonly TIMELINE_PAGE_INFO = TIMELINE_PAGE_INFO;

  private readonly timelineService = inject(TimelineService);
  private readonly activatedRoute = inject(ActivatedRoute);

  numberOfDaysJourniversaries = signal<number>(7);
  timelineResponse = signal<TimelineV2Response | undefined>(undefined);
  reliveMode = signal<boolean>(false);

  entries = computed<Journey[]>(() => this.timelineResponse()?.journeys ?? []);
  heading = computed<string>(() => this.timelineResponse()?.heading ?? '');

  /** Track which filter is active for UI highlighting */
  activeFilter = signal<string>('upcoming');

  readonly journiversaryOptions = [
    {value: 1, label: 'Tomorrow'},
    {value: 7, label: 'Next One Week'},
    {value: 14, label: 'Next Two Weeks'},
    {value: 21, label: 'Next Three Weeks'},
    {value: 30, label: 'Next One Month'},
    {value: 60, label: 'Next Two Months'},
    {value: 90, label: 'Next Three Months'}
  ];

  ngOnInit(): void {
    const journeyId = this.activatedRoute.snapshot.queryParams['id'];
    const city = this.activatedRoute.snapshot.queryParams['city'];
    const country = this.activatedRoute.snapshot.queryParams['country'];
    const year = this.activatedRoute.snapshot.queryParams['year'];
    const category = this.activatedRoute.snapshot.queryParams['category'];

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
      this.getDataForUpcomingJourniversaries();
    }
  }

  getDataForJourney(journeyId: string) {
    this.timelineService.getTimelineV2ForJourney(journeyId)
    .subscribe({
      next: data => this.timelineResponse.set(data),
      error: err => console.error(err)
    });
  }

  getDataForCity(city: string) {
    this.timelineService.getTimelineV2ForCity(city)
    .subscribe({
      next: data => this.timelineResponse.set(data),
      error: err => console.error(err)
    });
  }

  getDataForCountry(country: string) {
    this.timelineService.getTimelineV2ForCountry(country)
    .subscribe({
      next: data => this.timelineResponse.set(data),
      error: err => console.error(err)
    });
  }

  getDataForYear(year: string) {
    this.timelineService.getTimelineV2ForYear(year)
    .subscribe({
      next: data => this.timelineResponse.set(data),
      error: err => console.error(err)
    });
  }

  getDataForCategory(category: string) {
    this.timelineService.getTimelineV2ForCategory(category)
    .subscribe({
      next: data => this.timelineResponse.set(data),
      error: err => console.error(err)
    });
  }

  getDataForUpcomingJourniversaries() {
    this.activeFilter.set('upcoming');
    this.timelineService.getTimelineV2ForUpcomingJourniversaries(this.numberOfDaysJourniversaries())
    .subscribe({
      next: data => this.timelineResponse.set(data),
      error: err => console.error(err)
    });
  }

  openRelive() {
    this.reliveMode.set(true);
  }
}

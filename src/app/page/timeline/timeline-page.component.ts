import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {TimelineComponent} from "../../component/timeline/timeline.component";
import {TimelineData} from "../../component/timeline/timeline-data.model";
import {TimelineService} from "../../service/timeline/timeline.service";
import {ActivatedRoute} from "@angular/router";
import {TIMELINE_PAGE_INFO} from "../../model/page.info.model";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-timeline-page',
  standalone: true,
  imports: [
    TimelineComponent,
    PageHeaderComponent,
    NgIf,
    FormsModule
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
  timelineData = signal<TimelineData | undefined>(undefined);


  ngOnInit(): void {
    const journeyId = this.activatedRoute.snapshot.queryParams['id'];
    const city = this.activatedRoute.snapshot.queryParams['city'];
    const country = this.activatedRoute.snapshot.queryParams['country'];
    const year = this.activatedRoute.snapshot.queryParams['year'];
    const category = this.activatedRoute.snapshot.queryParams['category'];

    if (journeyId) {
      this.getDataForJourney(journeyId);
    } else if (city) {
      this.getDataForCity(city);
    } else if (country) {
      this.getDataForCountry(country);
    } else if (year) {
      this.getDataForYear(year);
    } else if (category) {
      this.getDataForCategory(category);
    } else {
      this.getDataForUpcomingJourniversaries();
    }
  }

  getDataForJourney(journeyId: string) {
    this.timelineService.getTimelineForJourney(journeyId)
      .subscribe({
        next: data => this.timelineData.set(data),
        error: err => console.error(err)
      });
  }

  getDataForCity(city: string) {
    this.timelineService.getTimelineForCity(city)
      .subscribe({
        next: data => this.timelineData.set(data),
        error: err => console.error(err)
      });
  }

  getDataForCountry(country: string) {
    this.timelineService.getTimelineForCountry(country)
      .subscribe({
        next: data => this.timelineData.set(data),
        error: err => console.error(err)
      });
  }

  getDataForYear(year: string) {
    this.timelineService.getTimelineForYear(year)
      .subscribe({
        next: data => this.timelineData.set(data),
        error: err => console.error(err)
      });
  }

  getDataForCategory(category: string) {
    this.timelineService.getTimelineForCategory(category)
      .subscribe({
        next: data => this.timelineData.set(data),
        error: err => console.error(err)
      });
  }

  getDataForUpcomingJourniversaries() {
    this.timelineService.getTimelineForUpcomingJourniversaries(this.numberOfDaysJourniversaries())
      .subscribe({
        next: data => this.timelineData.set(data),
        error: err => console.error(err)
      });
  }


}

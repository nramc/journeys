import {Component, OnInit} from '@angular/core';
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
  styleUrl: './timeline-page.component.scss'
})
export class TimelinePageComponent implements OnInit {
  protected readonly TIMELINE_PAGE_INFO = TIMELINE_PAGE_INFO;
  timelineData: TimelineData | undefined;
  upcomingJourniversaries: boolean = false;
  numberOfDaysJourniversaries: number = 7;

  constructor(
    private timelineService: TimelineService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    let journeyId = this.activatedRoute.snapshot.queryParams['id'];
    let city = this.activatedRoute.snapshot.queryParams['city'];
    let country = this.activatedRoute.snapshot.queryParams['country'];
    let year = this.activatedRoute.snapshot.queryParams['year'];
    let category = this.activatedRoute.snapshot.queryParams['category'];

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
      this.upcomingJourniversaries = true;
      this.getDataForUpcomingJourniversaries();
    }
  }

  getDataForJourney(journeyId: string) {
    this.timelineService.getTimelineForJourney(journeyId)
      .subscribe({
        next: data => this.timelineData = data,
        error: err => console.error(err)
      });
  }

  getDataForCity(city: string) {
    this.timelineService.getTimelineForCity(city)
      .subscribe({
        next: data => this.timelineData = data,
        error: err => console.error(err)
      });
  }

  getDataForCountry(country: string) {
    this.timelineService.getTimelineForCountry(country)
      .subscribe({
        next: data => this.timelineData = data,
        error: err => console.error(err)
      });
  }

  getDataForYear(year: string) {
    this.timelineService.getTimelineForYear(year)
      .subscribe({
        next: data => this.timelineData = data,
        error: err => console.error(err)
      });
  }

  getDataForCategory(category: string) {
    this.timelineService.getTimelineForCategory(category)
      .subscribe({
        next: data => this.timelineData = data,
        error: err => console.error(err)
      });
  }

  getDataForUpcomingJourniversaries() {
    this.timelineService.getTimelineForUpcomingJourniversaries(this.numberOfDaysJourniversaries)
      .subscribe({
        next: data => this.timelineData = data,
        error: err => console.error(err)
      });
  }


}

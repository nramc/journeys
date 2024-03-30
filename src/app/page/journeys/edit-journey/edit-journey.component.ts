import {Component, OnInit} from '@angular/core';
import {Journey} from "../../../model/core/journey.model";
import {switchMap} from "rxjs";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {JourneyService} from "../../../service/journey/journey.service";

@Component({
  selector: 'app-edit-journey',
  templateUrl: './edit-journey.component.html',
  styleUrl: './edit-journey.component.scss'
})
export class EditJourneyComponent implements OnInit {
  journey: Journey = new Journey();

  constructor(
    private route: ActivatedRoute,
    private journeyService: JourneyService
  ) {
  }

  ngOnInit(): void {
    this.fetchJourney();
  }

  stepsEventHandler(event: any) {
    console.log('Event triggered:', event.type);
    this.fetchJourney();
  }

  fetchJourney() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => this.journeyService.getJourneyById(params.get('id')!))
    )
      .subscribe({
        next: data => this.journey = data,
        error: err => console.error(err)
      });
  }

  isBasicDataCollected(): boolean {
    return this.journey.id != '';
  }

  isGeoInfoCollected(): boolean {
    return this.journey.id != '';
  }

  isEventInfoCollected(): boolean {
    return this.journey.id != '';
  }

  isJourneyPublished(): boolean {
    return this.journey.id != '';
  }

}

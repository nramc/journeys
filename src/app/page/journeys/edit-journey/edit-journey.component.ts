import {Component, OnInit} from '@angular/core';
import {Journey} from "../../../model/core/journey.model";
import {switchMap} from "rxjs";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {JourneyService} from "../../../service/journey/journey.service";
import {MatStep, MatStepContent, MatStepLabel, MatStepper} from "@angular/material/stepper";
import {EditJourneyBasicDetailsComponent} from "./edit-journey-basic-details/edit-journey-basic-details.component";
import {EditJourneyGeoDetailsComponent} from "./edit-journey-geo-details/edit-journey-geo-details.component";
import {EditJourneyImagesDetailsComponent} from "./edit-journey-image-details/edit-journey-images-details.component";
import {EditJourneyVideosDetailsComponent} from "./edit-journey-video-details/edit-journey-videos-details.component";
import {
  EditJourneyPublishDetailsComponent
} from "./edit-journey-publish-details/edit-journey-publish-details.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-journey',
  templateUrl: './edit-journey.component.html',
  styleUrl: './edit-journey.component.scss',
  imports: [
    MatStepper,
    MatStep,
    EditJourneyBasicDetailsComponent,
    EditJourneyGeoDetailsComponent,
    EditJourneyImagesDetailsComponent,
    MatStepLabel,
    MatStepContent,
    EditJourneyVideosDetailsComponent,
    EditJourneyPublishDetailsComponent,
    NgIf
  ],
  standalone: true
})
export class EditJourneyComponent implements OnInit {
  journey!: Journey;

  constructor(
    private route: ActivatedRoute,
    private journeyService: JourneyService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.fetchJourney();
  }

  stepsEventHandler(event: any) {
    this.fetchJourney();
  }

  savedEventHandler(data: Journey) {
    this.journey = data;
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


  viewJourney(journey: Journey) {
    this.router.navigate(['/journey', journey.id, 'view']).then();
  }
}

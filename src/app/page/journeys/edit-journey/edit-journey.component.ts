import {ChangeDetectionStrategy, Component, inject, model, OnInit} from '@angular/core';
import {Journey} from "../../../model/core/journey.model";
import {ActivatedRoute, Router} from "@angular/router";
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
import {MatTooltip} from "@angular/material/tooltip";

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
    NgIf,
    MatTooltip
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly journeyService = inject(JourneyService);
  private readonly router = inject(Router);

  journey = model(new Journey());

  ngOnInit(): void {
    this.journeyService.getJourneyById(this.route.snapshot.params['id'])
      .subscribe(data => this.journey.set(data));
  }

  viewJourney(journey: Journey) {
    this.router.navigate(['/journey', journey.id, 'view']).then();
  }
}

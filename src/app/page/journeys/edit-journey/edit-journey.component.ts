import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {Journey} from "../../../model/core/journey.model";
import {ActivatedRoute, Router} from "@angular/router";
import {JourneyService} from "../../../service/journey/journey.service";
import {MatStep, MatStepContent, MatStepLabel, MatStepper} from "@angular/material/stepper";
import {EditJourneyGeoDetailsComponent} from "../commons/edit-journey-geo-details/edit-journey-geo-details.component";
import {EditJourneyImagesDetailsComponent} from "./edit-journey-image-details/edit-journey-images-details.component";
import {EditJourneyVideosDetailsComponent} from "./edit-journey-video-details/edit-journey-videos-details.component";
import {
  EditJourneyPublishDetailsComponent
} from "./edit-journey-publish-details/edit-journey-publish-details.component";
import {NgIf} from "@angular/common";
import {MatTooltip} from "@angular/material/tooltip";
import {OperationMode} from "../operation-mode";
import {
  EditJourneyMemoriesDetailsComponent
} from "../commons/edit-journey-memories-details/edit-journey-memories-details.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-edit-journey',
  templateUrl: './edit-journey.component.html',
  styles: [],
  imports: [
    MatStepper,
    MatStep,
    EditJourneyGeoDetailsComponent,
    EditJourneyImagesDetailsComponent,
    MatStepLabel,
    MatStepContent,
    EditJourneyVideosDetailsComponent,
    EditJourneyPublishDetailsComponent,
    NgIf,
    MatTooltip,
    EditJourneyMemoriesDetailsComponent,
    MatButtonModule,
    MatIconModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly journeyService = inject(JourneyService);
  private readonly router = inject(Router);

  journey = signal(new Journey());
  mode = signal(OperationMode.EDIT);

constructor() {
  if (this.router.getCurrentNavigation()?.extras.state) {
    this.mode.set(this.router.getCurrentNavigation()?.extras.state?.['mode'] as OperationMode ?? OperationMode.EDIT)
  }
}

  ngOnInit(): void {
    this.journeyService.getJourneyById(this.route.snapshot.params['id'])
      .subscribe(data => this.journey.set(data));
  }

  viewJourney(journey: Journey) {
    this.router.navigate(['/journey', journey.id, 'view']).then();
  }

}

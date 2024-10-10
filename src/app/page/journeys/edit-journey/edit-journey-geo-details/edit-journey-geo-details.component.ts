import {ChangeDetectionStrategy, Component, inject, input, OnInit, output, signal} from '@angular/core';
import {Journey, JourneyGeoDetails} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {FormsModule, NgForm} from "@angular/forms";
import {WorldMapComponent} from "../../../../component/world-map/world-map.component";
import {MatStepperNext} from "@angular/material/stepper";
import {JsonPipe, NgIf} from "@angular/common";
import {NotificationService} from "../../../../service/common/notification.service";

@Component({
  selector: 'app-edit-journey-geo-details',
  templateUrl: './edit-journey-geo-details.component.html',
  styleUrl: './edit-journey-geo-details.component.scss',
  imports: [
    FormsModule,
    WorldMapComponent,
    MatStepperNext,
    NgIf,
    JsonPipe
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyGeoDetailsComponent implements OnInit {
  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);

  journeyInitialData = input.required<Journey>({alias: 'journey'});
  journey = signal<Journey>(new Journey());
  savedEvent = output<Journey>({alias: "saved"});

  formGeoDetails = signal(new JourneyGeoDetails(undefined));
  geoJsonString = signal('');


  ngOnInit(): void {
    this.journey.set(this.journeyInitialData());
    this.formGeoDetails.set(this.journey().extendedDetails!.geoDetails ?? new JourneyGeoDetails(this.journey().location));
    this.geoJsonString.set(JSON.stringify(this.formGeoDetails().geoJson));
  }

  save(journeyForm: NgForm) {
    console.debug('submitted form:', journeyForm);
    this.journeyService.saveJourneyGeoDetails(this.journey(), this.formGeoDetails())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving geo data', err)
      });
  }

  onUpdateSuccess(result: Journey) {
    this.notificationService.showSuccess('Journey details saved successfully.');
    this.savedEvent.emit(result);
  }

  onError(errorMessage: string, err: any) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

  reloadMap() {
    if (this.geoJsonString()) {
      this.formGeoDetails.update(data => ({...data, geoJson: JSON.parse(this.geoJsonString())}));
    }
  }

}

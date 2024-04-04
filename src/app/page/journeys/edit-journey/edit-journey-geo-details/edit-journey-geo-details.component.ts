import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Journey, JourneyExtendedDetails, JourneyGeoDetails} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-journey-geo-details',
  templateUrl: './edit-journey-geo-details.component.html',
  styleUrl: './edit-journey-geo-details.component.scss'
})
export class EditJourneyGeoDetailsComponent implements OnInit {
  @Output("saved") savedEvent: EventEmitter<Journey> = new EventEmitter<Journey>();
  successMessage: string = '';
  errorMessage: string = '';

  @Input({required: true}) journey: Journey | undefined;

  geoJsonString: string = '';

  constructor(
    private journeyService: JourneyService
  ) {
  }

  ngOnInit(): void {
    this.setupDefaultGeoJson()
    this.geoJsonString = JSON.stringify(this.journey?.extendedDetails?.geoDetails?.geoJson);
  }

  setupDefaultGeoJson() {
    if (!this.journey!.extendedDetails) {
      this.journey!.extendedDetails = new JourneyExtendedDetails(new JourneyGeoDetails(this.journey?.location));
    } else if (!this.journey!.extendedDetails.geoDetails) {
      this.journey!.extendedDetails.geoDetails = new JourneyGeoDetails(this.journey?.location);
    } else if (!this.journey!.extendedDetails.geoDetails.geoJson) {
      this.journey!.extendedDetails.geoDetails.geoJson = this.journey?.location;
    }
  }

  save(journeyForm: NgForm) {
    this.journeyService.saveJourneyGeoDetails(this.journey!)
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving geo data', err)
      });
  }

  onUpdateSuccess(result: Journey) {
    this.successMessage = 'Journey saved successfully.';
    this.journey = result;
    this.savedEvent.emit(result);
  }

  onError(errorMessage: string, err: any) {
    this.errorMessage = errorMessage;
    console.error(err);
  }

  reloadMap() {
    this.journey!.extendedDetails!.geoDetails!.geoJson = JSON.parse(this.geoJsonString);
  }
}

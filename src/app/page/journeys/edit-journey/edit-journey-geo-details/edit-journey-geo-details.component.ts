import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Journey, JourneyGeoDetails} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {FormsModule, NgForm} from "@angular/forms";
import {FeedbackMessageComponent} from "../../../../component/feedback-message/feedback-message.component";
import {WorldMapComponent} from "../../../../component/world-map/world-map.component";
import {MatStepperNext} from "@angular/material/stepper";
import {JsonPipe, NgIf} from "@angular/common";
import {FeatureCollection, GeoJsonObject, GeometryCollection} from "geojson";

@Component({
  selector: 'app-edit-journey-geo-details',
  templateUrl: './edit-journey-geo-details.component.html',
  styleUrl: './edit-journey-geo-details.component.scss',
  imports: [
    FormsModule,
    FeedbackMessageComponent,
    WorldMapComponent,
    MatStepperNext,
    NgIf,
    JsonPipe
  ],
  standalone: true
})
export class EditJourneyGeoDetailsComponent implements OnInit {
  @Output("saved") savedEvent: EventEmitter<Journey> = new EventEmitter<Journey>();
  successMessage: string = '';
  errorMessage: string = '';

  @Input({required: true}) journey!: Journey;
  formGeoDetails: JourneyGeoDetails = new JourneyGeoDetails(undefined);
  geoJsonString: string = '';

  constructor(
    private journeyService: JourneyService
  ) {
  }

  ngOnInit(): void {
    if (this.journey.extendedDetails?.geoDetails) {
      this.formGeoDetails = this.journey.extendedDetails.geoDetails;
    } else {
      this.formGeoDetails = new JourneyGeoDetails(this.journey.location);
    }
    this.geoJsonString = JSON.stringify(this.formGeoDetails.geoJson);
  }

  save(journeyForm: NgForm) {
    console.debug('submitted form:', journeyForm);
    this.journeyService.saveJourneyGeoDetails(this.journey, this.formGeoDetails)
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
    if (this.geoJsonString) {
      this.formGeoDetails.geoJson = JSON.parse(this.geoJsonString);
    }
  }

  formatGeoJsonIfRequired() {
    if (this.geoJsonString) {
      let data = JSON.parse(this.geoJsonString) as GeoJsonObject;
      if (data.type == "FeatureCollection") {

        let geometryCollection: GeometryCollection = {
          type: "GeometryCollection",
          geometries: (data as FeatureCollection).features.map(f => f.geometry)
        };

        this.geoJsonString = JSON.stringify(geometryCollection);
        this.reloadMap();
      }
    }
  }
}

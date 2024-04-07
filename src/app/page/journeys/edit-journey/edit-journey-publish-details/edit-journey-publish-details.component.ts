import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-edit-journey-publish-details',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './edit-journey-publish-details.component.html',
  styleUrl: './edit-journey-publish-details.component.scss'
})
export class EditJourneyPublishDetailsComponent {
  @Input({required: true}) journey!: Journey;
  @Output('saved') savedEvent = new EventEmitter<Journey>();

  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private journeyService: JourneyService
  ) {
  }

  isBasicDetailsAvailableAndValid(): boolean {
    return this.journey.id != '' &&
      this.journey.name != '' &&
      this.journey.title != '' &&
      this.journey.description != '' &&
      this.journey.city != '' &&
      this.journey.country != '' &&
      this.journey.journeyDate != '' &&
      this.journey.category != '' &&
      this.journey.tags?.length > 0 &&
      this.journey.location != undefined
  }

  isGeoJsonAvailable() {
    return this.journey.extendedDetails?.geoDetails?.geoJson != null;
  }

  isImagesDetailsAvailable() {
    return this.journey.extendedDetails?.imagesDetails?.images != undefined &&
      this.journey.extendedDetails.imagesDetails.images.length > 0
  }

  isVideosDetailsAvailable() {
    return this.journey.extendedDetails?.videosDetails?.videos != undefined &&
      this.journey.extendedDetails.videosDetails.videos.length > 0
  }
}

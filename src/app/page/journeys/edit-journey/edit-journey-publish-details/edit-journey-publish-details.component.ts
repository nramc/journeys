import {Component, EventEmitter, Input, Output, signal} from '@angular/core';
import {DEFAULT_THUMBNAIL, Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FeedbackMessageComponent} from "../../../../component/feedback-message/feedback-message.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FeedbackMessage} from "../../../../component/feedback-message/feedback-message";

@Component({
  selector: 'app-edit-journey-publish-details',
  standalone: true,
  imports: [
    MatIcon,
    FormsModule,
    NgIf,
    FeedbackMessageComponent,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './edit-journey-publish-details.component.html',
  styleUrl: './edit-journey-publish-details.component.scss'
})
export class EditJourneyPublishDetailsComponent {
  @Input({required: true}) journey!: Journey;
  @Output('saved') savedEvent = new EventEmitter<Journey>();
  feedbackMessage = signal<FeedbackMessage>({});

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

  publish(journeyForm: NgForm) {
    console.debug('submitted form:', journeyForm);
    this.journey.isPublished = true;
    this.journeyService.publishJourney(this.journey)
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while publishing data', err)
      });
  }

  save(journeyForm: NgForm) {
    if (journeyForm.valid) {
      this.journey.isPublished = false;
      this.journeyService.publishJourney(this.journey)
        .subscribe({
          next: data => this.onUpdateSuccess(data),
          error: err => this.onError('Unexpected error while publishing data', err)
        });
    }
  }

  onError(errorMessage: string, err: any) {
    this.feedbackMessage.set({error: errorMessage});
    console.error(err);
  }

  onUpdateSuccess(result: Journey) {
    const successMessage: string = result.isPublished ? 'Journey published successfully.' : 'Journey saved successfully';
    this.feedbackMessage.set({success: successMessage});
    this.journey = result;
    this.savedEvent.emit(this.journey);
  }

  protected readonly DEFAULT_THUMBNAIL = DEFAULT_THUMBNAIL;
}

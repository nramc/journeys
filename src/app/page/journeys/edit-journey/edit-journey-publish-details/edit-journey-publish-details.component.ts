import {Component, input, output, signal} from '@angular/core';
import {DEFAULT_THUMBNAIL, Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {FeedbackMessageComponent} from "../../../../component/feedback-message/feedback-message.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FeedbackMessage} from "../../../../component/feedback-message/feedback-message";
import {Router} from "@angular/router";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";

@Component({
  selector: 'app-edit-journey-publish-details',
  standalone: true,
  imports: [
    MatIcon,
    FormsModule,
    NgIf,
    FeedbackMessageComponent,
    MatFormFieldModule,
    MatSelectModule,
    HasWriteAccessDirective
  ],
  templateUrl: './edit-journey-publish-details.component.html',
  styleUrl: './edit-journey-publish-details.component.scss'
})
export class EditJourneyPublishDetailsComponent {
  protected readonly DEFAULT_THUMBNAIL = DEFAULT_THUMBNAIL;
  journey = input.required<Journey>();
  savedEvent = output<Journey>({alias: 'saved'});
  feedbackMessage = signal<FeedbackMessage>({});

  constructor(
    private router: Router,
    private journeyService: JourneyService
  ) {
  }

  isBasicDetailsAvailableAndValid(): boolean {
    return this.journey().id != '' &&
      this.journey().name != '' &&
      this.journey().title != '' &&
      this.journey().description != '' &&
      this.journey().city != '' &&
      this.journey().country != '' &&
      this.journey().journeyDate != '' &&
      this.journey().category != '' &&
      this.journey().tags?.length > 0 &&
      this.journey().location != undefined
  }

  isGeoJsonAvailable() {
    return this.journey().extendedDetails?.geoDetails?.geoJson != null;
  }

  isImagesDetailsAvailable() {
    return this.journey().extendedDetails?.imagesDetails?.images?.length ?? -1 > 0;
  }

  isVideosDetailsAvailable() {
    return this.journey().extendedDetails?.videosDetails?.videos?.length ?? -1 > 0
  }

  publish(journeyForm: NgForm) {
    console.debug('submitted form:', journeyForm);
    this.journey().isPublished = true;
    this.journeyService.publishJourney(this.journey())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while publishing data', err)
      });
  }

  save(journeyForm: NgForm) {
    if (journeyForm.valid) {
      this.journey().isPublished = false;
      this.journeyService.publishJourney(this.journey())
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
    this.savedEvent.emit(result);
  }

  delete() {
    this.feedbackMessage.set({loading: 'Please wait while your request processing...'});
    this.journeyService.deleteJourney(this.journey())
      .subscribe({
        next: __ => this.onDeleteSuccess(),
        error: err => this.onError('Unexpected error while publishing data', err)
      });
  }

  onDeleteSuccess() {
    this.feedbackMessage.set({success: 'Journey deleted successfully'});
    setTimeout(() => this.router.navigate(['journey']), 1000)
  }

}

import {ChangeDetectionStrategy, Component, inject, model} from '@angular/core';
import {DEFAULT_THUMBNAIL, Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {MatIcon} from "@angular/material/icon";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {Router} from "@angular/router";
import {HasWriteAccessDirective} from "../../../../directive/has-write-access.directive";
import {NotificationService} from "../../../../service/common/notification.service";

@Component({
  selector: 'app-edit-journey-publish-details',
  standalone: true,
  imports: [
    MatIcon,
    FormsModule,
    NgIf,
    MatFormFieldModule,
    MatSelectModule,
    HasWriteAccessDirective
  ],
  templateUrl: './edit-journey-publish-details.component.html',
  styleUrl: './edit-journey-publish-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyPublishDetailsComponent {
  protected readonly DEFAULT_THUMBNAIL = DEFAULT_THUMBNAIL;

  private readonly router = inject(Router);
  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);

  journey = model.required<Journey>();

  isBasicDetailsAvailableAndValid(): boolean {
    return this.journey().id != '' &&
      this.journey().name != '' &&
      this.journey().description != '' &&
      this.journey().journeyDate != '' &&
      this.journey().tags?.length > 0
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
    this.journey.update(data => ({...data, isPublished: true}));
    this.journeyService.publishJourney(this.journey())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while publishing data', err)
      });
  }

  save(journeyForm: NgForm) {
    if (journeyForm.valid) {
      this.journey.update(data => ({...data, isPublished: false}));
      this.journeyService.publishJourney(this.journey())
        .subscribe({
          next: data => this.onUpdateSuccess(data),
          error: err => this.onError('Unexpected error while publishing data', err)
        });
    }
  }

  onError(errorMessage: string, err: Error) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

  onUpdateSuccess(result: Journey) {
    const successMessage: string = result.isPublished ? 'Journey published successfully.' : 'Journey saved successfully';
    this.notificationService.showSuccess(successMessage);
    this.journey.set(result);
  }

  delete() {
    this.journeyService.deleteJourney(this.journey())
      .subscribe({
        next: __ => this.onDeleteSuccess(),
        error: err => this.onError('Unexpected error while publishing data', err)
      });
  }

  onDeleteSuccess() {
    this.notificationService.showSuccess('Journey deleted successfully');
    setTimeout(() => this.router.navigate(['journey']), 1000)
  }

}

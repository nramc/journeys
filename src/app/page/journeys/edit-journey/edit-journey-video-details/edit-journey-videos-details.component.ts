import {ChangeDetectionStrategy, Component, inject, model, OnInit, signal} from '@angular/core';
import {Journey, JourneyVideoDetail, JourneyVideosDetails} from 'src/app/model/core/journey.model';
import {JourneyService} from "../../../../service/journey/journey.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatStepperNext} from "@angular/material/stepper";
import {NotificationService} from "../../../../service/common/notification.service";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";

@Component({
    selector: 'app-edit-journey-videos-details',
    imports: [
        FormsModule,
        NgIf,
        ReactiveFormsModule,
        MatStepperNext,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        NgOptimizedImage
    ],
    templateUrl: './edit-journey-videos-details.component.html',
    styles: [],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyVideosDetailsComponent implements OnInit {
  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);

  journey = model.required<Journey>();
  formVideosDetails = signal(new JourneyVideosDetails());

  ngOnInit(): void {
    this.formVideosDetails.set(this.journey().videosDetails ?? new JourneyVideosDetails());
  }

  addVideo(videoId: string) {
    this.formVideosDetails.update(data => ({
      ...data,
      videos: [...data.videos, new JourneyVideoDetail(videoId)]
    }));
    this.save();
  }

  removeVideoAndSaveJourney(videoDetail: JourneyVideoDetail) {
    this.formVideosDetails.update(data => ({
      ...data,
      videos: data.videos.filter(value => value.videoId !== videoDetail.videoId),
    }));
    this.save();
  }

  save() {
    this.journeyService.saveJourneyVideosDetails(this.journey(), this.formVideosDetails())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving videos data', err)
      });
  }

  onUpdateSuccess(result: Journey) {
    this.notificationService.showSuccess('Video Details saved successfully.');
    this.journey.set(result);
  }

  onError(errorMessage: string, err: Error) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

}

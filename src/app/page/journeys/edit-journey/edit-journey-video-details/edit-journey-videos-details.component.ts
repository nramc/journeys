import {ChangeDetectionStrategy, Component, inject, model, OnInit, signal} from '@angular/core';
import {Journey, JourneyVideoDetail, JourneyVideosDetails} from 'src/app/model/core/journey.model';
import {JourneyService} from "../../../../service/journey/journey.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatStepperNext} from "@angular/material/stepper";
import {NotificationService} from "../../../../service/common/notification.service";

@Component({
  selector: 'app-edit-journey-videos-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatStepperNext,
    NgOptimizedImage
  ],
  templateUrl: './edit-journey-videos-details.component.html',
  styleUrl: './edit-journey-videos-details.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyVideosDetailsComponent implements OnInit {
  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);

  journey = model.required<Journey>();
  formVideosDetails = signal(new JourneyVideosDetails());

  ngOnInit(): void {
    this.formVideosDetails.set(this.journey().extendedDetails?.videosDetails ?? new JourneyVideosDetails());
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

  onError(errorMessage: string, err: any) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

}

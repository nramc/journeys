import {Component, input, OnInit, output, signal} from '@angular/core';
import {Journey, JourneyVideoDetail, JourneyVideosDetails} from 'src/app/model/core/journey.model';
import {JourneyService} from "../../../../service/journey/journey.service";
import {FeedbackMessageComponent} from "../../../../component/feedback-message/feedback-message.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {MatStepperNext} from "@angular/material/stepper";
import {FeedbackMessage} from "../../../../component/feedback-message/feedback-message";

@Component({
  selector: 'app-edit-journey-videos-details',
  standalone: true,
  imports: [
    FeedbackMessageComponent,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    MatStepperNext
  ],
  templateUrl: './edit-journey-videos-details.component.html',
  styleUrl: './edit-journey-videos-details.component.scss'
})
export class EditJourneyVideosDetailsComponent implements OnInit {
  journey = input.required<Journey>();
  savedEvent = output<Journey>({alias: 'saved'});
  feedbackMessage = signal<FeedbackMessage>({});

  formVideosDetails: JourneyVideosDetails = new JourneyVideosDetails();

  constructor(
    private journeyService: JourneyService
  ) {
  }

  ngOnInit(): void {
    this.formVideosDetails = this.journey().extendedDetails?.videosDetails ?? new JourneyVideosDetails();
  }

  addVideo(videoId: string) {
    this.formVideosDetails.videos.push(
      new JourneyVideoDetail(videoId)
    );
    this.save();
  }

  removeVideoAndSaveJourney(videoDetail: JourneyVideoDetail) {
    const index = this.formVideosDetails.videos.indexOf(videoDetail);
    if (index >= 0) {
      this.formVideosDetails.videos.splice(index, 1);
      this.save()
    }
  }

  save() {
    this.journeyService.saveJourneyVideosDetails(this.journey(), this.formVideosDetails)
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving videos data', err)
      });
  }

  onUpdateSuccess(result: Journey) {
    this.feedbackMessage.set({success: 'Video Details saved successfully.'});
    this.savedEvent.emit(result);
  }

  onError(errorMessage: string, err: any) {
    this.feedbackMessage.set({error: errorMessage});
    console.error(err);
  }

}

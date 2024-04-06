import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Journey, JourneyVideoDetail, JourneyVideosDetails} from 'src/app/model/core/journey.model';
import {JourneyService} from "../../../../service/journey/journey.service";

@Component({
  selector: 'app-edit-journey-video-details',
  standalone: true,
  imports: [],
  templateUrl: './edit-journey-video-details.component.html',
  styleUrl: './edit-journey-video-details.component.scss'
})
export class EditJourneyVideoDetailsComponent implements OnInit {
  @Input({required: true}) journey!: Journey;
  @Output('saved') savedEvent = new EventEmitter<Journey>();

  successMessage: string = '';
  errorMessage: string = '';

  formVideosDetails: JourneyVideosDetails = new JourneyVideosDetails();

  constructor(
    private journeyService: JourneyService
  ) {
  }

  ngOnInit(): void {
    if (this.journey?.extendedDetails?.videosDetails) {
      this.formVideosDetails = this.journey.extendedDetails.videosDetails;
    }
  }

  private addVideo(videoId: string) {
    this.formVideosDetails.videos.push(
      new JourneyVideoDetail(videoId)
    );
  }

  removeVideoAndSaveJourney(videoDetail: JourneyVideoDetail) {
    const index = this.formVideosDetails.videos.indexOf(videoDetail);
    if (index >= 0) {
      this.formVideosDetails.videos.splice(index, 1);
      this.save()
    }
  }

  save() {
    this.journeyService.saveJourneyVideosDetails(this.journey, this.formVideosDetails)
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving images data', err)
      });
  }

  onUpdateSuccess(result: Journey) {
    this.successMessage = 'Video Details saved successfully.';
    this.journey = result;
    this.savedEvent.emit(this.journey);
  }

  onError(errorMessage: string, err: any) {
    this.errorMessage = errorMessage;
    console.error(err);
  }

}

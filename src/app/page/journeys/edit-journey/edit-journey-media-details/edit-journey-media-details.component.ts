import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-journey-media-details',
  templateUrl: './edit-journey-media-details.component.html',
  styleUrl: './edit-journey-media-details.component.scss'
})
export class EditJourneyMediaDetailsComponent {
  @Output("saved") savedEvent: EventEmitter<Journey> = new EventEmitter<Journey>();
  @Input({required: true}) journey!: Journey;

  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private journeyService: JourneyService
  ) {
  }

  onError(errorMessage: string, err: any) {
    this.errorMessage = errorMessage;
    console.error(err);
  }

  onUpdateSuccess(result: Journey) {
    this.successMessage = 'Media Details saved successfully.';
    this.journey = result;
    this.savedEvent.emit(this.journey);
  }

  save(journeyForm: NgForm) {
    console.log('Saved', journeyForm.value);
    this.journeyService.saveJourneyBasicDetails(this.journey)
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving media data', err)
      });

  }



}

import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";

@Component({
  selector: 'app-edit-journey-publish-details',
  standalone: true,
  imports: [],
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

}

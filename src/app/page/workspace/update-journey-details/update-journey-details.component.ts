import {Component, Input} from '@angular/core';
import {Journey} from "../../../model/core/journey.model";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-update-journey-details',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './update-journey-details.component.html'
})
export class UpdateJourneyDetailsComponent {

  @Input("journey") journey!: Journey;

  successMessage: string = '';
  errorMessage: string = '';

  setSuccess(message: string) {
    this.successMessage = message;
    this.errorMessage = '';
  }

  setError(message: string) {
    this.successMessage = '';
    this.errorMessage = message;
  }

  save(journeyForm: NgForm) {
    this.setSuccess("Saved successfully.")
  }
}

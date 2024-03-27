import {Component, Input} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Journey} from "../../../model/core/journey.model";
import {JourneyService} from "../../../service/journey/journey.service";

@Component({
  selector: 'app-new-journey',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './new-journey-backup.component.html'
})
export class NewJourneyBackupComponent {
  @Input("journey") journey!: Journey;

  constructor(private journeyService: JourneyService) {
  }

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

  onSubmit(journeyForm: NgForm) {
    if (journeyForm.submitted && journeyForm.valid) {
      this.journeyService.createJourney(this.journey)
        .subscribe(data => this.onCreateSuccess(data));
    } else {
      console.log(journeyForm)
    }
  }

  onCreateSuccess(result: Journey) {
    this.setSuccess('Journey added successfully.');
    this.journey = result;
  }
}

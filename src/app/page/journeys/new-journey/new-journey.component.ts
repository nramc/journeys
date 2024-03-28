import {Component} from '@angular/core';
import {NEW_JOURNEY_PAGE_INFO} from "../../../model/page-info";
import {Journey} from "../../../model/core/journey.model";
import {JourneyService} from "../../../service/journey/journey.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-journey',
  templateUrl: './new-journey.component.html'
})
export class NewJourneyComponent {
  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;

  journey: Journey = new Journey();

  constructor(
    private router: Router,
    private journeyService: JourneyService
  ) {
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
        .subscribe({
          next: data => this.onCreateSuccess(data),
          error: err => this.setError(err)
        });
    } else {
      console.log(journeyForm)
    }
  }

  onCreateSuccess(result: Journey) {
    this.setSuccess('Journey added successfully.');
    this.journey = result;
  }

  continue() {
    if (this.journey.id) {
      this.router.navigate(['/journey', this.journey.id, 'edit']);
    }
  }
}

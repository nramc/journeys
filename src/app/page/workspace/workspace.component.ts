import {Component} from '@angular/core';
import {WORKSPACE_PAGE_INFO} from "../../model/page-info";
import {Journey} from "../../model/core/journey.model";
import {NgForm} from "@angular/forms";
import {JourneyService} from "../../service/journey.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent {
  protected readonly WORKSPACE_PAGE_INFO = WORKSPACE_PAGE_INFO;

  constructor(private journeyService: JourneyService, private snackBar: MatSnackBar) {
  }

  journey: Journey = new Journey();
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

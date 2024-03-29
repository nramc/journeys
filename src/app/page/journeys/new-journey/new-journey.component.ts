import {Component} from '@angular/core';
import {NEW_JOURNEY_PAGE_INFO} from "../../../model/page-info";
import {Journey} from "../../../model/core/journey.model";
import {JourneyService} from "../../../service/journey/journey.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material/chips";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction} from "rxjs";

@Component({
  selector: 'app-new-journey',
  templateUrl: './new-journey.component.html',
  styleUrl: './new-journey.component.scss'
})
export class NewJourneyComponent {
  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  readonly predefinedCategories = ['Travel', 'Work', 'Residential']

  journey: Journey = new Journey();
  coordinates: number[] = [];

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

  addTag(event: MatChipInputEvent): void {
    const newTag = (event.value || '').trim();
    if (newTag) {
      this.journey.tags.push(newTag);
    }
    // Clear the input value
    event.chipInput.clear();
  }

  removeTag(tag: string): void {
    const index = this.journey.tags.indexOf(tag);
    if (index >= 0) {
      this.journey.tags.splice(index, 1);
    }
  }

  searchCategory: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2 ? [] :
          this.predefinedCategories.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      ),
    );


  refreshMapWithCoordinates() {
    if (this.coordinates.length == 2) {
      this.journey.location = {
        type: "Point",
        coordinates: this.coordinates
      }
    }
  }
}

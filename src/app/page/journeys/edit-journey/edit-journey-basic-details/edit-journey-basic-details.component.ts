import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {debounceTime, distinctUntilChanged, map, Observable, OperatorFunction} from "rxjs";
import {Point} from "geojson";
import {MatChipInputEvent} from "@angular/material/chips";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-edit-journey-basic-data',
  templateUrl: './edit-journey-basic-details.component.html',
  styleUrl: './edit-journey-basic-details.component.scss'
})
export class EditJourneyBasicDetailsComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  readonly predefinedCategories = ['Travel', 'Work', 'Residential']

  @Output("saved") savedEvent: EventEmitter<Journey> = new EventEmitter<Journey>();

  successMessage: string = '';
  errorMessage: string = '';

  @Input({required: true}) journey!: Journey;
  coordinates: number[] = [];

  constructor(
    private journeyService: JourneyService
  ) {
  }

  ngOnInit(): void {
    this.coordinates = (this.journey.location as Point).coordinates;
  }

  onError(errorMessage: string, err: any) {
    this.errorMessage = errorMessage;
    console.error(err);
  }

  onUpdateSuccess(result: Journey) {
    this.successMessage = 'Journey saved successfully.';
    this.journey = result;
    this.savedEvent.emit(this.journey);
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

  save(journeyForm: NgForm) {
    this.journeyService.saveJourneyBasicDetails(this.journey)
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving data', err)
      });

  }
}
import {Component, EventEmitter, Input, OnInit, Output, signal} from '@angular/core';
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {debounceTime, distinctUntilChanged, Observable, of, OperatorFunction, startWith, switchMap} from "rxjs";
import {Point} from "geojson";
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {FormsModule, NgForm} from "@angular/forms";
import {FeedbackMessageComponent} from "../../../../component/feedback-message/feedback-message.component";
import {NgIf, TitleCasePipe} from "@angular/common";
import {NgbInputDatepicker, NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperNext} from "@angular/material/stepper";
import {WorldMapComponent} from "../../../../component/world-map/world-map.component";
import {AutoCompleteService} from "../../../../service/auto-complete/auto-complete.service";
import {SUPPORTED_ICONS} from "../../../../config/icon-config";
import {FeedbackMessage} from "../../../../component/feedback-message/feedback-message";

@Component({
  selector: 'app-edit-journey-basic-data',
  templateUrl: './edit-journey-basic-details.component.html',
  styleUrl: './edit-journey-basic-details.component.scss',
  imports: [
    FeedbackMessageComponent,
    FormsModule,
    NgIf,
    NgbTypeahead,
    MatIconModule,
    MatChipsModule,
    NgbInputDatepicker,
    MatStepperNext,
    WorldMapComponent,
    TitleCasePipe
  ],
  standalone: true
})
export class EditJourneyBasicDetailsComponent implements OnInit {
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  @Output("saved") savedEvent: EventEmitter<Journey> = new EventEmitter<Journey>();
  feedbackMessage = signal<FeedbackMessage>({});
  @Input({required: true}) journey!: Journey;
  coordinates: number[] = [];

  constructor(
    private journeyService: JourneyService,
    private autoCompleteService: AutoCompleteService
  ) {
  }

  ngOnInit(): void {
    this.coordinates = (this.journey.location as Point).coordinates;
  }

  onError(errorMessage: string, err: any) {
    this.feedbackMessage.set({error: errorMessage});
    console.error(err);
  }

  onUpdateSuccess(result: Journey) {
    this.feedbackMessage.set({success: 'Journey details saved successfully.'});
    this.journey = result;
    this.savedEvent.emit(this.journey);
  }

  addTag(event: MatChipInputEvent): void {
    const newTag = (event.value || '').toLowerCase().trim();
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
      startWith(''),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((text) =>
        text.length < 1 ? of([]) :
          this.autoCompleteService.getAvailableCategories(text.toLowerCase())
      ),
    );

  refreshMapWithCoordinates() {
    setTimeout(() => {
      if (this.coordinates.length == 2) {
        this.journey.location = {
          type: "Point",
          coordinates: this.coordinates
        }
      }
    }, 100);
  }

  save(journeyForm: NgForm) {
    console.debug('Submitted form data:', journeyForm);
    this.journeyService.saveJourneyBasicDetails(this.journey)
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving data', err)
      });

  }

  protected readonly SUPPORTED_ICONS = SUPPORTED_ICONS;

  swapCoordinates() {
    let temp = this.coordinates[0];
    this.coordinates[0] = this.coordinates[1];
    this.coordinates[1] = temp;
    this.refreshMapWithCoordinates();
  }

  async copyCoordinatesFromGoogleMap() {
    const copiedValue = await navigator.clipboard.readText()
    console.debug('Value copied from clipboard:', copiedValue);
    if (copiedValue) {
      let copiedCoordinates = copiedValue.split(',');
      this.coordinates[0] = Number(copiedCoordinates.length < 2 ? copiedCoordinates[0] : copiedCoordinates[1]);
      this.coordinates[1] = Number(copiedCoordinates[0]);
      this.refreshMapWithCoordinates();
    }
  }

  async copyCoordinatesFromClipboard() {
    const copiedValue = await navigator.clipboard.readText()
    console.debug('Value copied from clipboard:', copiedValue);
    if (copiedValue) {
      let copiedCoordinates = copiedValue.split(',');
      this.coordinates[0] = Number(copiedCoordinates[0]);
      this.coordinates[1] = Number(copiedCoordinates.length >= 2 ? copiedCoordinates[1] : copiedCoordinates[0]);
      this.refreshMapWithCoordinates();
    }
  }
}

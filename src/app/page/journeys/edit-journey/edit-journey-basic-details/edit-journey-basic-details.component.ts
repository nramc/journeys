import {ChangeDetectionStrategy, Component, computed, inject, model, signal} from '@angular/core';
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {Journey} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {debounceTime, distinctUntilChanged, Observable, of, OperatorFunction, startWith, switchMap} from "rxjs";
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {FormsModule, NgForm} from "@angular/forms";
import {NgIf, TitleCasePipe} from "@angular/common";
import {NgbInputDatepicker, NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {MatIconModule} from "@angular/material/icon";
import {MatStepperNext} from "@angular/material/stepper";
import {GeoCodingLocationData, WorldMapComponent} from "../../../../component/world-map/world-map.component";
import {AutoCompleteService} from "../../../../service/auto-complete/auto-complete.service";
import {SUPPORTED_ICONS} from "../../../../config/icon-config";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {DisplayMarkdownComponent} from "../../../../component/display-markdown-component/display-markdown.component";
import {NotificationService} from "../../../../service/common/notification.service";

@Component({
  selector: 'app-edit-journey-basic-data',
  templateUrl: './edit-journey-basic-details.component.html',
  styleUrl: './edit-journey-basic-details.component.scss',
  imports: [
    FormsModule,
    NgIf,
    NgbTypeahead,
    MatIconModule,
    MatChipsModule,
    NgbInputDatepicker,
    MatStepperNext,
    WorldMapComponent,
    TitleCasePipe,
    MatButtonToggleModule,
    DisplayMarkdownComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyBasicDetailsComponent {
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;

  private readonly journeyService = inject(JourneyService);
  private readonly autoCompleteService = inject(AutoCompleteService);
  private readonly notificationService = inject(NotificationService);

  markdownStyle = signal<string>('Source')
  journey = model<Journey>(new Journey());

  coordinates = computed<number[]>(() => this.journey().location?.coordinates ?? []);

  onError(errorMessage: string, err: Error) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

  onUpdateSuccess(_: Journey) {
    this.notificationService.showSuccess('Journey details saved successfully.');
  }

  addTag(event: MatChipInputEvent): void {
    const newTag = (event.value || '').toLowerCase().trim();
    if (newTag) {
      this.journey.update(data => ({
        ...data,
        tags: data.tags.concat(newTag)
      }))
    }
    // Clear the input value
    event.chipInput.clear();
  }

  removeTag(tag: string): void {
    this.journey.update(data => ({
      ...data,
      tags: data.tags.filter(value => value !== tag)
    }));
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

  save(journeyForm: NgForm) {
    console.debug('Submitted form data:', journeyForm);
    this.journeyService.saveJourneyBasicDetails(this.journey())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving data', err)
      });

  }

  protected readonly SUPPORTED_ICONS = SUPPORTED_ICONS;

  // noinspection DuplicatedCode
  async copyCoordinatesFromGoogleMap() {
    const copiedValue = await navigator.clipboard.readText()
    console.debug('Value copied from clipboard:', copiedValue);
    if (copiedValue && copiedValue.split(',').length > 1) {
      const copiedCoordinates = copiedValue.split(',');

      this.journey.update(data => ({
        ...data,
        location: {
          type: "Point",
          coordinates: [Number(copiedCoordinates[1]), Number(copiedCoordinates[0])]
        }
      }));

    }
  }

  // noinspection DuplicatedCode
  async copyCoordinatesFromClipboard() {
    const copiedValue = await navigator.clipboard.readText()
    console.debug('Value copied from clipboard:', copiedValue);
    if (copiedValue) {
      const copiedCoordinates = copiedValue.split(',');
      this.journey.update(data => ({
        ...data,
        location: {
          type: "Point",
          coordinates: [Number(copiedCoordinates[0]), Number(copiedCoordinates[1])]
        }
      }));

    }
  }

  // noinspection DuplicatedCode
  addGeoCodingLocation(geoCodingData: GeoCodingLocationData) {
    this.journey.update(data => ({
        ...data,
        title: geoCodingData.name,
        city: geoCodingData.state,
        country: geoCodingData.country,
        location: {
          type: "Point",
          coordinates: [geoCodingData.location.coordinates[0], geoCodingData.location.coordinates[1]]
        }
      })
    );

  }

}

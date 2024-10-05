import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {NEW_JOURNEY_PAGE_INFO} from "../../../model/page.info.model";
import {Journey} from "../../../model/core/journey.model";
import {JourneyService} from "../../../service/journey/journey.service";
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {MatChipInputEvent, MatChipsModule} from "@angular/material/chips";
import {debounceTime, distinctUntilChanged, Observable, of, OperatorFunction, startWith, switchMap} from "rxjs";
import {NgbInputDatepicker, NgbTypeahead} from "@ng-bootstrap/ng-bootstrap";
import {MatIconModule} from "@angular/material/icon";
import {NgIf} from "@angular/common";
import {PageHeaderComponent} from "../../../component/page-header/page-header.component";
import {GeoCodingLocationData, WorldMapComponent} from "../../../component/world-map/world-map.component";
import {AutoCompleteService} from "../../../service/auto-complete/auto-complete.service";
import {SUPPORTED_ICONS} from "../../../config/icon-config";
import {DisplayMarkdownComponent} from "../../../component/display-markdown-component/display-markdown.component";
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@Component({
  selector: 'app-new-journey',
  templateUrl: './new-journey.component.html',
  styleUrl: './new-journey.component.scss',
  imports: [
    FormsModule,
    NgbTypeahead,
    MatIconModule,
    MatChipsModule,
    NgIf,
    NgbInputDatepicker,
    PageHeaderComponent,
    WorldMapComponent,
    DisplayMarkdownComponent,
    MatButtonToggleModule
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewJourneyComponent {
  protected readonly NEW_JOURNEY_PAGE_INFO = NEW_JOURNEY_PAGE_INFO;
  readonly separatorKeysCodes = [ENTER, COMMA, SPACE] as const;
  journey = signal(new Journey());
  coordinates = signal<number[]>([]);
  markdownStyle = signal<string>('Source')

  private router = inject(Router);
  private journeyService = inject(JourneyService);
  private autoCompleteService = inject(AutoCompleteService);

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
      this.journeyService.createJourney(this.journey())
        .subscribe({
          next: data => this.onCreateSuccess(data),
          error: err => this.setError(err)
        });
    }
  }

  onCreateSuccess(result: Journey) {
    this.setSuccess('Journey added successfully.');
    this.journey.set(result);
  }

  continue() {
    if (this.journey().id) {
      this.router.navigate(['/journey', this.journey().id, 'edit']).then();
    }
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


  refreshMapWithCoordinates() {
    if (this.coordinates()[0] && this.coordinates()[1]) {
      this.journey.update(data => ({
        ...data,
        location: {
          type: "Point",
          coordinates: [this.coordinates()?.[0], this.coordinates()?.[1]],
        }
      }));
    }
  }

  // noinspection DuplicatedCode
  async copyCoordinatesFromGoogleMap() {
    const copiedValue = await navigator.clipboard.readText()
    console.debug('Value copied from clipboard:', copiedValue);
    if (copiedValue && copiedValue.split(',').length > 1) {
      let copiedCoordinates = copiedValue.split(',');
      this.coordinates.set([Number(copiedCoordinates[1]), Number(copiedCoordinates[0])]);
      this.refreshMapWithCoordinates();
    }
  }

  // noinspection DuplicatedCode
  async copyCoordinatesFromClipboard() {
    const copiedValue = await navigator.clipboard.readText()
    console.debug('Value copied from clipboard:', copiedValue);
    if (copiedValue) {
      let copiedCoordinates = copiedValue.split(',');
      this.coordinates.set([Number(copiedCoordinates[0]), Number(copiedCoordinates[1])])
      this.refreshMapWithCoordinates();
    }
  }

  protected readonly SUPPORTED_ICONS = SUPPORTED_ICONS;

  addGeoCodingLocation(geoCodingData: GeoCodingLocationData) {
    this.coordinates.set([geoCodingData.location.coordinates[0], geoCodingData.location.coordinates[1]]);

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

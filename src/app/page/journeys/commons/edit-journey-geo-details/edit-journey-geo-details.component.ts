import {ChangeDetectionStrategy, Component, computed, effect, inject, model, OnInit, signal} from '@angular/core';
import {Journey, JourneyGeoDetails} from "../../../../model/core/journey.model";
import {JourneyService} from "../../../../service/journey/journey.service";
import {FormsModule, NgForm} from "@angular/forms";
import {GeoCodingLocationData, WorldMapComponent} from "../../../../component/world-map/world-map.component";
import {MatStepperNext} from "@angular/material/stepper";
import {JsonPipe, NgIf} from "@angular/common";
import {NotificationService} from "../../../../service/common/notification.service";
import {NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {OperationMode} from "../../operation-mode";
import {EditGeoLocationComponent} from "../edit-geo-location/edit-geo-location.component";
import {GeoJSON, Point} from "geojson";
import {EditGeoJsonComponent} from "../edit-geo-json/edit-geo-json.component";
import {SUPPORTED_ICONS} from "../../../../config/icon-config";

@Component({
  selector: 'app-edit-journey-geo-details',
  templateUrl: './edit-journey-geo-details.component.html',
  styleUrl: './edit-journey-geo-details.component.scss',
  imports: [
    FormsModule,
    WorldMapComponent,
    MatStepperNext,
    NgIf,
    JsonPipe,
    NgbInputDatepicker,
    EditGeoLocationComponent,
    EditGeoJsonComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyGeoDetailsComponent implements OnInit {
  protected readonly CATEGORIES = SUPPORTED_ICONS;

  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);

  journey = model.required<Journey>();

  formData = {
    location: signal<Point | undefined>(undefined),
    title: signal<string>(''),
    city: signal<string>(''),
    country: signal<string>(''),
    category: signal<string>('default'),
    geoJson: signal<GeoJSON | undefined>(undefined)
  }

  mode = model<OperationMode>(OperationMode.EDIT);
  isReadOnly = computed(() => this.mode() === OperationMode.VIEW);
  showMapOption = signal<'Location' | 'GeoJson'>('Location');
  geoJsonData = computed(() => this.showMapOption() == 'Location'
    ? this.formData.location() : this.formData.geoJson());

  constructor() {
    effect(() => {
      console.log('data:', this.formData.location());
    });
  }

  ngOnInit(): void {
    this.copyToForm(this.journey().extendedDetails!.geoDetails ?? new JourneyGeoDetails());
  }

  save(journeyForm: NgForm) {
    console.debug('submitted form:', journeyForm);
    this.journeyService.saveJourneyGeoDetails(this.journey(), this.copyDataFromForm())
      .subscribe({
        next: data => this.onUpdateSuccess(data),
        error: err => this.onError('Unexpected error while saving geo data', err)
      });
  }

  onUpdateSuccess(_: Journey) {
    this.notificationService.showSuccess('Journey details saved successfully.');
  }

  onError(errorMessage: string, err: Error) {
    this.notificationService.showError(errorMessage);
    console.error(err);
  }

  private copyToForm(data: JourneyGeoDetails) {
    this.formData.location.set(data.location);
    this.formData.title.set(data.title);
    this.formData.city.set(data.city);
    this.formData.country.set(data.country);
    this.formData.category.set(data.category || 'default');
    this.formData.geoJson.set(data.geoJson);
  }

  private copyDataFromForm() {
    return new JourneyGeoDetails(
      this.formData.title(),
      this.formData.city(),
      this.formData.country(),
      this.formData.category(),
      this.formData.location(),
      this.formData.geoJson() || this.formData.location()
    );
  }

  addGeoLocation(geoCodingData: GeoCodingLocationData) {
    this.formData.location.set(geoCodingData.location);
    this.formData.title.set(geoCodingData.name);
    this.formData.city.set(geoCodingData.state);
    this.formData.country.set(geoCodingData.country);
  }
}

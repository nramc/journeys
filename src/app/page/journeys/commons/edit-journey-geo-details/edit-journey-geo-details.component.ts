import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  model,
  OnInit,
  signal
} from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { MatStepperNext } from "@angular/material/stepper";
import {
  GeoCodingAreaData,
  GeoCodingLocationData,
  WorldMapComponent
} from "../../../../component/world-map/world-map.component";
import { DEFAULT_CATEGORY, Journey, JourneyGeoDetails } from "../../../../model/core/journey.model";
import { JourneyService } from "../../../../service/journey/journey.service";

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { GeoJSON, Point } from "geojson";
import * as iconConfig from "../../../../config/icon-config";
import { NotificationService } from "../../../../service/common/notification.service";
import { OperationMode } from "../../operation-mode";
import { EditGeoJsonComponent } from "../edit-geo-json/edit-geo-json.component";
import { EditGeoLocationComponent } from "../edit-geo-location/edit-geo-location.component";

@Component({
  selector: 'app-edit-journey-geo-details',
  templateUrl: './edit-journey-geo-details.component.html',
  styles: [],
  imports: [
    FormsModule,
    WorldMapComponent,
    MatStepperNext,
    EditGeoLocationComponent,
    EditGeoJsonComponent,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditJourneyGeoDetailsComponent implements OnInit {
  protected readonly ICON_CONFIGS = iconConfig.ICON_CONFIGS;
  protected readonly getIconConfigByCategory = iconConfig.getIconConfigByCategory;

  private readonly journeyService = inject(JourneyService);
  private readonly notificationService = inject(NotificationService);

  journey = model.required<Journey>();

  formData = {
    location: signal<Point | undefined>(undefined),
    title: signal<string>(''),
    city: signal<string>(''),
    country: signal<string>(''),
    category: signal<string>(DEFAULT_CATEGORY),
    geoJson: signal<GeoJSON | undefined>(undefined)
  }

  mode = model<OperationMode>(OperationMode.EDIT);
  isReadOnly = computed(() => this.mode() === OperationMode.VIEW);
  showMapOption = signal<'Location' | 'GeoJson'>('Location');
  geoJsonData = computed(() => this.showMapOption() == 'Location'
    ? this.formData.location() : this.formData.geoJson());

  ngOnInit(): void {
    this.copyToForm(this.journey().geoDetails ?? new JourneyGeoDetails());
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
    this.formData.category.set(data.category || DEFAULT_CATEGORY);
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
    this.formData.location.update(currentValue => geoCodingData.location ?? currentValue);
    this.formData.geoJson.update(currentValue => geoCodingData.location ?? currentValue);
    this.formData.title.update(currentValue => ([geoCodingData.name, geoCodingData.state, geoCodingData.country].join(',')) ?? currentValue);
    this.formData.city.update(currentValue => geoCodingData.state ?? currentValue);
    this.formData.country.update(currentValue => geoCodingData.country ?? currentValue);
  }

  addGeoArea(data: GeoCodingAreaData) {
    this.formData.geoJson.update(currentValue => data.area ?? currentValue);
  }
}

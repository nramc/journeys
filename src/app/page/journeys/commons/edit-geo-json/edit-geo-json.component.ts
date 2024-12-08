import {Component, computed, model, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GeoJSON} from "geojson";
import {MatIcon} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-edit-geo-json',
  standalone: true,
  imports: [
    FormsModule,
    MatIcon,
    MatButtonModule,
    MatInputModule,
    NgIf
  ],
  templateUrl: './edit-geo-json.component.html',
  styles: []
})
export class EditGeoJsonComponent {
  geoJson = model<GeoJSON | undefined>(undefined)
  geoJsonString = computed(() => JSON.stringify(this.geoJson(), null, 2));
  isGeoJsonValid = signal<boolean>(true);

  onGeoJsonChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const jsonStringValue = target.value;
    try {
      const parsedGeoJson = JSON.parse(jsonStringValue);
      if (parsedGeoJson.type === 'FeatureCollection') {
        this.geoJson.set(parsedGeoJson);
        this.isGeoJsonValid.set(true);
      }
    } catch (error) {
      this.isGeoJsonValid.set(false);
      console.error('Invalid GeoJSON:', error);
    }

  }
}

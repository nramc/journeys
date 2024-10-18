import {Component, computed, model} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {GeoJSON} from "geojson";

@Component({
  selector: 'app-edit-geo-json',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './edit-geo-json.component.html',
  styleUrl: './edit-geo-json.component.scss'
})
export class EditGeoJsonComponent {
  geoJson = model<GeoJSON | undefined>(undefined)
  geoJsonString = computed(() => JSON.stringify(this.geoJson(), null, 2));
  //todo is GeoJsonValid

  onGeoJsonChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    const jsonStringValue = target.value;
    try {
      const parsedGeoJson = JSON.parse(jsonStringValue);
      if (parsedGeoJson.type === 'FeatureCollection') {
        this.geoJson.set(parsedGeoJson);
      }
    } catch (error) {
      console.error('Invalid GeoJSON:', error);
    }

  }
}

import {Component, model} from '@angular/core';
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

}

import {Component, model} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Point} from "geojson";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-edit-geo-location',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    MatTooltip,
    MatIcon
  ],
  templateUrl: './edit-geo-location.component.html',
  styleUrl: './edit-geo-location.component.scss'
})
export class EditGeoLocationComponent {

  location = model<Point>({type: "Point", coordinates: []});
  disabled = model<boolean>(false);

  // todo fire change event

  copyCoordinatesFromGoogleMap() {

  }

  copyCoordinatesFromClipboard() {

  }

  fireChangeEvent() {

  }
}

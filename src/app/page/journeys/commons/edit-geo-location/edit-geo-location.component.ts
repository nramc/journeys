import {ChangeDetectionStrategy, Component, model, signal} from '@angular/core';
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
  styleUrl: './edit-geo-location.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditGeoLocationComponent {

  location = model<Point | undefined>();
  _location = signal<Point>({type: "Point", coordinates: []});
  disabled = model<boolean>(false);

  constructor() {

  }

  // todo fire change event

  pasteClipboardCoordinates() {
    navigator.clipboard.readText().then(copiedValue => {
      console.debug('Value copied from clipboard:', copiedValue);
      if (copiedValue && copiedValue.split(',').length == 2) {
        const copiedCoordinates = copiedValue.split(',');
        this._location.update(data => ({
          ...data,
          coordinates: [Number(copiedCoordinates[0]), Number(copiedCoordinates[1])]
        }));
        this.fireChangeEvent();
      }
    });
  }


  pasteClipboardGoogleCoordinates() {
    navigator.clipboard.readText().then(copiedValue => {
      console.debug('Value copied from clipboard:', copiedValue);
      if (copiedValue && copiedValue.split(',').length == 2) {
        const copiedCoordinates = copiedValue.split(',');
        this._location.update(data => ({
          ...data,
          coordinates: [Number(copiedCoordinates[1]), Number(copiedCoordinates[0])]
        }));
        this.fireChangeEvent();
      }
    });

  }

  fireChangeEvent() {
    if (this._location().coordinates.filter(value => value !== null).length == 2) {
      this.location.update(data => ({type: "Point", coordinates: this._location().coordinates}));
      console.log('fireChangeEvent:', this.location())
    }

  }
}

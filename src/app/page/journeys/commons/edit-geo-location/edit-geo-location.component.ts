import {ChangeDetectionStrategy, Component, model, signal} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {Point} from "geojson";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {toObservable} from "@angular/core/rxjs-interop";
import {filter} from "rxjs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";

@Component({
    selector: 'app-edit-geo-location',
    imports: [
    FormsModule,
    MatTooltip,
    MatIcon,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
],
    templateUrl: './edit-geo-location.component.html',
    styleUrl: './edit-geo-location.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditGeoLocationComponent {

  location = model<Point | undefined>();
  _location = signal<Point>({type: "Point", coordinates: []});
  disabled = model<boolean>(false);

  location$ = toObservable(this.location)
    .pipe(filter(location => location?.coordinates != null && location.coordinates.length == 2));

  constructor() {
    this.location$.subscribe(newData => {
      console.log(newData);
      this._location.update(data => ({...data, coordinates: newData!.coordinates}))
    })
  }

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
      this.location.update(_ => ({type: "Point", coordinates: this._location().coordinates}));
      console.log('fireChangeEvent:', this.location())
    }

  }
}

import {Component, ElementRef, Input} from '@angular/core';
import {Feature} from "geojson";

@Component({
  selector: 'app-marker-popup',
  templateUrl: './marker-popup.component.html',
  styleUrls: ['./marker-popup.component.scss']
})
export class MarkerPopupComponent {

  @Input() feature: Feature | undefined;

  elementRef: ElementRef;

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }


}

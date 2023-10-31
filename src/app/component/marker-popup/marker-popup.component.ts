import {Component, ElementRef, Input} from '@angular/core';
import {Location} from "../../model/location.model";

@Component({
  selector: 'app-marker-popup',
  templateUrl: './marker-popup.component.html',
  styleUrls: ['./marker-popup.component.scss']
})
export class MarkerPopupComponent {

  @Input() location: Location | undefined;

  elementRef: ElementRef;

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }


}

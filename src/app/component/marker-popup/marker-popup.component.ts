import {Component, ElementRef, Input} from '@angular/core';
import {Feature} from "geojson";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-marker-popup',
  templateUrl: './marker-popup.component.html',
  styles: [],
  imports: [
    RouterLink,
    NgForOf
  ],
  standalone: true
})
export class MarkerPopupComponent {

  @Input() feature: Feature | undefined;

  elementRef: ElementRef;

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }


}

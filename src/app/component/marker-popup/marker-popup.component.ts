import {Component, ElementRef, input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Feature} from "geojson";

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

  public feature = input<Feature>();

  elementRef: ElementRef;

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }


}

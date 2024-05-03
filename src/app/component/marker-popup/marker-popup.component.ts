import {Component, ElementRef, Input, TrackByFunction} from '@angular/core';
import {Feature} from "geojson";
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-marker-popup',
  templateUrl: './marker-popup.component.html',
  styleUrls: ['./marker-popup.component.scss'],
  imports: [
    RouterLink,
    NgForOf
  ],
  standalone: true
})
export class MarkerPopupComponent {

  @Input() feature: Feature | undefined;

  elementRef: ElementRef;
  trackByFn = (index: number, feature : Feature) => feature.id;

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }


}

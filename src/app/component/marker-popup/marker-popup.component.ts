import {ChangeDetectionStrategy, Component, computed, ElementRef, input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";
import {Feature} from "geojson";
import {JourneyData} from "../journey-card-view/journey.data";
import {JourneyCardViewComponent} from "../journey-card-view/journey-card-view.component";
import {DEFAULT_CATEGORY, DEFAULT_THUMBNAIL} from "../../model/core/journey.model";

@Component({
  selector: 'app-marker-popup',
  templateUrl: './marker-popup.component.html',
  styles: `
  ::ng-deep .leaflet-popup-content {
    min-width: 15rem !important;
  }
  `,
  imports: [
    RouterLink,
    NgForOf,
    JourneyCardViewComponent
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkerPopupComponent {

  public feature = input<Feature>();
  journeyData = computed<JourneyData>(() => new JourneyData(
    '' + this.feature()?.id,
    this.feature()?.properties?.['name'] ?? '',
    this.feature()?.properties?.['title'] ?? '',
    this.feature()?.properties?.['category'] ?? DEFAULT_CATEGORY,
    this.feature()?.properties?.['journeyDate'] ?? '',
    this.feature()?.properties?.['tags'] ?? [],
    this.feature()?.properties?.['thumbnail'] ?? DEFAULT_THUMBNAIL,
  ));

  elementRef: ElementRef;

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }


}

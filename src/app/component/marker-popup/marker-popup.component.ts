import {ChangeDetectionStrategy, Component, computed, ElementRef, inject, input} from '@angular/core';
import {Feature} from "geojson";
import {JourneyData} from "../journey-card-view/journey.data";
import {JourneyCardViewComponent} from "../journey-card-view/journey-card-view.component";
import {DEFAULT_CATEGORY, DEFAULT_THUMBNAIL} from "../../model/core/journey.model";

@Component({
    selector: 'app-marker-popup',
    template: '<app-journey-card-view [journey]="journeyData()"></app-journey-card-view>',
    styles: `
    :host {
      display: block;
      width: min(22rem, calc(100vw - 2rem));
    }
  `,
    imports: [
        JourneyCardViewComponent
    ],
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

  constructor() {
    this.elementRef = inject(ElementRef);
  }


}

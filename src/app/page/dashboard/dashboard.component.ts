import {ChangeDetectionStrategy, Component, computed, inject, signal} from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page.info.model";
import {WorldMapComponent} from "../../component/world-map/world-map.component";
import {FeatureCollection} from "geojson";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {JourneyService} from "../../service/journey/journey.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";
import {JourneyCalendarViewComponent} from "../../component/journey-calendar-view/journey-calendar-view.component";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {JourneyCardViewComponent} from "../../component/journey-card-view/journey-card-view.component";
import {JourneyData} from "../../component/journey-card-view/journey.data";
import {DEFAULT_CATEGORY, DEFAULT_THUMBNAIL} from "../../model/core/journey.model";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styles: [],
  imports: [
    PageHeaderComponent,
    WorldMapComponent,
    MatButtonToggleModule,
    MatIconModule,
    FormsModule,
    JourneyCalendarViewComponent,
    MatTooltipModule,
    JourneyCardViewComponent
  ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
  private readonly journeyService = inject(JourneyService);
  viewType = signal<'map'|'calendar'>('map');

  featureCollection = toSignal(this.journeyService.getAllJourneysAsGeoJson());
  totalJourneys = computed(() => this.featureCollection()?.features.length ?? 0);
  totalCountry = computed(() => this.uniqueJourneysByProperty(this.featureCollection(), 'country'));
  totalPlaces = computed(() => this.uniqueJourneysByProperty(this.featureCollection(), 'city'));
  recentMemories = computed<JourneyData[]>(() => (this.featureCollection()?.features ?? [])
    .filter(feature => feature.id !== undefined && feature.properties?.['journeyDate'])
    .map(feature => new JourneyData(
      String(feature.id),
      String(feature.properties?.['name'] ?? 'Untitled journey'),
      String(feature.properties?.['title'] ?? feature.properties?.['city'] ?? feature.properties?.['country'] ?? 'Somewhere memorable'),
      String(feature.properties?.['category'] ?? DEFAULT_CATEGORY),
      String(feature.properties?.['journeyDate']),
      Array.isArray(feature.properties?.['tags']) ? feature.properties?.['tags'] : [],
      String(feature.properties?.['thumbnail'] ?? DEFAULT_THUMBNAIL)
    ))
    .sort((first, second) => Date.parse(second.journeyDate) - Date.parse(first.journeyDate))
    .slice(0, 4));

  private uniqueJourneysByProperty(featureCollection: FeatureCollection | undefined, property: string) {
    if (!featureCollection) {
      return 0;
    }

    return new Set(
      featureCollection.features
        .map(feature => feature.properties?.[property])
        .filter(value => value !== undefined && value !== null && value !== '')
        .map(String)
    ).size;
  }

}

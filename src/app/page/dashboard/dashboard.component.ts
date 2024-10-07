import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page.info.model";
import {WorldMapComponent} from "../../component/world-map/world-map.component";
import {FeatureCollection} from "geojson";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {JourneyService} from "../../service/journey/journey.service";
import {NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {toSignal} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    PageHeaderComponent,
    WorldMapComponent,
    NgIf,
    MatProgressSpinner
  ],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;

  private journeyService = inject(JourneyService);

  featureCollection = toSignal(this.journeyService.getAllJourneysAsGeoJson());
  totalJourneys = computed(() => this.featureCollection()?.features.length);
  totalPlaces = computed(() => this.uniqueJourneysByProperty(this.featureCollection(), 'location'));
  totalCountry = computed(() => this.uniqueJourneysByProperty(this.featureCollection(), 'country'))
  totalCity = computed(() => this.uniqueJourneysByProperty(this.featureCollection(), 'city'))

  private uniqueJourneysByProperty(featureCollection: FeatureCollection | undefined, property: string) {
    return featureCollection?.features
      .filter(feature => feature.properties?.[property])
      .filter((feature, i, arr) =>
        arr.findIndex(f =>
          JSON.stringify(f.properties?.[property]) === JSON.stringify(feature.properties?.[property])) === i
      ).length;
  }

}

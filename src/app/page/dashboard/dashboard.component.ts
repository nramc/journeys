import {Component, OnInit} from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page.info.model";
import {WorldMapComponent} from "../../component/world-map/world-map.component";
import {FeatureCollection} from "geojson";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {JourneyService} from "../../service/journey/journey.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatProgressSpinner} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    PageHeaderComponent,
    WorldMapComponent,
    NgIf,
    AsyncPipe,
    MatProgressSpinner
  ],
  standalone: true
})
export class DashboardComponent implements OnInit {
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
  // Tip: Async pipe can not be used due to popup maker component view initialisation hook
  featureCollection: FeatureCollection | undefined;
  stats: Map<string, number> = new Map<string, number>()
  isLoadingResults: boolean = true;

  constructor(
    private journeyService: JourneyService) {
  }

  ngOnInit(): void {

    this.journeyService.getAllJourneysAsGeoJson()
      .subscribe(data => this.onFetchSuccessCallback(data));
  }

  onFetchSuccessCallback(featureCollection: FeatureCollection) {
    this.featureCollection = featureCollection;
    this.collectStats(featureCollection);
    this.isLoadingResults = false;
  }

  collectStats(featureCollection: FeatureCollection) {
    this.stats.set("Journeys", featureCollection.features.length);
    this.stats.set("Places", this.uniqueJourneysByProperty(featureCollection, 'location'));
    this.stats.set("Country", this.uniqueJourneysByProperty(featureCollection, 'country'));
    this.stats.set("City", this.uniqueJourneysByProperty(featureCollection, 'city'));
  }

  private uniqueJourneysByProperty(featureCollection: FeatureCollection, property: string) {
    return featureCollection.features
      .filter(feature => feature.properties?.[property])
      .filter((feature, i, arr) =>
        arr.findIndex(f =>
          JSON.stringify(f.properties?.[property]) === JSON.stringify(feature.properties?.[property])) === i
      ).length;
  }

}

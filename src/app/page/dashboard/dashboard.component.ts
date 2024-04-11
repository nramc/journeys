import {Component, OnInit} from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page-info";
import {WorldMapComponent} from "../../component/world-map/world-map.component";
import {FeatureCollection} from "geojson";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {JourneyService} from "../../service/journey/journey.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    PageHeaderComponent,
    WorldMapComponent
  ],
  standalone: true
})
export class DashboardComponent implements OnInit {
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
  featureCollection: FeatureCollection | undefined;

  constructor(private journeyService: JourneyService) {
  }

  ngOnInit(): void {

    this.journeyService.getAllJourneysAsGeoJson()
      .subscribe((featureCollections: FeatureCollection) => {
        this.featureCollection = featureCollections;
        console.log(this.featureCollection)
      });

  }


}

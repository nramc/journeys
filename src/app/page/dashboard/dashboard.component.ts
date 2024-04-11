import {Component, OnInit} from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page-info";
import {WorldMapComponent} from "../../component/world-map/world-map.component";
import {FeatureCollection} from "geojson";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {JourneyService} from "../../service/journey/journey.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports: [
    PageHeaderComponent,
    WorldMapComponent,
    NgIf,
    AsyncPipe
  ],
  standalone: true
})
export class DashboardComponent implements OnInit {
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
  // Tip: Async pipe can not be used due to popup maker component view initialisation hook
  featureCollection: FeatureCollection | undefined;

  constructor(
    private journeyService: JourneyService) {
  }

  ngOnInit(): void {
    this.journeyService.getAllJourneysAsGeoJson()
      .subscribe(data => this.featureCollection = data);
  }

}

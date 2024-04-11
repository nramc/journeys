import {Component, OnInit, ViewChild} from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page-info";
import {WorldMapComponent} from "../../component/world-map/world-map.component";
import {FeatureCollection} from "geojson";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";
import {JourneyService} from "../../service/journey/journey.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {Observable} from "rxjs";

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
  featureCollection$: Observable<FeatureCollection> | undefined;

  constructor(
    private journeyService: JourneyService) {
  }

  ngOnInit(): void {
    this.featureCollection$ = this.journeyService.getAllJourneysAsGeoJson();
  }

}

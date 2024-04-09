import {Component, OnInit, ViewChild} from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page-info";
import * as L from "leaflet";
import {LocationService} from "../../service/location.service";
import {WorldMapComponent} from "../../component/world-map/world-map.component";
import {FeatureCollection} from "geojson";
import {PageHeaderComponent} from "../../component/page-header/page-header.component";

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
  private map!: L.Map;
  @ViewChild(WorldMapComponent) worldMapComponent!: WorldMapComponent;
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;
  featureCollection: FeatureCollection | undefined;

  constructor(private locationService: LocationService) {
  }

  ngOnInit(): void {

    // Fetch all available location and store it
    this.locationService.getAllAvailableLocations()
      .subscribe((featureCollections: FeatureCollection) => {
        this.featureCollection = featureCollections;
      });

  }

  onMapInitializationComplete(map: L.Map) {
    this.map = map;
    this.centerMapBasedOnUserCurrentLocation();

  }

  private centerMapBasedOnUserCurrentLocation() {
    // Try to get user's current location and based on the location centre div to provide better visualisation
    navigator.geolocation.getCurrentPosition(
      (location) => this.map?.setView([location.coords.latitude, location.coords.longitude], 5),
      (err) => console.warn(err)
    );
  }


}

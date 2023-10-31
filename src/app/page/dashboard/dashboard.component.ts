import {Component, ViewChild} from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page-info";
import * as L from "leaflet";
import {LocationService} from "../../service/location.service";
import {Location} from "../../model/location.model";
import {WorldMapComponent} from "../../component/world-map/world-map.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private map!: L.Map;
  @ViewChild(WorldMapComponent) worldMapComponent!: WorldMapComponent;
  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;

  constructor(private locationService: LocationService) {
  }

  onMapInitializationComplete(map: L.Map) {
    this.map = map;
    this.centerMapBasedOnUserCurrentLocation();
    this.addAllLocationWithMarker();


  }

  private centerMapBasedOnUserCurrentLocation() {
    // Try to get user's current location and based on the location centre div to provide better visualisation
    navigator.geolocation.getCurrentPosition(
      (location) => this.map?.setView([location.coords.latitude, location.coords.longitude], 5),
      (err) => console.warn(err)
    );
  }

  private addAllLocationWithMarker() {
    this.locationService.getAllAvailableLocations()
      .subscribe((locations: Location[]) => locations.map(location => this.worldMapComponent.addMarkerWithPopup(location, this.map)));
  }
}

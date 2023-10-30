import { Component } from '@angular/core';
import {DASHBOARD_PAGE_INFO} from "../../model/page-info";
import * as L from "leaflet";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private map!: L.Map;

  protected readonly DASHBOARD_PAGE_INFO = DASHBOARD_PAGE_INFO;

  onMapInitializationComplete(map : L.Map) {
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

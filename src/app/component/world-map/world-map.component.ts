import {AfterViewInit, Component, EventEmitter, Output} from '@angular/core';
import * as L from 'leaflet';
import {LocationService} from "../../service/location.service";
import {Location} from "../../model/location.model";

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements AfterViewInit {
  private map!: L.Map;
  @Output() mapInitializedEvent = new EventEmitter<L.Map>();

  constructor(private locationService: LocationService) {
  }

  ngAfterViewInit(): void {
    this.initializeMap();
    this.mapInitializedEvent.emit(this.map);
  }

  private initializeMap(): void {

    this.map = L.map('map').fitWorld();

    L.control.scale().addTo(this.map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    this.locationService.getAllAvailableLocations()
      .subscribe((locations: Location[]) => locations.map(location => this.renderLocation(location, this.map)));


  }

  private renderLocation(location: Location, map: L.Map) {
    L.marker([location.latitude, location.longitude])
      .bindTooltip(location.name)
      .addTo(map);
  }



}

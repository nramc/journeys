import {AfterViewInit, Component} from '@angular/core';
import * as L from 'leaflet';

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
  private map: L.Map | undefined;


  private initMap(): void {
    this.map = L.map('map')
      .fitWorld()
      .setView([48.1230, 11.6634], 2);

    L.control.scale().addTo(this.map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(this.map);

    L.marker([48.1230, 11.6634])
      .bindTooltip("This is where i live")
      .addTo(this.map);

    L.circle([48.1230, 11.6634], {
      color: 'blue',
      fillColor: '#799ddb',
      fillOpacity: 0.5,
      radius: 5000
    })
      .bindTooltip("")
      .addTo(this.map);

    // Try to get user's current location and based on the location centre div to provide better visualisation
    navigator.geolocation.getCurrentPosition(
      (location) => this.map?.setView([location.coords.latitude, location.coords.longitude], 5),
      (err) => console.warn(err)
    );


  }

  ngAfterViewInit(): void {
    this.initMap();
  }

}

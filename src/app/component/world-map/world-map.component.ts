import {AfterViewInit, Component, EventEmitter, Output, ViewChild, ViewContainerRef} from '@angular/core';
import * as L from 'leaflet';
import {Location} from "../../model/location.model";
import {MarkerPopupComponent} from "../marker-popup/marker-popup.component";

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
  @ViewChild("markerPopupViewContainer", {read: ViewContainerRef}) markerPopupViewContainerRef: ViewContainerRef | undefined;


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


  }

  addMarkerWithPopup(location: Location, map: L.Map) {
    let popupComponent = this.markerPopupViewContainerRef?.createComponent(MarkerPopupComponent);
    popupComponent!.instance.location = location;

    L.marker([location.latitude, location.longitude])
      .bindTooltip(location.name)
      .bindPopup(popupComponent?.instance.elementRef.nativeElement)
      .addTo(map);
  }


}

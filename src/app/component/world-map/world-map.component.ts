import {
  AfterViewInit,
  booleanAttribute,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input,
  numberAttribute,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import * as L from 'leaflet';
import {Layer} from 'leaflet';
import 'leaflet.fullscreen';
import {MarkerPopupComponent} from "../marker-popup/marker-popup.component";
import {Feature, GeoJsonObject} from "geojson";
import {getIcon} from "../../config/icon-config";


const iconDefault = L.icon({
  iconRetinaUrl: 'assets/marker-icon-2x.png',
  iconUrl: 'assets/marker-icon.png',
  shadowUrl: 'assets/marker-shadow.png',
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
  styleUrls: ['./world-map.component.scss'],
  standalone: true
})
export class WorldMapComponent implements AfterViewInit {
  private elementRef: ElementRef = inject(ElementRef);
  private map: L.Map | undefined;
  private geoJsonLayer: L.GeoJSON | undefined;

  @Output() mapInitializedEvent = new EventEmitter<L.Map>();
  @ViewChild("markerPopupViewContainer", {read: ViewContainerRef}) markerPopupViewContainerRef: ViewContainerRef | undefined;

  #featureCollection: GeoJsonObject | undefined;

  @Input("geoJsonData")
  set geoJsonData(geoJsonData: GeoJsonObject | undefined) {
    this.#featureCollection = geoJsonData;
    this.addGeoJsonData(geoJsonData);
  }

  @Input({transform: booleanAttribute}) enablePopup: boolean = false;
  @Input({transform: numberAttribute}) zoomIn: number = 4;
  @Input({transform: numberAttribute}) maxZoom: number = 10;
  @Input({required: false}) iconType: string | undefined = undefined;


  ngAfterViewInit(): void {
    this.initializeMap();
    this.mapInitializedEvent.emit(this.map);
  }

  private initializeMap(): void {

    this.map = L.map(this.elementRef.nativeElement.querySelector("div.map-renderer"),
      {
        // @ts-ignore
        fullscreenControl: true,
        forceSeparateButton: true,
        fullscreenControlOptions: {
          position: 'topleft'
        }
      })
      .fitWorld()
      .zoomIn(this.zoomIn);

    L.control.scale().addTo(this.map);

    this.addTileLayers();
    this.addGeoJsonLayer();
  }

  private addTileLayers() {
    if (this.map) {
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(this.map);
    }
  }

  private addGeoJsonData(geoJsonData: GeoJsonObject | undefined) {
    if (this.geoJsonLayer) {
      this.geoJsonLayer?.clearLayers();
    }

    if (geoJsonData) {
      this.geoJsonLayer?.addData(geoJsonData);
      this.geoJsonLayer?.setZIndex(this.zoomIn);
      setTimeout(() => this.flyToBound(), 1000);
    }
  }

  private flyToBound() {
    let bounds = this.geoJsonLayer?.getBounds();
    if (bounds) {
      this.map?.flyToBounds(bounds, {maxZoom: this.maxZoom});
    }
  }

  private addGeoJsonLayer() {

    const getPopupComponentNativeElement = (feature: Feature) => {
      let popupComponent = this.markerPopupViewContainerRef?.createComponent(MarkerPopupComponent);
      popupComponent!.setInput('feature', feature);
      return popupComponent?.instance.elementRef.nativeElement;
    }

    if (this.map) {

      const isPopupRequired = this.enablePopup;
      this.geoJsonLayer = L.geoJSON(this.#featureCollection, {
        pointToLayer: (feature, latlng) => {
          return L.marker(latlng, {
            icon: getIcon(feature, this.iconType)
          })
        },
        onEachFeature: function (feature: Feature, layer: Layer) {
          if (isPopupRequired) {
            layer.bindPopup(getPopupComponentNativeElement(feature));
          }
          let featureName = feature.properties?.['name'];
          if (featureName) {
            layer.bindTooltip(featureName);
          }
        }
      })
        .addTo(this.map);

    } else {
      console.warn("Unable to create GeoJson Layer. Cause:Map is not yet initialised")
    }
  }

}

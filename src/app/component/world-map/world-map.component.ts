import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  input,
  output,
  viewChild,
  ViewContainerRef
} from '@angular/core';
import * as L from 'leaflet';
import {Layer} from 'leaflet';
import 'leaflet.fullscreen';
import {MaptilerLayer} from "@maptiler/leaflet-maptilersdk";
import {GeocodingControl} from "@maptiler/geocoding-control/leaflet";
import {MarkerPopupComponent} from "../marker-popup/marker-popup.component";
import {Feature, GeoJsonObject, Geometry, Point} from "geojson";
import {getIcon} from "../../config/icon-config";
import {environment} from "../../../environments/environment";
import {takeUntilDestroyed, toObservable} from "@angular/core/rxjs-interop";
import {GeoCodingFeature} from "./geo-coding-feature";
import {merge} from "rxjs";
import {ThemeService} from "../../service/theme/theme.service";


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

export interface GeoCodingLocationData {
  name: string;
  location: Point;
  state: string | undefined;
  country: string | undefined;
}

export interface GeoCodingAreaData {
  name: string;
  area: Geometry;
}

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styles: [],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorldMapComponent implements AfterViewInit {
  private readonly elementRef: ElementRef = inject(ElementRef);
  private map: L.Map | undefined;
  private geoJsonLayer: L.GeoJSON | undefined;

  themeService = inject(ThemeService);

  geoJsonData = input<GeoJsonObject | undefined>(undefined);
  markerPopupViewContainerRef = viewChild.required('markerPopupViewContainer', {read: ViewContainerRef});
  enablePopup = input<boolean>(false);
  zoomIn = input<number>(4);
  maxZoom = input<number>(10);
  iconType = input<string>("default");

  // GeoCoding properties
  enableGeoCoding = input<boolean>(false);
  location = output<GeoCodingLocationData>();
  area = output<GeoCodingAreaData>();

  constructor() {
    merge(toObservable(this.geoJsonData), toObservable(this.iconType))
      .pipe(takeUntilDestroyed())
      .subscribe({
        next: _ => {
          this.addGeoJsonData(this.geoJsonData())
        }
      })
  }

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  private initializeMap(): void {

    this.map = L.map(this.elementRef.nativeElement.querySelector("div.map-renderer"),
      {
        // @ts-expect-error 3rd party plugin used for fullscreen support
        fullscreenControl: true,
        forceSeparateButton: true,
        fullscreenControlOptions: {
          position: 'topleft'
        }
      })
      .fitWorld()
      .zoomIn(this.zoomIn());

    L.control.scale().addTo(this.map);
    new MaptilerLayer({
      apiKey: environment.maptilerKey,
      style: this.themeService.isDarkMode() ? `https://api.maptiler.com/maps/d5592658-7af1-476b-bb9d-483a28703d79/style.json?key=${environment.maptilerKey}` : ''
    }).addTo(this.map);

    if (this.enableGeoCoding()) {
      this.enableGeoCodingSearch();
    }


    this.addTileLayers();
    this.addGeoJsonLayer();
  }

  private enableGeoCodingSearch() {
    // https://docs.maptiler.com/sdk-js/modules/geocoding/api/usage/leaflet/
    // https://docs.maptiler.com/sdk-js/modules/geocoding/api/api-reference/#event:pick
    if (this.map) {
      const geocodingControl = new GeocodingControl({
        apiKey: environment.maptilerKey,
        class: 'text-primary',
        debounceSearch: 1000,
        language: "en",
        markerOnSelected: false,
        marker: false,
      });
      this.map.addControl(geocodingControl);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      geocodingControl.on("pick", (eventData: any) => {
        this.emitGeoCodingData(new GeoCodingFeature(
          eventData.feature['place_name'],
          eventData.feature['geometry'],
          eventData.feature['context']
        ))
      });
    }
  }

  private emitGeoCodingData(geoCodingFeatures: GeoCodingFeature) {
    if (geoCodingFeatures.location != null) {
      this.location.emit({
        name: geoCodingFeatures.name,
        location: geoCodingFeatures.location,
        state: geoCodingFeatures.state,
        country: geoCodingFeatures.country
      });
    } else if (geoCodingFeatures.area != null) {
      this.area.emit({
        area: geoCodingFeatures.area,
        name: geoCodingFeatures.name
      })
    } else {
      console.log('No Area and location detected:', geoCodingFeatures);
    }
  }

  private addTileLayers() {
    if (this.map) {
      L.tileLayer(`https://api.maptiler.com/maps/streets-v2/style.json?key=${environment.maptilerKey}`, {
        tileSize: 512,
        zoomOffset: -1,
        minZoom: 2,
        maxZoom: 19,
        crossOrigin: true,
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
      this.geoJsonLayer?.setZIndex(this.zoomIn());
      setTimeout(() => this.flyToBound(), 1000);
    }
  }

  private flyToBound() {
    const bounds = this.geoJsonLayer?.getBounds();
    if (bounds) {
      this.map?.flyToBounds(bounds, {maxZoom: this.maxZoom(), paddingTopLeft: [25, 25]});
    }
  }

  private addGeoJsonLayer() {

    const getPopupComponentNativeElement = (feature: Feature) => {
      const popupComponent = this.markerPopupViewContainerRef().createComponent(MarkerPopupComponent);
      popupComponent.setInput('feature', feature);
      return popupComponent?.instance.elementRef.nativeElement;
    }

    if (this.map) {

      const isPopupRequired = this.enablePopup();
      this.geoJsonLayer = L.geoJSON(this.geoJsonData(), {
        pointToLayer: (feature, latlng) => {
          return L.marker(latlng, {
            icon: getIcon(feature, this.iconType())
          })
        },
        onEachFeature: function (feature: Feature, layer: Layer) {
          if (isPopupRequired) {
            layer.bindPopup(getPopupComponentNativeElement(feature));
          }
          const featureName = feature.properties?.['name'];
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

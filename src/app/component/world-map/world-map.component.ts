import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  inject,
  Input, numberAttribute,
  Output,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import * as L from 'leaflet';
import {Layer} from 'leaflet';
import {MarkerPopupComponent} from "../marker-popup/marker-popup.component";
import {Feature, GeoJsonObject} from "geojson";
import {iconHome} from "./custom-icons.type";


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
    styleUrls: ['./world-map.component.scss']
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

    @Input() disablePopup: boolean = false;
    @Input({transform: numberAttribute}) zoomIn: number = 4;


    ngAfterViewInit(): void {
        this.initializeMap();
        this.mapInitializedEvent.emit(this.map);
    }

    private initializeMap(): void {

        this.map = L.map(this.elementRef.nativeElement.querySelector("div.map-renderer")).fitWorld()
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
        if (geoJsonData) {
            this.geoJsonLayer?.addData(geoJsonData);
            this.geoJsonLayer?.setZIndex(this.zoomIn)
        } else {
            this.geoJsonLayer?.clearLayers();
        }
    }

    private addGeoJsonLayer() {

        const getPopupComponentNativeElement = (feature: Feature) => {
            let popupComponent = this.markerPopupViewContainerRef?.createComponent(MarkerPopupComponent);
            popupComponent!.instance.feature = feature;
            return popupComponent?.instance.elementRef.nativeElement;
        }

        const bindPopupIfRequired = (layer: Layer, feature: Feature) => {
            if (!this.disablePopup) {
                layer.bindTooltip(feature.properties?.['name']);
                layer.bindPopup(getPopupComponentNativeElement(feature))
            }
        }

        if (this.map) {

            this.geoJsonLayer = L.geoJSON(this.#featureCollection, {
                pointToLayer: (feature, latlng) => {
                    return L.marker(latlng, {
                        icon: iconHome,
                    })
                },
                onEachFeature: function (feature: Feature, layer: Layer) {
                    bindPopupIfRequired(layer, feature);
                }
            })
                .addTo(this.map);

        } else {
            console.warn("Unable to create GeoJson Layer. Cause:Map is not yet initialised")
        }
    }

}

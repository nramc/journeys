import * as L from "leaflet";
import {Feature} from "geojson";

export const SUPPORTED_ICONS: string[] = ['default', 'home', 'flight', 'temple'];

export const iconHome = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-primary fs-5'>home</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export const iconVisited = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-primary fs-5'>check</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export const iconDefault = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-primary fs-5'>check</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export function getIcon(feature: Feature, iconType: string = 'default') {
  console.log("getIcon()", feature, iconType);
  if (feature?.properties?.["icon"]) {
    return getIconForType(feature?.properties?.["icon"]);
  } else if (iconType) {
    return getIconForType(iconType);
  } else {
    return iconDefault;
  }
}

function getIconForType(iconType: string) {
  if (SUPPORTED_ICONS.indexOf(iconType) == -1) {
    return iconDefault;
  } else {
    switch (iconType) {
      case "default":
        return iconDefault;
      case "home":
        return iconHome;
      case "flight":
        return iconHome;
      case "temple":
        return iconHome;

      default:
        return iconDefault;
    }
  }

}

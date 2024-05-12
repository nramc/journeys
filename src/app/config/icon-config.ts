import * as L from "leaflet";
import {Feature} from "geojson";

export const SUPPORTED_ICONS: string[] = ['default', 'adventure', 'shopping', 'park', 'restaurant', 'home', 'flight', 'temple', 'favorite', 'love'];

export const iconHome = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-primary fs-5'>home</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
export const iconFlight = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-primary fs-5'>flight</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
export const iconRestaurant = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-primary fs-5'>restaurant</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
export const iconTemple = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons small text-primary fs-5'>temple_hindu</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
export const iconAdventure = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-primary fs-5'>public</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
export const iconPark = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-success fs-5'>park</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export const iconFavorite = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-primary fs-5'>star</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export const iconLove = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-danger fs-5'>favorite</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export const iconShopping = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-success fs-5'>local_mall</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export const iconDefault = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-primary fs-5'>navigation</i></div>",
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
      case "favorite":
        return iconFavorite;
      case "love":
        return iconLove;
      case "home":
        return iconHome;
      case "restaurant":
        return iconRestaurant;
      case "flight":
        return iconFlight;
      case "temple":
        return iconTemple;
      case "adventure":
        return iconAdventure;
      case "park":
        return iconPark;
      case "shopping":
        return iconShopping;
      default:
        return iconDefault;
    }
  }

}

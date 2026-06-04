import * as L from "leaflet";
import {Feature} from "geojson";

export const SUPPORTED_ICONS: string[] = ['default', 'adventure', 'shopping', 'funny', 'park', 'restaurant', 'home', 'flight', 'temple', 'favorite', 'love'];

export const CATEGORY_ICONS: Record<string, string> = {
  'default': 'place',
  'adventure': 'explore',
  'shopping': 'local_mall',
  'funny': 'mood',
  'park': 'park',
  'restaurant': 'restaurant',
  'home': 'home',
  'flight': 'flight',
  'temple': 'temple_hindu',
  'favorite': 'star',
  'love': 'favorite'
};

/**
 * Human-friendly display labels for each journey category.
 * Includes an emoji prefix for quick visual recognition in the UI.
 */
export const CATEGORY_LABELS: Record<string, string> = {
  'default': 'Journey',
  'adventure': 'Adventure',
  'shopping': 'Shopping',
  'funny': 'Fun & Humor',
  'park': 'Parks & Nature',
  'restaurant': 'Dining',
  'home': 'Home',
  'flight': 'Travel & Flights',
  'temple': 'Temples & Heritage',
  'favorite': 'Favorites',
  'love': 'Love & Romance'
};

/** Returns a user-friendly label for a category key, falling back to the raw value if unknown. */
export function getCategoryLabel(category: string | undefined): string {
  const key = category?.toLowerCase() ?? 'default';
  return CATEGORY_LABELS[key] ?? (category ?? 'General');
}

export const iconHome = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-blue-700 fs-5'>home</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
export const iconFlight = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-blue-700 fs-5'>flight</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
export const iconRestaurant = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-blue-700 fs-5'>restaurant</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
export const iconTemple = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons small text-blue-700 fs-5'>temple_hindu</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
export const iconAdventure = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-blue-700 fs-5'>explore</i></div>",
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
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-blue-700 fs-5'>star</i></div>",
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
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-blue-700 fs-5'>local_mall</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export const iconFunny = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-info fs-5'>mood</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export const iconDefault = L.divIcon({
  className: 'custom-div-icon',
  html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-blue-700 fs-5'>location_on</i></div>",
  iconSize: [30, 42],
  iconAnchor: [15, 42],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

export function getIcon(feature: Feature, iconType = 'default') {
  if (feature?.properties?.["icon"]) {
    return getIconForType(feature?.properties?.["icon"]);
  } else if (iconType) {
    return getIconForType(iconType);
  } else {
    return iconDefault;
  }
}

function getIconForType(iconType: string) {
  if (SUPPORTED_ICONS.includes(iconType)) {
    return iconDefault;
  } else {
    switch (iconType) {
      case "default":
        return iconDefault;
      case "journey":
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
      case "funny":
        return iconFunny;
      default:
        return iconDefault;
    }
  }

}

export function getCategoryIconName(category: string | undefined): string {
  return CATEGORY_ICONS[category?.toLowerCase() ?? 'default'] ?? 'place';
}

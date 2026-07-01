import { Feature } from "geojson";
import * as L from "leaflet";
import { DivIcon } from "leaflet";

export interface IconConfig {
  iconName: string;
  label: string;
  category: string;
}

const defaultIconConfig: IconConfig = { iconName: 'place', label: 'Default', category: 'default' };

export const ICON_CONFIGS: IconConfig[] = [
  { iconName: 'place', label: 'Default', category: 'default' },
  { iconName: 'rocket', label: 'Adventure', category: 'adventure' },
  { iconName: 'travel_explore', label: 'Explore', category: 'explore' },
  { iconName: 'local_mall', label: 'Shopping', category: 'shopping' },
  { iconName: 'mood', label: 'Fun & Humor', category: 'funny' },
  { iconName: 'park', label: 'Parks & Nature', category: 'park' },
  { iconName: 'restaurant', label: 'Dining', category: 'restaurant' },
  { iconName: 'home', label: 'Home', category: 'home' },
  { iconName: 'flight', label: 'Travel & Flights', category: 'flight' },
  { iconName: 'temple_hindu', label: 'Temples & Heritage', category: 'temple' },
  { iconName: 'diamond', label: 'Favorites', category: 'favorite' },
  { iconName: 'favorite', label: 'Love & Romance', category: 'love' },
  { iconName: 'event', label: 'Events & Festivals', category: 'event' },
  { iconName: 'flag', label: 'Special Memories', category: 'memory' },
  { iconName: 'wb_incandescent', label: 'Reflections & Thoughts', category: 'reflection' },
  { iconName: 'star_shine', label: 'Wishlist', category: 'wishlist' }
];


function getIconByName(iconName: string): DivIcon {
  return L.divIcon({
    className: 'custom-div-icon',
    html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons text-blue-700 fs-5'>" + iconName + "</i></div>",
    iconSize: [30, 42],
    iconAnchor: [15, 42],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
}

export function getIcon(feature: Feature, category = 'default'): DivIcon {
  if (feature?.properties?.["category"]) {
    return getIconByCategory(feature?.properties?.["category"]);
  } else if (category) {
    return getIconByCategory(category);
  } else {
    return getIconByCategory('default');
  }
}

function getIconByCategory(category: string): DivIcon {
  const requestedIcon = ICON_CONFIGS.find(config => config.category === (category?.toLowerCase() ?? 'default'))?.iconName ?? 'place';
  return getIconByName(requestedIcon);
}


export function getIconConfigByCategory(category: string | undefined): IconConfig {
  const key = category?.toLowerCase() ?? 'default';
  return ICON_CONFIGS.find(config => config.category === key) ?? defaultIconConfig;
}


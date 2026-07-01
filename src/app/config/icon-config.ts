import { Feature } from "geojson";
import * as L from "leaflet";
import { DivIcon } from "leaflet";

export interface IconConfig {
  iconName: string;
  label: string;
  category: string;
  color: string;
}

const defaultIconConfig: IconConfig = { iconName: 'place', label: 'Default', category: 'default', color: '#64748B' };

export const ICON_CONFIGS: IconConfig[] = [
  { iconName: 'place', label: 'Default', category: 'default', color: '#1447E6' },
  { iconName: 'rocket', label: 'Adventure', category: 'adventure', color: '#F97316' },
  { iconName: 'travel_explore', label: 'Explore', category: 'explore', color: '#0EA5E9' },
  { iconName: 'local_mall', label: 'Shopping', category: 'shopping', color: '#EC4899' },
  { iconName: 'mood', label: 'Fun & Humor', category: 'funny', color: '#FACC15' },
  { iconName: 'park', label: 'Parks & Nature', category: 'park', color: '#22C55E' },
  { iconName: 'restaurant', label: 'Dining', category: 'restaurant', color: '#EA580C' },
  { iconName: 'home', label: 'Home', category: 'home', color: '#3B82F6' },
  { iconName: 'flight', label: 'Travel & Flights', category: 'flight', color: '#38BDF8' },
  { iconName: 'temple_hindu', label: 'Temples & Heritage', category: 'temple', color: '#CA8A04' },
  { iconName: 'diamond', label: 'Favorites', category: 'favorite', color: '#06B6D4' },
  { iconName: 'favorite', label: 'Love & Romance', category: 'love', color: '#EF4444' },
  { iconName: 'event', label: 'Events & Festivals', category: 'event', color: '#A855F7' },
  { iconName: 'flag', label: 'Special Memories', category: 'memory', color: '#14B8A6' },
  { iconName: 'wb_incandescent', label: 'Reflections & Thoughts', category: 'reflection', color: '#F59E0B' },
  { iconName: 'star_shine', label: 'Wishlist', category: 'wishlist', color: '#EAB308' }
];


function getIconByName(iconConfig: IconConfig): DivIcon {
  return L.divIcon({
    className: 'custom-div-icon',
    html: "<div class='marker-icon-wrapper'><div class='marker-pin'></div><i class='material-icons fs-5' style='color: " + iconConfig.color + "'>" + iconConfig.iconName + "</i></div>",
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
  const requestedIcon = ICON_CONFIGS.find(config => config.category === (category?.toLowerCase() ?? 'default')) ?? defaultIconConfig;
  return getIconByName(requestedIcon);
}


export function getIconConfigByCategory(category: string | undefined): IconConfig {
  const key = category?.toLowerCase() ?? 'default';
  return ICON_CONFIGS.find(config => config.category === key) ?? defaultIconConfig;
}


import {Feature, Geometry} from "geojson";
import {Location} from "../model/location.model";

export function convertFeatureToLocation(feature: Feature): Location<Geometry> {
  return {
    type: feature.type,
    id: feature.id as string,
    name: feature.properties?.['name'],
    geometry: feature.geometry,
    rawProperties: feature.properties,
    events: feature.properties?.['events'],
    feature: feature
  };

}

import {Feature, GeoJsonProperties, Geometry} from "geojson";

export interface LocationEvent {
  name: string,
  images?: string[],
  videos?: string[]
}

export interface Location<G extends Geometry, P = GeoJsonProperties> {
  id: string,
  name: string,
  type: string,
  geometry: G,
  rawProperties: P,
  events: LocationEvent[],
  feature: Feature,
  tags: string[],
  thumbnail: string
}

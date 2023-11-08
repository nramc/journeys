import {Geometry} from "geojson";
import {LatLng, LatLngExpression} from "leaflet";


export function getLatLangToFocus(geometry: Geometry): LatLngExpression {
    switch (geometry.type) {
        case "Point":
            return new LatLng(geometry.coordinates[1], geometry.coordinates[0]);
        case "MultiPoint":
        case "LineString":
        case "MultiLineString":
        case "Polygon":
        case "MultiPolygon":
        case "GeometryCollection":
        default:
            // map center
            return new LatLng(0, 0);
    }

}

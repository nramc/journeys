import * as L from "leaflet";

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

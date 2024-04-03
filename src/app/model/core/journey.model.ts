import {GeoJSON, Geometry} from "geojson";

export class Journey {
  constructor(
    public id: string = '',
    public name: string = '',
    public title: string = '',
    public description: string = '',
    public city: string = '',
    public country: string = '',
    public journeyDate: string = '',
    public category: string = '',
    public tags: string[] = [],
    public thumbnail: string = 'default',
    public location: Geometry | undefined = undefined,
    public extendedDetails: JourneyExtendedDetails| undefined = new JourneyExtendedDetails()
  ) {
  }
}

export class JourneyExtendedDetails {
  constructor(
    public geoDetails: JourneyGeoDetails | undefined = new JourneyGeoDetails(undefined),
    public imageDetails: JourneyImageDetails | undefined = new JourneyImageDetails()
  ) {
  }
}

export class JourneyGeoDetails {
  constructor(
    public geoJson: GeoJSON | undefined) {
  }
}

export class JourneyImageDetails {
  constructor(
    public images: JourneyImageDetail[] = []
  ) {
  }
}

export class JourneyImageDetail {
  constructor(
    public url: string,
    public assetId: string
  ) {
  }

}

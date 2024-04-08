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
    public thumbnail: string = 'https://res.cloudinary.com/journeytogether/image/upload/v1712604194/journey/aeqhy3zwrwko7ba2rinr.jpg',
    public location: Geometry | undefined = undefined,
    public extendedDetails: JourneyExtendedDetails | undefined = new JourneyExtendedDetails(),
    public isPublished: boolean = false
  ) {
  }
}

export class JourneyExtendedDetails {
  constructor(
    public geoDetails: JourneyGeoDetails | undefined = new JourneyGeoDetails(undefined),
    public imagesDetails: JourneyImagesDetails | undefined = new JourneyImagesDetails(),
    public videosDetails: JourneyVideosDetails | undefined = new JourneyVideosDetails()
  ) {
  }
}

export class JourneyGeoDetails {
  constructor(
    public geoJson: GeoJSON | undefined) {
  }
}

export class JourneyImagesDetails {
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

export class JourneyVideosDetails {
  constructor(public videos: JourneyVideoDetail[] = []) {
  }
}

export class JourneyVideoDetail {
  constructor(public videoId: string) {
  }
}

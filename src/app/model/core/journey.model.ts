import {GeoJSON, Point} from "geojson";

export const DEFAULT_THUMBNAIL = 'https://res.cloudinary.com/journeytogether/image/upload/v1712604194/journey/readonly/aeqhy3zwrwko7ba2rinr.jpg';
export const DEFAULT_CATEGORY = 'default';

export class Journey {
  constructor(
    public id = '',
    public name = '',
    public description = '',
    public journeyDate = '',
    public tags: string[] = [],
    public thumbnail: string = DEFAULT_THUMBNAIL,
    public geoDetails: JourneyGeoDetails | undefined = new JourneyGeoDetails(),
    public imagesDetails: JourneyImagesDetails | undefined = new JourneyImagesDetails(),
    public videosDetails: JourneyVideosDetails | undefined = new JourneyVideosDetails(),
    public isPublished = false,
    public visibilities: string[] = []
  ) {
  }
}

export class JourneyGeoDetails {
  constructor(
    public title = '',
    public city = '',
    public country = '',
    public category = 'default',
    public location: Point | undefined = undefined,
    public geoJson: GeoJSON | undefined = undefined) {
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
    public assetId: string,
    public publicId = '',
    public title = '',
    public isFavorite = false,
    public isThumbnail = false,
    public eventDate = ''
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

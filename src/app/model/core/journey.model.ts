import {Geometry} from "geojson";

export class Journey {
  constructor(
    public id: string = '',
    public name: string = '',
    public title: string = '',
    public description: string = '',
    public city: string = '',
    public country: string = '',
    public category: string = '',
    public tags: string[] = ['travel', 'initial'],
    public thumbnail: string = 'default',
    public location: Geometry = {
      type: "Point",
      coordinates: [48.183160038296585, 11.53090747669896]

    }
  ) {
  }
}

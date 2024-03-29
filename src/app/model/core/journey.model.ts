import {Geometry} from "geojson";

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
    public location: Geometry | undefined = undefined
  ) {
  }
}

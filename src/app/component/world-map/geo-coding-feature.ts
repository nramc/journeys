import {Geometry, MultiPolygon, Point} from "geojson";

export class GeoCodingFeature {
  public name: string;
  public location: Point | undefined;
  public area: MultiPolygon | undefined;
  public state: string | undefined;
  public country: string | undefined;

  constructor(
    private place_name: string,
    private geometry: Geometry,
    private context: GeoCodingContext[] = []
  ) {
    this.name = this.place_name;
    this.location = this.geometry?.type === "Point" ? this.geometry : undefined;
    this.area = this.geometry?.type === "MultiPolygon" ? this.geometry : undefined;
    this.state = this.context.find(ctx => ctx.kind === 'admin_area' && ctx.id?.startsWith('region'))?.text;
    this.country = this.context.find(ctx => ctx.kind === 'admin_area' && ctx.id?.startsWith('country'))?.text;
  }

}

export class GeoCodingContext {
  constructor(
    public id: string,
    public kind: string,
    public text: string
  ) {
  }
}

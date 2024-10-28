import {DEFAULT_CATEGORY, DEFAULT_THUMBNAIL} from "../../model/core/journey.model";

export class JourneyData {
  constructor(
    public id = '',
    public name = '',
    public title = '',
    public category = DEFAULT_CATEGORY,
    public journeyDate = '',
    public tags: string[] = [],
    public thumbnail: string = DEFAULT_THUMBNAIL,
  ) {
  }
}

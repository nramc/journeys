import {Journey} from "../../model/core/journey.model";

export interface JourneyPage {
  content: Journey[],
  totalElements: number,
  totalPages: number,
  numberOfElements: number
}

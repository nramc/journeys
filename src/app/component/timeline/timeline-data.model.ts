import {Journey} from '../../model/core/journey.model';

export interface TimelineV2Response {
  heading: string;
  journeys: Journey[];
}

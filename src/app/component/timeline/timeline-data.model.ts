export interface TimelineData {
  heading?: string,
  title?: string,
  images: TimelineImage[]
}

export interface TimelineImage {
  title?: string,
  src: string,
  caption?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  args?: any
}

// ── Timeline V2 models (rich journey-level entries) ──
import {Journey} from '../../model/core/journey.model';

export interface TimelineV2Response {
  heading: string;
  journeys: Journey[];
}

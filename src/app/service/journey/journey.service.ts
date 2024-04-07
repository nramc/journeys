import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Journey, JourneyGeoDetails, JourneyImagesDetails, JourneyVideosDetails} from "../../model/core/journey.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {JourneyPage} from "./journey-page.type";


@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  constructor(private httpClient: HttpClient) {
  }

  createJourney(journey: Journey): Observable<Journey> {
    return this.httpClient.post<Journey>(environment.journeyApi + '/journey', journey);
  }

  getAllJourneys(params: HttpParams): Observable<JourneyPage> {
    return this.httpClient.get<JourneyPage>(environment.journeyApi + '/journeys', {params: params});
  }

  getJourneyById(id: string): Observable<Journey> {
    return this.httpClient.get<Journey>(environment.journeyApi + '/journey/' + id);
  }

  saveJourneyBasicDetails(journey: Journey): Observable<Journey> {
    return this.httpClient.put<Journey>(environment.journeyApi + '/journey/' + journey.id, journey,
      {
        headers: {'Content-Type': 'application/vnd.journey.api.basic.v1+json'}
      });
  }

  saveJourneyGeoDetails(journey: Journey, geoDetails: JourneyGeoDetails): Observable<Journey> {
    return this.httpClient.put<Journey>(environment.journeyApi + '/journey/' + journey.id, geoDetails,
      {
        headers: {'Content-Type': 'application/vnd.journey.api.geo.v1+json'}
      });
  }

  saveJourneyImagesDetails(journey: Journey, imagesDetails: JourneyImagesDetails): Observable<Journey> {
    return this.httpClient.put<Journey>(environment.journeyApi + '/journey/' + journey.id, imagesDetails,
      {
        headers: {'Content-Type': 'application/vnd.journey.api.images.v1+json'}
      });
  }

  saveJourneyVideosDetails(journey: Journey, videosDetails: JourneyVideosDetails): Observable<Journey> {
    return this.httpClient.put<Journey>(environment.journeyApi + '/journey/' + journey.id, videosDetails,
      {
        headers: {'Content-Type': 'application/vnd.journey.api.videos.v1+json'}
      });
  }

}

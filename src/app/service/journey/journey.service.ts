import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Journey, JourneyGeoDetails, JourneyImagesDetails, JourneyVideosDetails} from "../../model/core/journey.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {JourneyPage} from "./journey-page.type";
import {FeatureCollection} from "geojson";
import {SortDirection} from "@angular/material/sort";
import {AuthService} from "../auth/auth.service";


@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  createJourney(journey: Journey): Observable<Journey> {
    let userContext = this.authService.getCurrentUserContext();

    return this.httpClient.post<Journey>(
      environment.journeyApi + '/journey', journey,
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`}
      }
    );
  }

  findJourneyByQuery(
    queryString: string,
    sort: string,
    order: SortDirection,
    page: number,
    pageSize: number,
    publishedOnly: boolean,
    tags: string[] = []
  ): Observable<JourneyPage> {
    let params = new HttpParams();
    params = params.set("q", queryString);
    params = params.set("sort", sort);
    params = params.set("order", order.toUpperCase());
    params = params.set("pageIndex", page);
    params = params.set("pageSize", pageSize);
    params = params.set("publishedOnly", publishedOnly);
    params = params.set("tags", tags.join(','));
    console.log(params)

    return this.getAllJourneys(params);
  }

  getAllJourneys(params: HttpParams): Observable<JourneyPage> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<JourneyPage>(environment.journeyApi + '/journeys',
      {
        params: params,
        headers: {'Authorization': `Bearer ${userContext.accessToken}`}
      });
  }

  getAllJourneysAsGeoJson(): Observable<FeatureCollection> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<FeatureCollection>(environment.journeyApi + '/journeys/published',
      {
        headers: {
          'Accept': 'application/geo+json',
          'Authorization': `Bearer ${userContext.accessToken}`
        }
      });
  }

  getJourneyById(id: string): Observable<Journey> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<Journey>(environment.journeyApi + '/journey/' + id, {
      headers: {'Authorization': `Bearer ${userContext.accessToken}`}
    });
  }

  saveJourneyBasicDetails(journey: Journey): Observable<Journey> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.put<Journey>(environment.journeyApi + '/journey/' + journey.id, journey,
      {
        headers: {
          'Content-Type': 'application/vnd.journey.api.basic.v1+json',
          'Authorization': `Bearer ${userContext.accessToken}`
        }
      });
  }

  saveJourneyGeoDetails(journey: Journey, geoDetails: JourneyGeoDetails): Observable<Journey> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.put<Journey>(environment.journeyApi + '/journey/' + journey.id, geoDetails,
      {
        headers: {
          'Content-Type': 'application/vnd.journey.api.geo.v1+json',
          'Authorization': `Bearer ${userContext.accessToken}`
        }
      });
  }

  saveJourneyImagesDetails(journey: Journey, imagesDetails: JourneyImagesDetails): Observable<Journey> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.put<Journey>(environment.journeyApi + '/journey/' + journey.id, imagesDetails,
      {
        headers: {
          'Content-Type': 'application/vnd.journey.api.images.v1+json',
          'Authorization': `Bearer ${userContext.accessToken}`
        }
      });
  }

  saveJourneyVideosDetails(journey: Journey, videosDetails: JourneyVideosDetails): Observable<Journey> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.put<Journey>(environment.journeyApi + '/journey/' + journey.id, videosDetails,
      {
        headers: {
          'Content-Type': 'application/vnd.journey.api.videos.v1+json',
          'Authorization': `Bearer ${userContext.accessToken}`
        }
      });
  }

  publishJourney(journey: Journey): Observable<Journey> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.put<Journey>(environment.journeyApi + '/journey/' + journey.id, journey,
      {
        headers: {
          'Content-Type': 'application/vnd.journey.api.publish.v1+json',
          'Authorization': `Bearer ${userContext.accessToken}`
        }
      });
  }
}

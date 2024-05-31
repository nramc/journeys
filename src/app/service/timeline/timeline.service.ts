import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {TimelineData} from "../../component/timeline/timeline-data.model";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {


  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  getTimeline(): Observable<TimelineData> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`}
      });
  }

  getTimelineForUpcomingEvents(): Observable<TimelineData> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'upcoming': 'true'
        }
      });
  }

  getTimelineForJourney(journeyId: string): Observable<TimelineData> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'IDs': journeyId
        }
      });
  }

  getTimelineForCity(city: string): Observable<TimelineData> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'city': city
        }
      });
  }

  getTimelineForCountry(country: string): Observable<TimelineData> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'country': country
        }
      });
  }

  getTimelineForCategory(category: string): Observable<TimelineData> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'category': category
        }
      });
  }
}

import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {TimelineData} from "../../component/timeline/timeline-data.model";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);

  getTimelineForUpcomingJourniversaries(numberOfDays: number): Observable<TimelineData> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'upcoming': numberOfDays
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

  getTimelineForYear(year: string): Observable<TimelineData> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'year': year
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

  getTimelineForToday(): Observable<TimelineData> {
    let userContext = this.authService.getCurrentUserContext();

    if (userContext.isAuthenticated) {
      return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
        {
          headers: {
            'Authorization': `Bearer ${userContext.accessToken}`,
            'X-Async-Process': 'true'
          },
          params: {
            'today': true
          }
        });
    }
    return of()
  }
}

import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable, of} from "rxjs";
import {environment} from "../../../environments/environment";
import {TimelineData, TimelineV2Response} from "../../component/timeline/timeline-data.model";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);

  // ── V1 endpoints (basic entries) ──

  getTimelineForUpcomingJourniversaries(numberOfDays: number): Observable<TimelineData> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'upcoming': numberOfDays
        }
      });
  }

  getTimelineForJourney(journeyId: string): Observable<TimelineData> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'IDs': journeyId
        }
      });
  }

  getTimelineForCity(city: string): Observable<TimelineData> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'city': city
        }
      });
  }

  getTimelineForCountry(country: string): Observable<TimelineData> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'country': country
        }
      });
  }

  getTimelineForYear(year: string): Observable<TimelineData> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'year': year
        }
      });
  }

  getTimelineForCategory(category: string): Observable<TimelineData> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineData>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params: {
          'category': category
        }
      });
  }

  getTimelineForToday(): Observable<TimelineData> {
    const userContext = this.authService.getCurrentUserContext();

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

  // ── V2 endpoints (rich journey-level entries) ──

  getTimelineV2ForUpcomingJourniversaries(numberOfDays: number): Observable<TimelineV2Response> {
    return this.getTimelineV2({upcoming: numberOfDays.toString()});
  }

  getTimelineV2ForPastJourniversaries(fromDate: string, toDate: string): Observable<TimelineV2Response> {
    return this.getTimelineV2({fromDate, toDate});
  }

  getTimelineV2ForJourney(journeyId: string): Observable<TimelineV2Response> {
    return this.getTimelineV2({IDs: journeyId});
  }

  getTimelineV2ForCity(city: string): Observable<TimelineV2Response> {
    return this.getTimelineV2({city});
  }

  getTimelineV2ForCountry(country: string): Observable<TimelineV2Response> {
    return this.getTimelineV2({country});
  }

  getTimelineV2ForYear(year: string): Observable<TimelineV2Response> {
    return this.getTimelineV2({year});
  }

  getTimelineV2ForCategory(category: string): Observable<TimelineV2Response> {
    return this.getTimelineV2({category});
  }

  private getTimelineV2(params: Record<string, string>): Observable<TimelineV2Response> {
    const userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<TimelineV2Response>(environment.journeyApi + '/timeline/v2',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params
      });
  }
}

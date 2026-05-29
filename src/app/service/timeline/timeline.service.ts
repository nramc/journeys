import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {TimelineV2Response} from "../../component/timeline/timeline-data.model";

@Injectable({
  providedIn: 'root'
})
export class TimelineService {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);

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
    return this.httpClient.get<TimelineV2Response>(environment.journeyApi + '/timeline',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`},
        params
      });
  }
}

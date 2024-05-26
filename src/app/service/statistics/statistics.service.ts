import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Statistics} from "./statistics.type";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {
  }

  getStatistics(): Observable<Statistics> {
    let userContext = this.authService.getCurrentUserContext();
    return this.httpClient.get<Statistics>(environment.journeyApi + '/journeys/statistics',
      {
        headers: {'Authorization': `Bearer ${userContext.accessToken}`}
      });
  }

}

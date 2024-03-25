import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Journey} from "../model/core/journey.model";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class JourneyService {
  constructor(private httpClient: HttpClient) {
  }

  createJourney(journey: Journey): Observable<Journey> {
    return this.httpClient.post<Journey>(environment.journeyApi + '/journey', journey);
  }

}

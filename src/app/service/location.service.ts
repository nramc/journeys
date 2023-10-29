import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Location} from "../model/location.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  #location_url = '/assets/data/data.json';

  constructor(private httpClient: HttpClient) {
  }

  getAllAvailableLocations(): Observable<Location[]> {
    return this.httpClient.get<Location[]>(this.#location_url);
  }
}

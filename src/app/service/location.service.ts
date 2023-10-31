import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FeatureCollection} from "geojson";

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  #data_url = '/assets/data/data.geojson.json';

  constructor(private httpClient: HttpClient) {
  }

  getAllAvailableLocations(): Observable<FeatureCollection> {
    console.log("called")
    return this.httpClient.get<FeatureCollection>(this.#data_url);
  }
}

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Feature, FeatureCollection} from "geojson";

@Injectable({
    providedIn: 'root'
})
export class LocationService {
    #data_url = '/assets/data/data.geo.json';

    constructor(private httpClient: HttpClient) {
    }

    getAllAvailableLocations(): Observable<FeatureCollection> {
        return this.httpClient.get<FeatureCollection>(this.#data_url);
    }

    getLocationById(id: string): Observable<Feature | undefined> {
        return this.httpClient.get<FeatureCollection>(this.#data_url)
            .pipe(map(data => data.features.find(f => f.id == id)))

    }
}

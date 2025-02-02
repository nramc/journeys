import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable, shareReplay, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {BffApiVersion} from "./bff-api-version.model";

@Injectable({
  providedIn: 'root'
})
export class BffService {
  private readonly httpClient = inject(HttpClient)
  private _isAvailable = false;

  getVersion(): Observable<BffApiVersion> {
    return this.httpClient.get<BffApiVersion>(environment.journeyApi + '/version', {
      headers: {
        'X-Async-Process': 'true'
      }
    })
      .pipe(shareReplay(1), tap(_ => this._isAvailable = true));
  }

  isAvailable(): Observable<boolean> {
    return this.getVersion().pipe(map(data => data?.version != null));
  }

  isAvailableNow(): boolean {
    return this._isAvailable;
  }


}

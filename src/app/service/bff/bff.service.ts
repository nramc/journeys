import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {environment} from "../../../environments/environment";
import {BffApiVersion} from "./bff-api-version.model";

@Injectable({
  providedIn: 'root'
})
export class BffService {
  private readonly httpClient = inject(HttpClient)

  getVersion(): Observable<BffApiVersion> {
    return this.httpClient.get<BffApiVersion>(environment.journeyApi + '/version', {
      headers: {
        'X-Async-Process': 'true'
      }
    })
      .pipe(shareReplay(1));
  }
}

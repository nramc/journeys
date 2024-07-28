import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {environment} from "../../../environments/environment";
import {BffApiVersion} from "./bff-api-version.model";

@Injectable({
  providedIn: 'root'
})
export class BffService {

  constructor(private httpClient: HttpClient) {
  }

  getVersion(): Observable<BffApiVersion> {
    return this.httpClient.get<BffApiVersion>(environment.journeyApi + '/version')
      .pipe(shareReplay(1));
  }
}

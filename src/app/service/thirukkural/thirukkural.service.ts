import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {Thirukkural} from "./thirukkural.type";

@Injectable({
  providedIn: 'root'
})
export class ThirukkuralService {
  private readonly httpClient = inject(HttpClient)

  getDailyKural(): Observable<Thirukkural> {
    return this.httpClient.get<Thirukkural>('https://tamil-kural-api.vercel.app/api/daily', {
      headers: {
        'X-Async-Process': 'true'
      }
    })
      .pipe(shareReplay(1));
  }

  getRandomKural(): Observable<Thirukkural> {
    return this.httpClient.get<Thirukkural>('https://tamil-kural-api.vercel.app/api/random', {
      headers: {
        'X-Async-Process': 'true'
      }
    })
      .pipe(shareReplay(1));
  }

  getKuralById(kuralId: number): Observable<Thirukkural> {
    return this.httpClient.get<Thirukkural>(`https://tamil-kural-api.vercel.app/api/kural/${kuralId}`, {
      headers: {
        'X-Async-Process': 'true'
      }
    })
      .pipe(shareReplay(1));
  }
}

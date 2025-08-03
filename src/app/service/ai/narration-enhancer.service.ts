import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

export interface JourneyEnhancerRequest {
  narration: string;
  tone: string;
}

export interface JourneyEnhancerResponse {
  narration: string;
  tone: string
}

@Injectable({
  providedIn: 'root'
})
export class NarrationEnhancerService {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);

  enhance(request: JourneyEnhancerRequest): Observable<JourneyEnhancerResponse> {
    const userContext = this.authService.getCurrentUserContext();

    return this.httpClient.post<JourneyEnhancerResponse>(
      environment.journeyApi + '/ai/enhance-narration', request,
      {
        headers: {
          'Authorization': `Bearer ${userContext.accessToken}`,
          'Content-Type': 'application/json'
        },
      }
    );
  }

}

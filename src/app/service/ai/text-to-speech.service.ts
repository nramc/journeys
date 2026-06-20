import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../auth/auth.service";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

/**
 * Request interface for TTS synthesis
 */
export interface TextToSpeechRequest {
  text: string;
  voice?: string;
  lengthScale?: number;
  noiseScale?: number;
  noiseWScale?: number;
}

/**
 * Service for text-to-speech synthesis using REST API
 * Returns audio as Blob which can be played using Audio API
 */
@Injectable({
  providedIn: 'root'
})
export class TextToSpeechService {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);

  /**
   * Synthesize text to speech
   * @param request Text to speech request with text and optional voice parameters
   * @returns Observable of Blob containing the audio data (WAV format)
   */
  synthesize(request: TextToSpeechRequest): Observable<Blob> {
    const userContext = this.authService.getCurrentUserContext();

    return this.httpClient.post(
      `${environment.journeyBaseUrl}/api/tts/synthesize`,
      request,
      {
        headers: {
          'Authorization': `Bearer ${userContext.accessToken}`,
          'Content-Type': 'application/json',
          'X-Async-Process': 'true'
        },
        responseType: 'blob'
      }
    );
  }
}

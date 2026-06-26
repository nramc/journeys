import {DestroyRef, inject, Injectable} from '@angular/core';
import {EnglishTtsService} from './english-tts.service';
import {TamilTtsService} from './tamil-tts.service';

export {TamilTtsState} from './tamil-tts.service';
export {EnglishTtsState} from './english-tts.service';

/**
 * Facade over the language-specific narration services.
 *
 * Delegates to {@link EnglishTtsService} (Web Speech API) and
 * {@link TamilTtsService} (Chrome AI translation + ta-IN speech), exposing a
 * single combined API and their reactive state signals. Because both languages
 * share the global `speechSynthesis` queue, starting one always stops the other.
 */
@Injectable({providedIn: 'root'})
export class LocalTtsService {
  private readonly english = inject(EnglishTtsService);
  private readonly tamil = inject(TamilTtsService);
  private readonly destroyRef = inject(DestroyRef);

  // ── Re-exposed reactive state ─────────────────────────────────────────────────
  readonly englishState = this.english.state;
  readonly tamilState = this.tamil.state;
  readonly tamilStatusLabel = this.tamil.statusLabel;

  constructor() {
    this.destroyRef.onDestroy(() => this.stopAll());
  }

  /** Narrate the given text in English. */
  speakEnglish(text: string): void {
    this.stopAll();
    this.english.speak(text);
  }

  /** Translate the given text to Tamil and narrate it. */
  speakTamil(text: string): void {
    this.stopAll();
    this.tamil.speak(text);
  }

  /** Stop any English or Tamil narration. */
  stopAll(): void {
    this.english.stop();
    this.tamil.stop();
  }
}

import {Injectable, signal} from '@angular/core';
import {onVoicesReady, selectBestVoice, splitIntoSentences} from './speech.util';

export type EnglishTtsState = 'idle' | 'playing' | 'error';

/**
 * English narration via the browser's built-in Web Speech API.
 * Zero download, instant playback. Speaks sentence-by-sentence using the
 * best available English voice with a warm storytelling prosody.
 */
@Injectable({providedIn: 'root'})
export class EnglishTtsService {
  readonly state = signal<EnglishTtsState>('idle');

  private bestVoice: SpeechSynthesisVoice | null = null;

  constructor() {
    onVoicesReady(voices => {
      this.bestVoice = selectBestVoice(voices, ['en-GB', 'en-US', 'en']);
    });
  }

  /** Speaks the given plain text in English. Cancels any current narration. */
  speak(text: string): void {
    this.stop();
    if (!text.trim()) return;

    const sentences = splitIntoSentences(text);
    if (!sentences.length) return;

    this.state.set('playing');
    this.speakSentences(sentences, 0);
  }

  /** Stops English narration and resets state. */
  stop(): void {
    if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
    this.state.set('idle');
  }

  private speakSentences(sentences: string[], index: number): void {
    if (index >= sentences.length) {
      this.state.set('idle');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(sentences[index]);
    utterance.lang = this.bestVoice?.lang ?? 'en-US';
    // Warmer, more natural storytelling prosody (slightly slower, gentle pitch)
    utterance.rate = 0.92;
    utterance.pitch = 1.05;
    utterance.volume = 1;
    if (this.bestVoice) utterance.voice = this.bestVoice;

    utterance.onend = () => this.speakSentences(sentences, index + 1);
    utterance.onerror = (e) => {
      if (e.error !== 'canceled') this.state.set('error');
    };

    speechSynthesis.speak(utterance);
  }
}


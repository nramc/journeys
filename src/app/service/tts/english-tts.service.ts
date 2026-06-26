import {Injectable, signal} from '@angular/core';
import {buildCaption, onVoicesReady, selectBestVoice, splitIntoSentences, SpokenCaption} from './speech.util';

export type EnglishTtsState = 'idle' | 'playing' | 'error';

/**
 * English narration via the browser's built-in Web Speech API.
 * Zero download, instant playback. Speaks sentence-by-sentence using the
 * best available English voice with a warm storytelling prosody.
 */
@Injectable({providedIn: 'root'})
export class EnglishTtsService {
  readonly state = signal<EnglishTtsState>('idle');
  /** Live karaoke caption for the sentence currently being spoken. */
  readonly caption = signal<SpokenCaption | null>(null);

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
    this.caption.set(null);
  }

  private speakSentences(sentences: string[], index: number): void {
    if (index >= sentences.length) {
      this.state.set('idle');
      this.caption.set(null);
      return;
    }
    const sentence = sentences[index];
    const utterance = new SpeechSynthesisUtterance(sentence);
    utterance.lang = this.bestVoice?.lang ?? 'en-US';
    // Warmer, more natural storytelling prosody (slightly slower, gentle pitch)
    utterance.rate = 0.92;
    utterance.pitch = 1.05;
    utterance.volume = 1;
    if (this.bestVoice) utterance.voice = this.bestVoice;

    utterance.onstart = () => this.caption.set({text: sentence, wordStart: 0, wordEnd: 0});
    utterance.onboundary = (e) => {
      if (e.name === 'word') this.caption.set(buildCaption(sentence, e));
    };
    utterance.onend = () => this.speakSentences(sentences, index + 1);
    utterance.onerror = (e) => {
      if (e.error !== 'canceled') this.state.set('error');
    };

    speechSynthesis.speak(utterance);
  }
}


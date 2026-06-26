import {Injectable, signal} from '@angular/core';
import {onVoicesReady, selectBestVoice, splitIntoSentences} from './speech.util';

// ── Chrome AI Translator API types ───────────────────────────────────────────
// The stable API (Chrome 138+) exposes a global `Translator` object.
// These types are not yet in the standard TypeScript DOM lib.
interface ChromeAITranslator {
  translate(text: string): Promise<string>;
  destroy(): void;
}
interface ChromeAITranslatorAPI {
  availability(opts: {sourceLanguage: string; targetLanguage: string}): Promise<'unavailable' | 'downloadable' | 'downloading' | 'available'>;
  create(opts: {
    sourceLanguage: string;
    targetLanguage: string;
    signal?: AbortSignal;
    monitor?: (m: EventTarget) => void;
  }): Promise<ChromeAITranslator>;
}

/**
 * Shape of the global scope locations where Chrome exposes the Translator API.
 * - Stable (Chrome 138+): global `Translator`.
 * - Legacy Origin-Trial builds: `ai.translator` / `translation`.
 */
interface TranslatorGlobals {
  Translator?: ChromeAITranslatorAPI;
  ai?: {translator?: ChromeAITranslatorAPI};
  translation?: ChromeAITranslatorAPI;
}

export type TamilTtsState =
  | 'idle'
  | 'loading-model'
  | 'translating'
  | 'playing'
  | 'error';

// ── Expressive prosody ────────────────────────────────────────────────────────
// The native ta-IN voice ("Vani") has a high, fast, monotone baseline.
// We slow it down, deepen it, and — crucially — vary pitch & rate per sentence
// based on punctuation so the narration sounds emotional instead of robotic.
// Tweak these base values to taste (valid range: rate 0.1–10, pitch 0–2).
const TAMIL_BASE_RATE = 0.78;
const TAMIL_BASE_PITCH = 0.82;

interface Prosody {
  rate: number;
  pitch: number;
}

/**
 * Computes expressive prosody for a Tamil sentence from its content and
 * punctuation, so questions rise, exclamations gain energy, and longer
 * descriptive sentences slow down slightly for a warm storytelling cadence.
 */
function computeTamilProsody(text: string, index: number): Prosody {
  let rate = TAMIL_BASE_RATE;
  let pitch = TAMIL_BASE_PITCH;

  const trimmed = text.trim();
  const last = trimmed.at(-1);

  if (last === '?') {
    // Questions: gentle rising intonation
    pitch += 0.12;
    rate += 0.02;
  } else if (last === '!') {
    // Exclamations: more energy and lift
    pitch += 0.1;
    rate += 0.06;
  } else if (trimmed.length > 140) {
    // Long descriptive sentences: slow down a touch for clarity & warmth
    rate -= 0.04;
  }

  // Subtle alternating micro-variation breaks the monotone "robotic" feel
  pitch += index % 2 === 0 ? 0.02 : -0.02;

  // Clamp to the API's valid ranges
  rate = Math.min(2, Math.max(0.5, rate));
  pitch = Math.min(2, Math.max(0.1, pitch));

  return {rate, pitch};
}

/**
 * Tamil narration: translates English → Tamil with the Chrome AI Translator
 * API (Gemini Nano), then speaks each sentence via the native ta-IN voice
 * with expressive, clause-level prosody.
 */
@Injectable({providedIn: 'root'})
export class TamilTtsService {
  readonly state = signal<TamilTtsState>('idle');
  readonly statusLabel = signal('');

  private bestVoice: SpeechSynthesisVoice | null = null;
  private abortController: AbortController | null = null;
  private activeTranslator: ChromeAITranslator | null = null;
  private totalChunks = 0;
  private spokenChunks = 0;
  private allChunksDispatched = false;

  constructor() {
    onVoicesReady(voices => {
      this.bestVoice = selectBestVoice(voices, ['ta-IN', 'ta']);
    });
  }

  /** Translates and speaks the given English text in Tamil. */
  speak(text: string): void {
    this.stop();
    if (!text.trim()) return;
    void this.doSpeak(text);
  }

  /** Stops Tamil narration, aborts any in-flight translation, resets state. */
  stop(): void {
    this.abortController?.abort();
    this.abortController = null;
    this.activeTranslator?.destroy();
    this.activeTranslator = null;
    if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
    this.totalChunks = 0;
    this.spokenChunks = 0;
    this.allChunksDispatched = false;
    this.state.set('idle');
    this.statusLabel.set('');
  }

  // ── Internals ───────────────────────────────────────────────────────────────

  /** Resolves the Chrome AI Translator API handle from known global locations. */
  private resolveApi(): ChromeAITranslatorAPI | undefined {
    const g = globalThis as unknown as TranslatorGlobals;
    return g.Translator ?? g.ai?.translator ?? g.translation ?? undefined;
  }

  private async doSpeak(text: string): Promise<void> {
    const api = this.resolveApi();
    if (!api) {
      this.state.set('error');
      this.statusLabel.set(
        'தமிழ் narration needs the Chrome Translator API. ' +
        'Enable chrome://flags/#translation-api and restart Chrome.'
      );
      return;
    }

    const sentences = splitIntoSentences(text);
    if (!sentences.length) return;

    this.totalChunks = sentences.length;
    this.spokenChunks = 0;
    this.allChunksDispatched = false;

    this.abortController = new AbortController();
    const {signal} = this.abortController;

    try {
      const translator = await this.createTranslator(api, signal);
      if (!translator) return;

      this.activeTranslator = translator;
      this.state.set('translating');

      await this.translateAndSpeak(translator, sentences, signal);

      if (!signal.aborted) {
        this.allChunksDispatched = true;
        this.checkComplete();
      }

      translator.destroy();
      this.activeTranslator = null;

    } catch (err: unknown) {
      if ((err as {name?: string}).name === 'AbortError') return; // intentional stop
      this.state.set('error');
      this.statusLabel.set(err instanceof Error ? err.message : 'Tamil translation failed');
    }
  }

  /** Checks availability and creates a translator, updating status labels. */
  private async createTranslator(
    api: ChromeAITranslatorAPI,
    signal: AbortSignal
  ): Promise<ChromeAITranslator | null> {
    this.state.set('loading-model');
    this.statusLabel.set('Checking Tamil translator…');

    const availability = await api.availability({sourceLanguage: 'en', targetLanguage: 'ta'});
    if (signal.aborted) return null;

    if (availability === 'unavailable') {
      this.state.set('error');
      this.statusLabel.set(
        'Tamil translation is not available in this Chrome build. ' +
        'Enable it in chrome://flags or update Chrome.'
      );
      return null;
    }

    if (availability === 'downloadable' || availability === 'downloading') {
      this.statusLabel.set('Downloading Tamil model (one-time, ~40 MB)…');
    }

    const translator = await api.create({
      sourceLanguage: 'en',
      targetLanguage: 'ta',
      signal,
      monitor: (m) => {
        m.addEventListener('downloadprogress', (e) => {
          const evt = e as ProgressEvent;
          const pct = evt.total ? Math.round((evt.loaded / evt.total) * 100) : 0;
          this.statusLabel.set(`Downloading Tamil model… ${pct}%`);
        });
      }
    });

    if (signal.aborted) {
      translator.destroy();
      return null;
    }
    return translator;
  }

  /** Translates each sentence and speaks it via the native ta-IN voice. */
  private async translateAndSpeak(
    translator: ChromeAITranslator,
    sentences: string[],
    signal: AbortSignal
  ): Promise<void> {
    for (let i = 0; i < sentences.length; i++) {
      if (signal.aborted) break;

      this.statusLabel.set(`Translating ${i + 1} of ${sentences.length}…`);
      const tamilText = await translator.translate(sentences[i]);
      if (signal.aborted) break;

      if (tamilText.trim()) {
        this.queueUtterance(tamilText, i);
      } else {
        // Empty translation — count it so totals stay consistent
        this.spokenChunks++;
        this.checkComplete();
      }
    }
  }

  private queueUtterance(tamilText: string, index: number): void {
    // Split each sentence into clause-level segments so the engine inserts
    // natural pauses and pitch resets between clauses — the single biggest
    // gain in sounding expressive rather than flat.
    const segments = this.splitClauses(tamilText);

    segments.forEach((segment, segIdx) => {
      const utterance = new SpeechSynthesisUtterance(segment);
      utterance.lang = this.bestVoice?.lang ?? 'ta-IN';

      const {rate, pitch} = computeTamilProsody(segment, index + segIdx);
      utterance.rate = rate;
      utterance.pitch = pitch;
      utterance.volume = 1;
      if (this.bestVoice) utterance.voice = this.bestVoice;

      utterance.onstart = () => {
        this.state.set('playing');
        this.statusLabel.set('');
      };
      utterance.onerror = (e) => {
        if (e.error !== 'canceled') {
          this.state.set('error');
          this.statusLabel.set('Tamil speech failed');
        }
      };
      // Only the final segment of the sentence advances the spoken counter
      if (segIdx === segments.length - 1) {
        utterance.onend = () => {
          this.spokenChunks++;
          this.checkComplete();
        };
      }

      speechSynthesis.speak(utterance);
    });
  }

  /**
   * Splits a Tamil sentence into clause-level segments at commas, semicolons
   * and dashes. Short fragments are merged with their neighbour so the rhythm
   * stays natural.
   */
  private splitClauses(text: string): string[] {
    const parts = text
      .split(/(?<=[,;:—–])\s+/)
      .map(s => s.trim())
      .filter(Boolean);

    if (parts.length <= 1) return [text.trim()];

    const merged: string[] = [];
    for (const part of parts) {
      if (merged.length && part.length < 12) {
        merged[merged.length - 1] += ' ' + part;
      } else {
        merged.push(part);
      }
    }
    return merged;
  }

  private checkComplete(): void {
    if (this.allChunksDispatched && this.spokenChunks >= this.totalChunks) {
      this.state.set('idle');
      this.statusLabel.set('');
    }
  }
}


import {DestroyRef, inject, Injectable, signal} from '@angular/core';

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

// ── Public state types ────────────────────────────────────────────────────────

export type TamilTtsState =
  | 'idle'
  | 'loading-model'
  | 'translating'
  | 'playing'
  | 'error';

export type EnglishTtsState = 'idle' | 'playing' | 'error';

// ── Sentence splitter ─────────────────────────────────────────────────────────

function splitIntoSentences(text: string): string[] {
  const HARD_CAP = 280;

  const raw = text
    .split(/(?<=[.!?।])\s+(?=\S)/)
    .flatMap(s => s.split(/\n{2,}/))
    .map(s => s.trim())
    .filter(s => s.length > 0);

  const result: string[] = [];
  for (const sentence of raw) {
    if (sentence.length <= HARD_CAP) {
      result.push(sentence);
    } else {
      let remaining = sentence;
      while (remaining.length > HARD_CAP) {
        const idx = remaining.lastIndexOf(' ', HARD_CAP);
        const splitAt = idx > 50 ? idx : HARD_CAP;
        result.push(remaining.slice(0, splitAt).trim());
        remaining = remaining.slice(splitAt).trim();
      }
      if (remaining) result.push(remaining);
    }
  }
  return result.filter(s => s.length > 0);
}

// ── Service ───────────────────────────────────────────────────────────────────

@Injectable({providedIn: 'root'})
export class LocalTtsService {

  // ── Signals (public) ─────────────────────────────────────────────────────────
  readonly englishState = signal<EnglishTtsState>('idle');
  readonly tamilState = signal<TamilTtsState>('idle');
  readonly tamilStatusLabel = signal('');

  // ── English ──────────────────────────────────────────────────────────────────
  private bestEnglishVoice: SpeechSynthesisVoice | null = null;

  // ── Tamil ─────────────────────────────────────────────────────────────────────
  private bestTamilVoice: SpeechSynthesisVoice | null = null;
  private tamilAbortController: AbortController | null = null;
  private tamilTotalChunks = 0;
  private tamilSpokenChunks = 0;
  private tamilAllChunksDispatched = false;
  private activeTranslator: ChromeAITranslator | null = null;

  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    this.destroyRef.onDestroy(() => this.dispose());
    this.initVoices();
  }

  // ── English API ───────────────────────────────────────────────────────────────

  speakEnglish(text: string): void {
    this.stopAll();
    if (!text.trim()) return;

    const sentences = splitIntoSentences(text);
    if (!sentences.length) return;

    this.englishState.set('playing');
    this.speakEnglishSentences(sentences, 0);
  }

  // ── Tamil API ─────────────────────────────────────────────────────────────────

  speakTamil(text: string): void {
    this.stopAll();
    if (!text.trim()) return;
    void this.doSpeakTamil(text);
  }

  /** Stops any English or Tamil narration and resets all state. */
  stopAll(): void {
    if (typeof speechSynthesis !== 'undefined') speechSynthesis.cancel();
    this.englishState.set('idle');
    this.tamilAbortController?.abort();
    this.tamilAbortController = null;
    this.activeTranslator?.destroy();
    this.activeTranslator = null;
    this.tamilTotalChunks = 0;
    this.tamilSpokenChunks = 0;
    this.tamilAllChunksDispatched = false;
    this.tamilState.set('idle');
    this.tamilStatusLabel.set('');
  }

  // ── English internals ─────────────────────────────────────────────────────────

  private initVoices(): void {
    if (typeof speechSynthesis === 'undefined') return;
    const pick = () => {
      const voices = speechSynthesis.getVoices();
      this.bestEnglishVoice = this.selectBestVoice(voices, ['en-GB', 'en-US', 'en']);
      this.bestTamilVoice = this.selectBestVoice(voices, ['ta-IN', 'ta']);
    };
    pick();
    speechSynthesis.onvoiceschanged = pick;
  }

  /**
   * Picks the most natural-sounding voice for a list of preferred language
   * prefixes. Higher-quality neural / cloud voices (Google, Natural, Premium,
   * Enhanced, Siri) are scored above the default robotic local voices.
   */
  private selectBestVoice(
    voices: SpeechSynthesisVoice[],
    langPrefixes: string[]
  ): SpeechSynthesisVoice | null {
    // Names that indicate a modern neural / high-quality voice engine
    const PREMIUM_HINTS = [
      'google', 'natural', 'neural', 'premium', 'enhanced',
      'siri', 'wavenet', 'online', 'multilingual'
    ];
    // Known robotic legacy voices to avoid unless nothing else exists
    const ROBOTIC_HINTS = ['compact', 'eloquence', 'fred', 'albert', 'zarvox', 'flo', 'grandma'];

    const candidates = voices.filter(v =>
      langPrefixes.some(prefix => v.lang.toLowerCase().startsWith(prefix.toLowerCase()))
    );
    if (!candidates.length) return null;

    const score = (v: SpeechSynthesisVoice): number => {
      const name = v.name.toLowerCase();
      let s = 0;

      // Strongly prefer language-region exact matches in priority order
      const prefixRank = langPrefixes.findIndex(p => v.lang.toLowerCase().startsWith(p.toLowerCase()));
      if (prefixRank >= 0) s += (langPrefixes.length - prefixRank) * 10;

      // Premium / neural engines sound far more natural
      if (PREMIUM_HINTS.some(h => name.includes(h))) s += 100;

      // Cloud (network) voices are usually neural and higher quality
      if (!v.localService) s += 40;

      // Penalise known robotic legacy voices
      if (ROBOTIC_HINTS.some(h => name.includes(h))) s -= 80;

      // Slight preference for "natural"/female narration voices commonly
      // bundled on each OS (warmer for storytelling)
      if (/samantha|karen|moira|tessa|serena|allison|ava|joana|luciana/.test(name)) s += 20;

      return s;
    };

    // Copy before sorting to avoid mutating the input array
    return [...candidates].sort((a, b) => score(b) - score(a))[0] ?? null;
  }

  private speakEnglishSentences(sentences: string[], index: number): void {
    if (index >= sentences.length) {
      this.englishState.set('idle');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(sentences[index]);
    utterance.lang = this.bestEnglishVoice?.lang ?? 'en-US';
    // Warmer, more natural storytelling prosody (slightly slower, gentle pitch)
    utterance.rate = 0.92;
    utterance.pitch = 1.05;
    utterance.volume = 1;
    if (this.bestEnglishVoice) utterance.voice = this.bestEnglishVoice;
    utterance.onend = () => this.speakEnglishSentences(sentences, index + 1);
    utterance.onerror = (e) => {
      if (e.error !== 'canceled') this.englishState.set('error');
    };
    speechSynthesis.speak(utterance);
  }

  // ── Tamil internals ───────────────────────────────────────────────────────────

  /**
   * Resolves the Chrome AI Translator API handle from any of the known global
   * locations (stable global `Translator`, or legacy Origin-Trial locations).
   */
  private resolveTranslatorApi(): ChromeAITranslatorAPI | undefined {
    const g = globalThis as unknown as TranslatorGlobals;
    return g.Translator ?? g.ai?.translator ?? g.translation ?? undefined;
  }

  /**
   * Checks availability and creates a Tamil translator, updating status labels.
   * Returns the translator, or null if it is unavailable / aborted.
   */
  private async createTamilTranslator(
    api: ChromeAITranslatorAPI,
    signal: AbortSignal
  ): Promise<ChromeAITranslator | null> {
    this.tamilState.set('loading-model');
    this.tamilStatusLabel.set('Checking Tamil translator…');

    const availability = await api.availability({sourceLanguage: 'en', targetLanguage: 'ta'});
    if (signal.aborted) return null;

    if (availability === 'unavailable') {
      this.tamilState.set('error');
      this.tamilStatusLabel.set(
        'Tamil translation is not available in this Chrome build. ' +
        'Enable it in chrome://flags or update Chrome.'
      );
      return null;
    }

    if (availability === 'downloadable' || availability === 'downloading') {
      this.tamilStatusLabel.set('Downloading Tamil model (one-time, ~40 MB)…');
    }

    const translator = await api.create({
      sourceLanguage: 'en',
      targetLanguage: 'ta',
      signal,
      monitor: (m) => {
        m.addEventListener('downloadprogress', (e) => {
          const evt = e as ProgressEvent;
          const pct = evt.total ? Math.round((evt.loaded / evt.total) * 100) : 0;
          this.tamilStatusLabel.set(`Downloading Tamil model… ${pct}%`);
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

      this.tamilStatusLabel.set(`Translating ${i + 1} of ${sentences.length}…`);
      const tamilText = await translator.translate(sentences[i]);
      if (signal.aborted) break;

      if (tamilText.trim()) {
        this.queueTamilUtterance(tamilText);
      } else {
        // Empty translation — count it so totals stay consistent
        this.tamilSpokenChunks++;
        this.checkTamilComplete();
      }
    }
  }

  private async doSpeakTamil(text: string): Promise<void> {
    const api = this.resolveTranslatorApi();
    if (!api) {
      this.tamilState.set('error');
      this.tamilStatusLabel.set(
        'தமிழ் narration needs the Chrome Translator API. ' +
        'Enable chrome://flags/#translation-api and restart Chrome.'
      );
      return;
    }

    const sentences = splitIntoSentences(text);
    if (!sentences.length) return;

    this.tamilTotalChunks = sentences.length;
    this.tamilSpokenChunks = 0;
    this.tamilAllChunksDispatched = false;

    this.tamilAbortController = new AbortController();
    const {signal} = this.tamilAbortController;

    try {
      const translator = await this.createTamilTranslator(api, signal);
      if (!translator) return;

      this.activeTranslator = translator;
      this.tamilState.set('translating');

      await this.translateAndSpeak(translator, sentences, signal);

      if (!signal.aborted) {
        this.tamilAllChunksDispatched = true;
        this.checkTamilComplete();
      }

      translator.destroy();
      this.activeTranslator = null;

    } catch (err: unknown) {
      if ((err as {name?: string}).name === 'AbortError') return; // intentional stop
      this.tamilState.set('error');
      this.tamilStatusLabel.set(
        err instanceof Error ? err.message : 'Tamil translation failed'
      );
    }
  }

  private queueTamilUtterance(tamilText: string): void {
    const utterance = new SpeechSynthesisUtterance(tamilText);
    utterance.lang = this.bestTamilVoice?.lang ?? 'ta-IN';
    // The Tamil "Vani" voice has a naturally high-pitched, fast baseline that
    // sounds robotic. Lowering the pitch and slowing the rate makes it sound
    // calmer, deeper and far more natural for storytelling.
    utterance.rate = 0.62;
    utterance.pitch = 0.75;
    utterance.volume = 1;
    if (this.bestTamilVoice) utterance.voice = this.bestTamilVoice;

    utterance.onstart = () => {
      this.tamilState.set('playing');
      this.tamilStatusLabel.set('');
    };
    utterance.onend = () => {
      this.tamilSpokenChunks++;
      this.checkTamilComplete();
    };
    utterance.onerror = (e) => {
      if (e.error !== 'canceled') {
        this.tamilState.set('error');
        this.tamilStatusLabel.set('Tamil speech failed');
      }
    };

    speechSynthesis.speak(utterance);
  }

  private checkTamilComplete(): void {
    if (this.tamilAllChunksDispatched && this.tamilSpokenChunks >= this.tamilTotalChunks) {
      this.tamilState.set('idle');
      this.tamilStatusLabel.set('');
    }
  }

  private dispose(): void {
    this.stopAll();
  }
}


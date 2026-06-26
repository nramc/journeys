// src/app/service/tts/speech.util.ts
// Shared helpers for the Web Speech API based narration services.

/**
 * A live "karaoke" caption: the full text of the sentence/segment currently
 * being spoken, plus the character range of the word being spoken right now.
 */
export interface SpokenCaption {
  text: string;
  wordStart: number;
  wordEnd: number;
}

/**
 * Builds a {@link SpokenCaption} from a `boundary` SpeechSynthesis event.
 * Falls back to highlighting up to the next whitespace when the browser
 * does not provide `charLength`.
 */
export function buildCaption(text: string, e: SpeechSynthesisEvent): SpokenCaption {
  const start = e.charIndex ?? 0;
  let end = start + (e.charLength ?? 0);
  if (!e.charLength) {
    const nextSpace = text.indexOf(' ', start);
    end = nextSpace === -1 ? text.length : nextSpace;
  }
  return {text, wordStart: start, wordEnd: end};
}

/**
 * Splits text into sentence-level chunks, capping each chunk at a safe length
 * (split at a word boundary) so downstream translation / speech engines stay
 * within their input limits.
 */
export function splitIntoSentences(text: string): string[] {
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

/**
 * Picks the most natural-sounding voice for a list of preferred language
 * prefixes. Higher-quality neural / cloud voices (Google, Natural, Premium,
 * Enhanced, Siri) are scored above the default robotic local voices.
 */
export function selectBestVoice(
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

    // Slight preference for warm narration voices commonly bundled on each OS
    if (/samantha|karen|moira|tessa|serena|allison|ava|joana|luciana/.test(name)) s += 20;

    return s;
  };

  // Copy before sorting to avoid mutating the input array
  return [...candidates].sort((a, b) => score(b) - score(a))[0] ?? null;
}

/**
 * Registers a callback to (re)select voices, handling Chrome's deferred
 * voice loading. Uses `addEventListener` (not the single `onvoiceschanged`
 * property) so multiple independent services can each register their own
 * callback without overwriting one another.
 */
export function onVoicesReady(pick: (voices: SpeechSynthesisVoice[]) => void): void {
  if (typeof speechSynthesis === 'undefined') return;
  const run = () => pick(speechSynthesis.getVoices());
  run();
  speechSynthesis.addEventListener('voiceschanged', run);
}


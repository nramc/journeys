// src/app/utility/text-utils.ts
// Shared text utilities for narration / text-to-speech.

/**
 * Strips Markdown formatting, emoji, Material-icon ligatures, URLs, HTML tags
 * and other noise from a string so it can be fed cleanly to a text-to-speech
 * engine (or any plain-text consumer).
 *
 * @param text Raw markdown / rich text.
 * @returns Clean plain text suitable for narration.
 */
export function cleanMarkdownForSpeech(text: string): string {
  return text
    // Remove emoji — \p{Emoji} covers presentation, modifier, component & pictographic chars
    .replace(/\p{Emoji}/gu, '')
    // Remove Material Icons ligature text (e.g. "volume_up", "arrow_forward")
    .replace(/\b[a-z]+(?:_[a-z0-9]+)+\b/g, '')
    // Remove markdown image syntax: ![alt](url)
    .replace(/!\[.*?]\(.*?\)/g, '')
    // Remove markdown link syntax, keep label: [label](url) → label
    .replace(/\[([^\]]+)]\([^)]*\)/g, '$1')
    // Remove inline code blocks
    .replace(/`[^`]*`/g, '')
    // Remove fenced code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove markdown heading markers (#)
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers (**, __, *, _)
    .replace(/(\*{1,3}|_{1,3})(.*?)\1/g, '$2')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // Remove HTML tags
    .replace(/<[^>]+>/g, '')
    // Remove URLs
    .replace(/https?:\/\/\S+/g, '')
    // Remove special punctuation that disrupts TTS rhythm
    .replace(/[|~^<>{}[\]\\]/g, '')
    // Collapse multiple blank lines / excessive whitespace
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}


// src/app/utility/text-utils.ts
// Shared text utilities for narration / text-to-speech.

function buildNextIndex(text: string, target: string): Int32Array {
  const nextIndexes = new Int32Array(text.length + 1);
  nextIndexes.fill(-1);
  let nextIndex = -1;

  for (let index = text.length - 1; index >= 0; index--) {
    if (text[index] === target) {
      nextIndex = index;
    }
    nextIndexes[index] = nextIndex;
  }

  return nextIndexes;
}

function removeMarkdownLinks(text: string): string {
  const nextClosingBracket = buildNextIndex(text, ']');
  const nextClosingParenthesis = buildNextIndex(text, ')');
  let result = '';
  let cursor = 0;

  while (cursor < text.length) {
    const openingBracket = text.indexOf('[', cursor);
    if (openingBracket === -1) {
      return result + text.slice(cursor);
    }

    const closingBracket = nextClosingBracket[openingBracket + 1] ?? -1;
    const openingParenthesis = closingBracket + 1;
    const closingParenthesis = nextClosingParenthesis[openingParenthesis + 1] ?? -1;
    if (closingBracket > openingBracket + 1
      && text[openingParenthesis] === '('
      && closingParenthesis !== -1) {
      result += text.slice(cursor, openingBracket) + text.slice(openingBracket + 1, closingBracket);
      cursor = closingParenthesis + 1;
    } else {
      result += text.slice(cursor, openingBracket + 1);
      cursor = openingBracket + 1;
    }
  }

  return result;
}

function removeHtmlTags(text: string): string {
  const nextClosingTag = buildNextIndex(text, '>');
  let result = '';
  let cursor = 0;

  while (cursor < text.length) {
    const openingTag = text.indexOf('<', cursor);
    if (openingTag === -1) {
      return result + text.slice(cursor);
    }

    const closingTag = nextClosingTag[openingTag + 1] ?? -1;
    if (closingTag === -1) {
      return result + text.slice(cursor);
    }

    if (closingTag === openingTag + 1) {
      result += text.slice(cursor, openingTag + 1);
      cursor = openingTag + 1;
    } else {
      result += text.slice(cursor, openingTag);
      cursor = closingTag + 1;
    }
  }

  return result;
}

/**
 * Strips Markdown formatting, emoji, Material-icon ligatures, URLs, HTML tags
 * and other noise from a string so it can be fed cleanly to a text-to-speech
 * engine (or any plain-text consumer).
 *
 * @param text Raw markdown / rich text.
 * @returns Clean plain text suitable for narration.
 */
export function cleanMarkdownForSpeech(text: string): string {
  const withoutEmojisAndIcons = text
    // Remove emoji — \p{Emoji} covers presentation, modifier, component & pictographic chars
    .replace(/\p{Emoji}/gu, '')
    // Remove Material Icons ligature text (e.g. "volume_up", "arrow_forward")
    .replace(/\b[a-z]+(?:_[a-z0-9]+)+\b/g, '')
    // Remove markdown image syntax: ![alt](url)
    .replace(/!\[[^\]]*]\([^)]*\)/g, '');

  const withoutMarkdownFormatting = removeMarkdownLinks(withoutEmojisAndIcons)
    // Remove inline code blocks
    .replace(/`[^`]*`/g, '')
    // Remove fenced code blocks
    .replace(/```[\s\S]*?```/g, '')
    // Remove markdown heading markers (#)
    .replace(/^#{1,6}\s+/gm, '')
    // Remove bold/italic markers (**, __, *, _)
    .replace(/(\*{1,3}|_{1,3})(.*?)\1/g, '$2')
    // Remove horizontal rules
    .replace(/^[-*_]{3,}\s*$/gm, '');

  return removeHtmlTags(withoutMarkdownFormatting)
    // Remove URLs
    .replace(/https?:\/\/\S+/g, '')
    // Remove special punctuation that disrupts TTS rhythm
    .replace(/[|~^<>{}[\]\\]/g, '')
    // Collapse multiple blank lines / excessive whitespace
    .replace(/\n{3,}/g, '\n\n')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}


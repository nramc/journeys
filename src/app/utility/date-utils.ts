// src/app/utility/date-utils.ts
// Shared date utilities for nostalgia badges and more

export interface MemoryAgeBadge {
  label: string;
  emoji: string;
  isExactAnniversary: boolean;
  yearsDiff: number;
}

/**
 * Returns a nostalgia badge for a memory date, e.g. { label: '3 years ago', emoji: '📸', isExactAnniversary: false, yearsDiff: 3 }
 * If today is the exact anniversary (month+day), returns isExactAnniversary=true and a special emoji.
 * Only returns yearsDiff >= 1 (no badge for this year or future dates).
 */
export function getMemoryAgeBadge(journeyDate: string, today: Date = new Date()): MemoryAgeBadge | null {
  const date = new Date(journeyDate);
  if (Number.isNaN(date.getTime())) return null;
  const currentYear = today.getFullYear();
  const journeyYear = date.getFullYear();
  const yearsDiff = currentYear - journeyYear;
  // Only show badge for past years
  if (yearsDiff < 1) return null;
  const isExactAnniversary = (date.getMonth() === today.getMonth() && date.getDate() === today.getDate());
  if (isExactAnniversary) {
    return {
      label: yearsDiff === 1 ? '1 year ago today!' : `${yearsDiff} years ago today!`,
      emoji: '🎊 ',
      isExactAnniversary,
      yearsDiff
    };
  } else {
    return {
      label: yearsDiff === 1 ? '1 year ago' : `${yearsDiff} years ago`,
      emoji: '📸 ',
      isExactAnniversary,
      yearsDiff
    };
  }
}

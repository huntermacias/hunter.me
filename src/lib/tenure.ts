/**
 * Small helpers for turning `'Nov 2025'`-style start/end strings into
 * a human duration, e.g. '9 mos' or '1 yr 4 mos'. Counts inclusively —
 * Aug 2024 to Nov 2025 is 16 months, matching how people actually
 * describe "my first 16 months in a role."
 */

function parseMonthYear(value: string): Date {
  return new Date(`${value} 1`);
}

export function monthsBetween(start: string, end?: string): number {
  const startDate = parseMonthYear(start);
  const endDate = end ? parseMonthYear(end) : new Date();

  return (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()) + 1;
}

export function formatDuration(months: number): string {
  const years = Math.floor(months / 12);
  const remainder = months % 12;

  if (years === 0) {
    return `${remainder} mo${remainder === 1 ? '' : 's'}`;
  }

  if (remainder === 0) {
    return `${years} yr${years === 1 ? '' : 's'}`;
  }

  return `${years} yr${years === 1 ? '' : 's'} ${remainder} mo${remainder === 1 ? '' : 's'}`;
}

export function formatPeriod(start: string, end?: string): string {
  const duration = formatDuration(monthsBetween(start, end));
  return `${start} – ${end ?? 'Present'} · ${duration}`;
}

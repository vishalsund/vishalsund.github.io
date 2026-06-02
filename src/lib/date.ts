/** Parse YYYY-MM-DD without UTC timezone shifting the calendar day. */
export function parsePostDate(dateStr: string): Date {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year, month - 1, day)
}

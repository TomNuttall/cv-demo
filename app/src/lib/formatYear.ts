export const formatYear = (
  yearFrom: string,
  yearTo?: string | null,
): string => {
  return `${yearFrom}${yearFrom !== yearTo ? ` - ${yearTo ?? 'Current'}` : ''}`
}

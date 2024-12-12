export function displayShortTitle(title: string) {
  if (title && title.length > 10) {
    return `${title.substring(0, 10)}...`;
  }
  return title;
}

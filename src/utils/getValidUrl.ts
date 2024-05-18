export default function getValidUrl(url: string) {
  if (url === null || url === undefined || !url.startsWith("https:")) {
    return null;
  }

  return url;
}

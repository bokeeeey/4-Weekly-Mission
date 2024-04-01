export default function getValidUrl(url: string) {
  if (url === null || !url.startsWith("https:")) {
    return null;
  }

  return url;
}

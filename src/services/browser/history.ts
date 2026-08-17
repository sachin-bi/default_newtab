export interface RecentHistoryItem {
  id: string;
  title: string;
  url: string;
  lastVisitTime?: number;
}

const BLOCKED_URL_PREFIXES = [
  "chrome://",
  "chrome-extension://",
  "about:",
  "moz-extension://",
  "file://",
];

function isValidUrl(url?: string): url is string {
  if (!url) {
    return false;
  }

  return !BLOCKED_URL_PREFIXES.some((prefix) =>
    url.startsWith(prefix),
  );
}

async function getRecentHistory(
  maxResults = 8,
): Promise<RecentHistoryItem[]> {
  const results = await chrome.history.search({
    text: "",
    startTime: 0,
    maxResults: 50,
  });

  return results
    .filter((item) => isValidUrl(item.url))
    .filter((item) => item.url && item.title)
    .sort(
      (a, b) =>
        (b.lastVisitTime ?? 0) - (a.lastVisitTime ?? 0),
    )
    .slice(0, maxResults)
    .map((item) => ({
      id: item.id,
      title: item.title ?? item.url!,
      url: item.url!,
      lastVisitTime: item.lastVisitTime,
    }));
}

export default {
  getRecentHistory,
};
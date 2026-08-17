import { useCallback, useEffect, useState } from "react";
import history from "../services/browser/history";
import type { RecentHistoryItem } from "../services/browser/history";

function useRecentLinks(maxResults = 8) {
  const [recentLinks, setRecentLinks] = useState<RecentHistoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadRecentLinks = useCallback(async () => {
    try {
      const results = await history.getRecentHistory(maxResults);

      setRecentLinks(results);
    } catch (error) {
      console.error("Failed to load recent history:", error);
      setRecentLinks([]);
    } finally {
      setIsLoading(false);
    }
  }, [maxResults]);

  useEffect(() => {
    loadRecentLinks();
  }, [loadRecentLinks]);

  return {
    recentLinks,
    isLoading,
    refreshRecentLinks: loadRecentLinks,
  };
}

export default useRecentLinks;
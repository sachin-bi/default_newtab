import { useCallback, useEffect, useState } from "react";
import storage from "../services/browser/storage";
import type { QuickLink } from "../types/quickLink";

const STORAGE_KEY = "quickLinks";

function useQuickLinks() {
  const [quickLinks, setQuickLinks] = useState<QuickLink[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadQuickLinks = useCallback(async () => {
    try {
      const storedLinks = await storage.get<QuickLink[]>(STORAGE_KEY);

      setQuickLinks(storedLinks ?? []);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadQuickLinks();
  }, [loadQuickLinks]);

  const addQuickLink = async (link: QuickLink) => {
    const updatedLinks = [...quickLinks, link];

    setQuickLinks(updatedLinks);

    await storage.set(STORAGE_KEY, updatedLinks);
  };

  const deleteQuickLink = async (id: string) => {
    const updatedLinks = quickLinks.filter((link) => link.id !== id);

    setQuickLinks(updatedLinks);

    await storage.set(STORAGE_KEY, updatedLinks);
  };

  return {
    quickLinks,
    isLoading,
    addQuickLink,
    deleteQuickLink,
  };
}

export default useQuickLinks;
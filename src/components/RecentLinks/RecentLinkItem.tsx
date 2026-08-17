import type { RecentHistoryItem } from "../../services/browser/history";

interface RecentLinkItemProps {
  link: RecentHistoryItem;
}

function RecentLinkItem({ link }: RecentLinkItemProps) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-white/10"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10 text-sm font-medium">
        {link.title.charAt(0).toUpperCase()}
      </div>

      <div className="min-w-0">
        <p className="truncate text-sm font-medium">
          {link.title}
        </p>

        <p className="truncate text-xs text-white/40">
          {new URL(link.url).hostname}
        </p>
      </div>
    </a>
  );
}

export default RecentLinkItem;
import type { QuickLink } from "../../types/quickLink";

interface QuickLinkItemProps {
  link: QuickLink;
  onDelete: (id: string) => void;
}

function QuickLinkItem({ link, onDelete }: QuickLinkItemProps) {
  return (
    <div className="group relative">
      <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        className="flex h-24 w-32 flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-3 transition hover:bg-white/10"
      >
        <span className="max-w-full truncate text-sm font-medium">
          {link.title}
        </span>

        <span className="mt-1 max-w-full truncate text-xs text-white/40">
          {link.url}
        </span>
      </a>

      <button
        type="button"
        onClick={() => onDelete(link.id)}
        className="absolute -right-2 -top-2 hidden h-6 w-6 items-center justify-center rounded-full bg-white text-xs text-black group-hover:flex"
        aria-label={`Delete ${link.title}`}
      >
        ×
      </button>
    </div>
  );
}

export default QuickLinkItem;
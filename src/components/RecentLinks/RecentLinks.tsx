import useRecentLinks from "../../hooks/useRecentLinks";
import RecentLinkItem from "./RecentLinkItem";

function RecentLinks() {
  const { recentLinks, isLoading } = useRecentLinks();

  if (isLoading) {
    return null;
  }

  return (
    <section className="w-full rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="mb-4 text-sm font-medium tracking-wide text-white/60">
        RECENT
      </h2>

      {recentLinks.length === 0 ? (
        <p className="text-sm text-white/40">
          No recent links available.
        </p>
      ) : (
        <div className="grid gap-1 sm:grid-cols-2">
          {recentLinks.map((link) => (
            <RecentLinkItem key={link.id} link={link} />
          ))}
        </div>
      )}
    </section>
  );
}

export default RecentLinks;
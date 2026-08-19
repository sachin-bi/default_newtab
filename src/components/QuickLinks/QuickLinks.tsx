import useQuickLinks from "../../hooks/useQuickLinks";
import AddQuickLink from "./AddQuickLink";
import QuickLinkItem from "./QuickLinkItem";

function QuickLinks() {
  const {
    quickLinks,
    isLoading,
    addQuickLink,
    deleteQuickLink,
  } = useQuickLinks();

  if (isLoading) {
    return null;
  }

  return (
    <section className="w-full rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="mb-4">
        <h2 className="text-sm font-medium tracking-wide text-white/60">
          QUICK LINKS
        </h2>
      </div>

      <div className="flex flex-wrap gap-4">
        {quickLinks.map((link) => (
          <QuickLinkItem
            key={link.id}
            link={link}
            onDelete={deleteQuickLink}
          />
        ))}

        <AddQuickLink onAdd={addQuickLink} />
      </div>
    </section>
  );
}

export default QuickLinks;
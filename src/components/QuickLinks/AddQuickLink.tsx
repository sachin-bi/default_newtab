import { useState } from "react";
import type { QuickLink } from "../../types/quickLink";

interface AddQuickLinkProps {
  onAdd: (link: QuickLink) => Promise<void>;
}

function AddQuickLink({ onAdd }: AddQuickLinkProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !url.trim()) {
      return;
    }

    await onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      url: url.trim(),
    });

    setTitle("");
    setUrl("");
    setIsOpen(false);
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex h-24 w-32 flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-white/50 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
      >
        <span className="text-2xl">+</span>
        <span className="mt-1 text-xs">Add Link</span>
      </button>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-72 flex-col gap-3 rounded-2xl border border-white/10 bg-white/10 p-4"
    >
      <input
        type="text"
        placeholder="Name"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-white/30"
      />

      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
        className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none placeholder:text-white/30 focus:border-white/30"
      />

      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="flex-1 rounded-lg px-3 py-2 text-sm text-white/50 hover:bg-white/10 hover:text-white"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="flex-1 rounded-lg bg-white px-3 py-2 text-sm text-black hover:bg-white/90"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default AddQuickLink;
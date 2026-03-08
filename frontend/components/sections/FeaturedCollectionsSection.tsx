import CollectionCard from "@/components/product/CollectionCard";
import type { Collection } from "@/lib/types";
import { apiFetch } from "@/lib/api";

async function getCollections(): Promise<Collection[]> {
  try {
    const res = await apiFetch("/api/collections?limit=4", {
      next: { revalidate: 0 }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.collections || data;
  } catch {
    // Backend might not be running yet; fall back to empty.
    return [];
  }
}

const FeaturedCollectionsSection = async () => {
  const collections = await getCollections();

  return (
    <section className="container-wide space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Curated for you
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
            Featured collections
          </h2>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((collection) => (
          <CollectionCard key={collection._id} collection={collection} />
        ))}
        {collections.length === 0 && (
          <p className="text-sm text-slate-500">
            Collections will appear here once you add them in the admin dashboard.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedCollectionsSection;


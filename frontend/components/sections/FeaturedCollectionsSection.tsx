import CollectionCard from "@/components/product/CollectionCard";
import { collections } from "@/lib/mockData";

const FeaturedCollectionsSection = () => {

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
            Collections will appear here once you configure them.
          </p>
        )}
      </div>
    </section>
  );
};

export default FeaturedCollectionsSection;


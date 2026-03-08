import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { searchProducts, searchCollections } from "@/lib/mockData";
import ProductCard from "@/components/product/ProductCard";

type Props = {
  searchParams: { q?: string };
};

function SearchResults({ q }: { q: string }) {
  const query = (q ?? "").trim();
  if (query.length < 2) {
    return (
      <p className="text-sm text-slate-500">
        Enter at least 2 characters to search products and collections.
      </p>
    );
  }
  const productResults = searchProducts(query);
  const collectionResults = searchCollections(query);

  if (productResults.length === 0 && collectionResults.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        No products or collections found for &quot;{query}&quot;.
      </p>
    );
  }

  return (
    <div className="space-y-8">
      {collectionResults.length > 0 && (
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Collections
          </h2>
          <div className="flex flex-wrap gap-3">
            {collectionResults.map((c) => (
              <Link
                key={c._id}
                href={`/collections/${c.slug}`}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-brand hover:bg-brand-light"
              >
                <span className="relative h-8 w-8 overflow-hidden rounded-lg">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    className="object-cover"
                  />
                </span>
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      )}
      {productResults.length > 0 && (
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Products ({productResults.length})
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productResults.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function SearchPage({ searchParams }: Props) {
  const q = searchParams.q ?? "";

  return (
    <div className="container-wide space-y-6 py-8">
      <h1 className="text-2xl font-semibold text-slate-900">
        Search{q ? `: "${q}"` : ""}
      </h1>
      <Suspense fallback={<p className="text-sm text-slate-500">Searching…</p>}>
        <SearchResults q={q} />
      </Suspense>
    </div>
  );
}

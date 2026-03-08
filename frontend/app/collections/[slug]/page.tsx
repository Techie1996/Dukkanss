import { notFound } from "next/navigation";
import CollectionCard from "@/components/product/CollectionCard";
import ProductCard from "@/components/product/ProductCard";
import {
  navCollections,
  getCollectionBySlug,
  getProductsByCollectionSlug
} from "@/lib/mockData";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return navCollections.map((c) => ({ slug: c.slug }));
}

const CollectionPage = ({ params }: { params: Params }) => {
  const collection = getCollectionBySlug(params.slug);
  if (!collection) return notFound();

  const relatedProducts = getProductsByCollectionSlug(collection.slug);

  return (
    <div className="space-y-10">
      <section className="bg-white">
        <div className="container-wide py-8">
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Collection
              </p>
              <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                {collection.title}
              </h1>
              <p className="text-sm text-slate-600">
                Hand‑picked products curated for this category. All prices include
                taxes; shipping calculated at checkout.
              </p>
            </div>
            <CollectionCard collection={collection} />
          </div>
        </div>
      </section>

      <section className="container-wide space-y-4">
        <div className="flex flex-col gap-4 justify-between sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600">
            Showing {relatedProducts.length} products
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <select className="h-9 rounded-full border border-slate-200 bg-white px-3 text-xs outline-none">
              <option>Sort by: Best selling</option>
              <option>Price: Low to high</option>
              <option>Price: High to low</option>
              <option>Newest first</option>
            </select>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollectionPage;


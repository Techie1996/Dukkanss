import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import QuantitySelector from "@/components/product/QuantitySelector";
import Button from "@/components/ui/Button";
import { getProductBySlug, products } from "@/lib/mockData";
import { sampleReviews } from "@/lib/mockData";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const ProductPage = ({ params }: { params: Params }) => {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="space-y-10">
      <section className="bg-white">
        <div className="container-wide grid gap-10 py-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <ProductGallery images={product.images} />

          <div className="space-y-5">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
                {product.title}
              </h1>
              <div className="mt-2 flex items-center gap-2 text-sm text-slate-600">
                {product.rating && (
                  <>
                    <span className="text-amber-500">★ {product.rating}</span>
                    <span>·</span>
                    <span>{product.reviewsCount} reviews</span>
                  </>
                )}
              </div>
            </div>

            <div className="rounded-2xl bg-brand-light px-4 py-3 text-sm">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-semibold text-slate-900">
                  €{product.price.toFixed(2)}
                </span>
                <span className="text-xs uppercase tracking-[0.18em] text-brand">
                  incl. VAT
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <QuantitySelector initialValue={1} />
              <Button className="flex-1 justify-center text-xs uppercase tracking-[0.18em]">
                Add to cart
              </Button>
            </div>

            <div className="space-y-2 text-sm text-slate-700">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <div>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Product details
          </h2>
          <p className="text-sm leading-relaxed text-slate-700">
            Detailed nutritional info, ingredients and storage instructions would
            appear here. For now this is placeholder copy to showcase the layout.
          </p>
        </div>
        <div className="space-y-3 rounded-2xl bg-white p-4 shadow-soft text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Delivery info</p>
          <p>Orders dispatch within 1–2 working days.</p>
          <p className="pt-2 text-xs text-slate-500">
            Check date of expiry before adding to cart. Fruits &amp; veggies marked
            as non‑refundable are not eligible for returns.
          </p>
        </div>
      </section>

      <section className="container-wide space-y-4">
        <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Reviews
        </h2>
        <div className="space-y-3 text-sm text-slate-700">
          {sampleReviews.map((r) => (
            <div key={r._id} className="rounded-2xl bg-white p-4 shadow-soft">
              <div className="mb-1 flex items-center justify-between">
                <p className="font-semibold text-slate-900">{r.userName}</p>
                <span className="text-xs text-amber-500">
                  {"★".repeat(r.rating)}{" "}
                </span>
              </div>
              <p>{r.comment}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;


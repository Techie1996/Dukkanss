import { notFound } from "next/navigation";
import ProductGallery from "@/components/product/ProductGallery";
import QuantitySelector from "@/components/product/QuantitySelector";
import Button from "@/components/ui/Button";
import ProductDetailsAccordion, {
  type DetailsSection
} from "@/components/product/ProductDetailsAccordion";
import { getProductBySlug, products, sampleReviews } from "@/lib/mockData";
import { useCartStore } from "@/store/cartStore";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const ProductPage = ({ params }: { params: Params }) => {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();
  const addToCart = useCartStore((s) => s.addItem);

  const detailSections: DetailsSection[] = [
    {
      id: "highlights",
      title: "Highlights",
      lines: [
        "Premium quality ingredients sourced from trusted Indian brands.",
        "Perfect for everyday cooking as well as special occasion meals.",
        "Packed in Europe-compliant, food‑grade packaging."
      ]
    },
    {
      id: "ingredients",
      title: "Ingredients & allergens",
      lines: [
        "Main ingredient: high‑grade whole lentils / pulses.",
        "Processed in a facility that may also handle peanuts, tree nuts, wheat and soy.",
        "Always check the physical pack for the most accurate ingredient list."
      ]
    },
    {
      id: "storage",
      title: "Storage & shelf life",
      lines: [
        "Store in a cool, dry place away from direct sunlight.",
        "Once opened, transfer contents to an airtight container.",
        "Best before date and batch details printed on the pack."
      ]
    },
    {
      id: "origin",
      title: "Origin & brand",
      lines: [
        "Product of India or packed in EU using imported ingredients.",
        "Brand may vary slightly between regions while maintaining equivalent quality."
      ]
    }
  ];

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
              {product.badges && product.badges.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
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
              <Button
                className="flex-1 justify-center text-xs uppercase tracking-[0.18em]"
                onClick={() =>
                  addToCart({
                    productId: product._id,
                    title: product.title,
                    slug: product.slug,
                    price: product.price,
                    image: product.images[0] ?? "",
                    quantity: 1
                  })
                }
              >
                Add to cart
              </Button>
            </div>

            <div className="space-y-2 text-sm text-slate-700">
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container-wide grid gap-8 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.2fr)]">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Product details
          </h2>
          <ProductDetailsAccordion sections={detailSections} />
        </div>
        <div className="space-y-4">
          <div className="space-y-3 rounded-2xl bg-white p-4 shadow-soft text-sm text-slate-700">
            <p className="font-semibold text-slate-900">Delivery info</p>
            <p>Orders dispatch within 1–2 working days.</p>
            <p className="pt-2 text-xs text-slate-500">
              Check date of expiry before adding to cart. Fruits &amp; veggies marked
              as non‑refundable are not eligible for returns.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl bg-white p-4 shadow-soft text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Customer rating
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {product.rating ?? 4.8} / 5.0
                </p>
              </div>
              <p className="text-xs text-slate-500">
                Based on {product.reviewsCount ?? sampleReviews.length} reviews
              </p>
            </div>
            <div className="space-y-2 text-sm text-slate-700">
              {sampleReviews.map((r) => (
                <div key={r._id} className="rounded-xl bg-slate-50 px-3 py-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-slate-900">
                      {r.userName}
                    </span>
                    <span className="text-amber-500">
                      {"★".repeat(r.rating)}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 line-clamp-2">
                    {r.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;


import ProductCard from "@/components/product/ProductCard";
import type { Product } from "@/lib/types";
import {
  homepageBestSellers,
  homepageNewArrivals,
  products
} from "@/lib/mockData";

type Props = {
  title: string;
  subtitle?: string;
  queryKey: "best-sellers" | "new-arrivals" | "trending" | "featured";
};

async function getProducts(queryKey: Props["queryKey"]): Promise<Product[]> {
  if (queryKey === "best-sellers") return homepageBestSellers;
  if (queryKey === "new-arrivals") return homepageNewArrivals;
  return products;
}

const ProductRailSection = async ({ title, subtitle, queryKey }: Props) => {
  const products = await getProducts(queryKey);

  return (
    <section
      id={
        queryKey === "best-sellers"
          ? "bestsellers"
          : queryKey === "new-arrivals"
          ? "new-arrivals"
          : queryKey === "featured"
          ? "bundles"
          : "on-sale"
      }
      className="container-wide space-y-6 py-8"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
          )}
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
        {products.length === 0 && (
          <p className="text-sm text-slate-500">
            Products will appear here once you add them in the admin dashboard.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductRailSection;


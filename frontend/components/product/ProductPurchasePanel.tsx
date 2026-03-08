"use client";

import Button from "@/components/ui/Button";
import QuantitySelector from "@/components/product/QuantitySelector";
import type { Product } from "@/lib/types";
import { useCartStore } from "@/store/cartStore";

type Props = {
  product: Product;
};

const ProductPurchasePanel = ({ product }: Props) => {
  const addToCart = useCartStore((s) => s.addItem);

  return (
    <div className="space-y-4">
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
    </div>
  );
};

export default ProductPurchasePanel;


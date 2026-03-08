"use client";

import { useCartStore } from "@/store/cartStore";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CartDrawer = () => {
  const { items, isOpen, toggleCart, removeItem, updateQuantity } = useCartStore();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => toggleCart(false)}
          />
          <motion.aside
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">
                Your cart
              </h2>
              <button
                className="text-xs uppercase tracking-[0.18em] text-slate-500"
                onClick={() => toggleCart(false)}
              >
                Close
              </button>
            </div>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-4">
              {items.length === 0 && (
                <p className="text-sm text-slate-500">
                  Your cart is empty. Discover curated staples on the homepage.
                </p>
              )}
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex items-center gap-3 rounded-2xl border border-slate-100 p-3"
                >
                  <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1 space-y-1">
                    <Link
                      href={`/product/${item.slug}`}
                      className="line-clamp-2 text-sm font-medium text-slate-800"
                    >
                      {item.title}
                    </Link>
                    <p className="text-xs text-slate-500">
                      €{item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-xs"
                        onClick={() =>
                          updateQuantity(
                            item.productId,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        −
                      </button>
                      <span className="w-6 text-center text-xs">
                        {item.quantity}
                      </span>
                      <button
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 text-xs"
                        onClick={() =>
                          updateQuantity(item.productId, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    className="text-xs text-slate-400 hover:text-red-500"
                    onClick={() => removeItem(item.productId)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200 px-6 py-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-slate-600">Subtotal</span>
                <span className="font-semibold text-slate-900">
                  €{subtotal.toFixed(2)}
                </span>
              </div>
              <Link
                href="/checkout"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-brand text-xs font-semibold uppercase tracking-[0.18em] text-white"
                onClick={() => toggleCart(false)}
              >
                Checkout
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;


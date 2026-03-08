"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag, MapPin, User2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Button from "@/components/ui/Button";
import { collections as mockCollections } from "@/lib/mockData";

const mainMenu = [
  { label: "Categories", href: "#categories" },
  { label: "Bestsellers", href: "#bestsellers" },
  { label: "New arrivals", href: "#new-arrivals" },
  { label: "On sale", href: "#on-sale" },
  { label: "Bundles", href: "#bundles" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [collections, setCollections] = useState(mockCollections);
  const { items, toggleCart } = useCartStore();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Dukaans
            </span>
          </Link>
          <div className="hidden flex-1 items-center gap-4 lg:flex">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search for products you want"
                className="h-10 w-full rounded-full border border-slate-200 bg-white px-4 pr-24 text-sm outline-none ring-brand focus:ring-1"
              />
              <button
                className="absolute right-1 top-1 flex h-8 items-center rounded-full bg-brand px-4 text-xs font-semibold uppercase tracking-[0.18em] text-white"
                onClick={() =>
                  document
                    .getElementById("bestsellers")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 text-xs text-slate-600 sm:flex">
            <MapPin className="h-4 w-4 text-brand" />
            <div className="leading-tight">
              <p className="font-semibold text-slate-900">Delivering to</p>
              <p>9902, Belgium</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-xs sm:inline-flex"
          >
            <User2 className="mr-1.5 h-4 w-4" />
            Log in / Sign up
          </Button>

          <button
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft hover:-translate-y-0.5 hover:shadow-md"
            onClick={() => toggleCart(true)}
          >
            <ShoppingBag className="h-5 w-5 text-slate-800" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-brand text-[10px] font-semibold text-white">
                {itemCount}
              </span>
            )}
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white lg:hidden"
            onClick={() => setIsMobileOpen((prev) => !prev)}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5 text-slate-800" />
            ) : (
              <Menu className="h-5 w-5 text-slate-800" />
            )}
          </button>
        </div>

        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute inset-x-0 top-20 border-t border-slate-100 bg-white lg:hidden"
          >
            <div className="container-wide flex flex-col gap-3 py-4 text-sm font-medium text-slate-700">
              <Link href="/" onClick={() => setIsMobileOpen(false)}>
                Home
              </Link>
              <div>
                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  Collections
                </p>
                <div className="flex flex-wrap gap-2">
                  {collections.map((c) => (
                    <Link
                      key={c._id}
                      href={`/collections/${c.slug}`}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs"
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {c.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/about" onClick={() => setIsMobileOpen(false)}>
                About
              </Link>
              <Link href="/contact" onClick={() => setIsMobileOpen(false)}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
      <div className="hidden border-t border-slate-100 bg-white/95 lg:block">
        <div className="container-wide flex h-11 items-center justify-between text-xs font-medium text-slate-700">
          <div className="flex items-center gap-5">
            {mainMenu.map((item) => (
              <button
                key={item.label}
                className="inline-flex items-center gap-1 hover:text-brand"
                onClick={() =>
                  item.href.startsWith("#")
                    ? document
                        .getElementById(item.href.slice(1))
                        ?.scrollIntoView({ behavior: "smooth" })
                    : null
                }
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-500">
            <span>Lowest price deals</span>
            <span>Fast European delivery</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


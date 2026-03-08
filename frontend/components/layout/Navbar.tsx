"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Button from "@/components/ui/Button";
import { apiFetch } from "@/lib/api";

type NavCollection = {
  _id: string;
  title: string;
  slug: string;
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [collections, setCollections] = useState<NavCollection[]>([]);
  const { items, toggleCart } = useCartStore();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await apiFetch("/api/collections");
        if (!res.ok) return;
        const data = await res.json();
        setCollections(data.collections || data);
      } catch {
        // ignore nav error
      }
    };
    fetchCollections();
  }, []);

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container-wide flex h-20 items-center justify-between gap-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand">
              Dukaans
            </span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-700 lg:flex">
            <Link href="/" className="hover:text-brand">
              Home
            </Link>
            <div className="group relative">
              <button className="inline-flex items-center gap-1 hover:text-brand">
                Collections
                <span className="text-xs">▼</span>
              </button>
              <div className="invisible absolute left-0 top-full z-30 mt-3 w-64 rounded-2xl border border-slate-100 bg-white p-3 shadow-soft opacity-0 transition-all group-hover:visible group-hover:mt-4 group-hover:opacity-100">
                {collections.map((c) => (
                  <Link
                    key={c._id}
                    href={`/collections/${c.slug}`}
                    className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                  >
                    {c.title}
                  </Link>
                ))}
                {collections.length === 0 && (
                  <p className="px-3 py-2 text-xs text-slate-400">
                    Collections will appear here.
                  </p>
                )}
              </div>
            </div>
            <Link href="/about" className="hover:text-brand">
              About
            </Link>
            <Link href="/contact" className="hover:text-brand">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden text-xs sm:inline-flex"
          >
            Log in
          </Button>
          <Button
            variant="secondary"
            size="sm"
            className="hidden text-xs sm:inline-flex"
          >
            Sign up
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
    </header>
  );
};

export default Navbar;


"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#f9fff4] via-[#f4f7fb] to-[#fef7ec]">
      <div className="container-wide grid gap-10 py-10 md:grid-cols-[1.1fr_minmax(0,1fr)] md:py-16 lg:items-center">
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-brand shadow-soft">
            Europe&apos;s Indian Grocery · Premium
          </p>
          <h1 className="font-display text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            For every{" "}
            <span className="bg-gradient-to-r from-brand to-emerald-500 bg-clip-text text-transparent">
              desi craving
            </span>{" "}
            in Europe.
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
            Shop 250+ trusted Indian brands, carefully packed and delivered fresh.
            Zero compromises on authenticity, maximum comfort for your weekly shop.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/collections/bestsellers"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Shop now
            </Link>
            <Link
              href="/collections/on-sale"
              className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600 hover:text-brand"
            >
              View March offers
            </Link>
          </div>
          <div className="mt-4 flex flex-wrap gap-6 text-xs text-slate-600">
            <div>
              <p className="font-semibold text-slate-900">Free delivery*</p>
              <p>On minimum order value.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">35% off</p>
              <p>Seasonal lentil festival offers.</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Serving 20+ countries</p>
              <p>Pan‑Europe logistics network.</p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-white shadow-soft md:aspect-square md:max-w-md lg:max-w-lg"
        >
          <Image
            src="https://picsum.photos/seed/dukaans-hero/800/800"
            alt="Curated Indian groceries and confectionery"
            fill
            sizes="(min-width: 1024px) 512px, (min-width: 768px) 448px, 100vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;


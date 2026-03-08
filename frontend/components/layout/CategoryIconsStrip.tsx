"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { navCollections } from "@/lib/mockData";

const CategoryIconsStrip = () => {
  return (
    <section className="border-b border-slate-100 bg-white">
      <div className="container-wide overflow-hidden py-3">
        <div className="flex gap-6 overflow-x-auto pb-2 scrollbar-hide">
          {navCollections.map((cat) => (
            <Link
              key={cat._id}
              href={`/collections/${cat.slug}`}
              className="flex min-w-[72px] flex-col items-center gap-1.5 rounded-xl px-2 py-2 transition-colors hover:bg-slate-50"
            >
              <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-100">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
              <span className="text-center text-[11px] font-medium text-slate-700">
                {cat.title}
              </span>
            </Link>
          ))}
          <Link
            href="/collections/bestsellers"
            className="flex min-w-[72px] flex-col items-center justify-center gap-1 text-slate-400 hover:text-brand"
          >
            <ChevronRight className="h-6 w-6" />
            <span className="text-[11px]">More</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryIconsStrip;

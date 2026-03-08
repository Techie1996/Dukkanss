 "use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Collection } from "@/lib/types";

type Props = {
  collection: Collection;
};

const CollectionCard = ({ collection }: Props) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="card group flex cursor-pointer flex-col overflow-hidden"
    >
      <Link href={`/collections/${collection.slug}`} className="flex flex-1 flex-col">
        <div className="relative h-40 w-full overflow-hidden bg-[#f5f7fb] sm:h-48">
          {collection.image && (
            <Image
              src={collection.image}
              alt={collection.title}
              fill
              sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
        <div className="flex items-center justify-between px-4 py-3">
          <h3 className="text-sm font-semibold text-slate-900">
            {collection.title}
          </h3>
          <span className="text-xs font-medium uppercase tracking-[0.18em] text-brand">
            Shop
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default CollectionCard;


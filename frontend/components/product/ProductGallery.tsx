"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const GALLERY_PLACEHOLDERS = [
  "https://picsum.photos/seed/dukaans-g1/900/900",
  "https://picsum.photos/seed/dukaans-g2/900/900",
  "https://picsum.photos/seed/dukaans-g3/900/900",
  "https://picsum.photos/seed/dukaans-g4/900/900",
  "https://picsum.photos/seed/dukaans-g5/900/900"
];

type Props = {
  images: string[];
};

const ProductGallery = ({ images }: Props) => {
  const effectiveImages = images.length > 0 ? images : GALLERY_PLACEHOLDERS;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = effectiveImages[activeIndex];

  return (
    <div className="space-y-3">
      <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-[#f5f7fb] sm:h-96">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0"
          >
            {activeImage && (
              <Image
                src={activeImage}
                alt="Product image"
                fill
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-contain"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {effectiveImages.map((img, index) => (
          <button
            key={img}
            className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border ${
              index === activeIndex
                ? "border-brand ring-2 ring-brand/30"
                : "border-slate-200"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image src={img} alt="Thumbnail" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;


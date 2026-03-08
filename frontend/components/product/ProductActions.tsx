"use client";

import { useState } from "react";
import { Heart, Share2 } from "lucide-react";

type Props = {
  title: string;
  url: string;
};

const ProductActions = ({ title, url }: Props) => {
  const [isFav, setIsFav] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title,
        url: typeof window !== "undefined" ? window.location.href : url
      });
    } else {
      await navigator.clipboard.writeText(typeof window !== "undefined" ? window.location.href : url);
    }
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      <button
        type="button"
        onClick={() => setIsFav(!isFav)}
        className="flex items-center gap-1.5 text-slate-600 hover:text-red-500"
      >
        <Heart className={`h-4 w-4 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
        {isFav ? "Saved" : "Save"}
      </button>
      <button
        type="button"
        onClick={handleShare}
        className="flex items-center gap-1.5 text-slate-600 hover:text-brand"
      >
        <Share2 className="h-4 w-4" />
        Share
      </button>
    </div>
  );
};

export default ProductActions;

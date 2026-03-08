"use client";

const BADGE_STYLES: Record<string, string> = {
  "LOWEST PRICE": "bg-green-100 text-green-800 border-green-200",
  "BEST SELLER": "bg-amber-100 text-amber-800 border-amber-200",
  "17% OFF": "bg-red-100 text-red-800 border-red-200",
  "18% OFF": "bg-red-100 text-red-800 border-red-200",
  "30% OFF": "bg-red-100 text-red-800 border-red-200",
  BUNDLE: "bg-emerald-100 text-emerald-800 border-emerald-200",
  TRENDING: "bg-violet-100 text-violet-800 border-violet-200",
  "GIFT BOX": "bg-pink-100 text-pink-800 border-pink-200",
  FRESH: "bg-teal-100 text-teal-800 border-teal-200",
  NEW: "bg-sky-100 text-sky-800 border-sky-200"
};

const getBadgeStyle = (badge: string) => {
  if (BADGE_STYLES[badge]) return BADGE_STYLES[badge];
  if (badge.includes("% OFF")) return "bg-red-100 text-red-800 border-red-200";
  return "bg-slate-100 text-slate-800 border-slate-200";
};

type Props = { badges: string[] };

const ProductBadges = ({ badges }: Props) => {
  if (!badges?.length) return null;
  const displayBadges = badges.slice(0, 3);
  return (
    <div className="flex flex-wrap gap-2">
      {displayBadges.map((badge) => (
        <span
          key={badge}
          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${getBadgeStyle(badge)}`}
        >
          {badge}
        </span>
      ))}
    </div>
  );
};

export default ProductBadges;

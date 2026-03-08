import Link from "next/link";
import { Gift, ChevronRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <Link
      href="/collections/on-sale"
      className="flex items-center justify-center gap-2 bg-brand py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-brand-dark"
    >
      <Gift className="h-4 w-4" />
      <span>Celebrate Holi with Sweet Savings! Enjoy 15% OFF (No minimum order)</span>
      <span className="font-semibold underline">Use code: HOLI15</span>
      <ChevronRight className="h-4 w-4" />
    </Link>
  );
};

export default PromoBanner;

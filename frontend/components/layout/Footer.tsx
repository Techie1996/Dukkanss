import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-[#f0f5ef]">
      <div className="container-wide grid gap-12 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brand">
            Dukaans
          </p>
          <p className="text-sm text-slate-600">
            Europe&apos;s premium Indian grocery destination. Fresh, curated, and
            delivered to your door.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quick links
          </h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <Link href="/collections/all">Shop all</Link>
            </li>
            <li>
              <Link href="/collections/new-arrivals">New arrivals</Link>
            </li>
            <li>
              <Link href="/collections/best-sellers">Best sellers</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Support
          </h4>
          <ul className="space-y-2 text-sm text-slate-700">
            <li>
              <Link href="/help/shipping">Shipping</Link>
            </li>
            <li>
              <Link href="/help/returns">Returns</Link>
            </li>
            <li>
              <Link href="/help/contact">Contact us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            Newsletter
          </h4>
          <p className="mb-3 text-sm text-slate-600">
            Be the first to know about new drops, exclusive bundles, and seasonal
            offers.
          </p>
          <form className="flex flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-10 flex-1 rounded-full border border-slate-200 bg-white px-3 text-sm outline-none ring-brand focus:ring-1"
            />
            <button
              type="submit"
              className="h-10 rounded-full bg-brand px-4 text-xs font-semibold uppercase tracking-[0.16em] text-white"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-wide flex flex-col gap-3 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dukaans Technologies s.r.o.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


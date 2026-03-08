const NewsletterSection = () => {
  return (
    <section className="container-wide rounded-3xl bg-[#0f172a] px-6 py-10 text-white sm:px-10">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Stay in the loop
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Weekly offers and regional specialty drops.
          </h2>
          <p className="text-sm text-slate-300">
            Subscribe for curated product picks, regional festival boxes and early
            access to limited‑run bundles. No spam, only good food.
          </p>
        </div>
        <form className="space-y-3">
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-11 flex-1 rounded-full border border-slate-600 bg-slate-900/40 px-4 text-sm text-white outline-none ring-emerald-400 placeholder:text-slate-400 focus:ring-1"
            />
            <button
              type="submit"
              className="h-11 rounded-full bg-emerald-400 px-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900"
            >
              Join now
            </button>
          </div>
          <p className="text-[11px] text-slate-400">
            By subscribing you agree to receive marketing emails. You can
            unsubscribe at any time.
          </p>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;


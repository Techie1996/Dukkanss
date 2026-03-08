const TrustSection = () => {
  return (
    <section className="container-wide rounded-3xl bg-white py-8 shadow-soft">
      <div className="grid gap-6 md:grid-cols-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Why shop with us
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Built for NRIs across Europe who miss home flavours but expect
            world‑class ecommerce.
          </p>
        </div>
        <div className="space-y-1 text-sm">
          <p className="font-semibold text-slate-900">Europe‑wide delivery</p>
          <p className="text-slate-600">
            Shipping network across 20+ countries with cold‑chain for select
            products.
          </p>
        </div>
        <div className="space-y-1 text-sm">
          <p className="font-semibold text-slate-900">Secure checkout</p>
          <p className="text-slate-600">
            Stripe‑powered payments with 3D Secure and industry‑standard
            encryption.
          </p>
        </div>
        <div className="space-y-1 text-sm">
          <p className="font-semibold text-slate-900">Rated 4.9★ by customers</p>
          <p className="text-slate-600">
            Thousands of verified reviews from families shopping with us monthly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;


import ReviewCard from "@/components/reviews/ReviewCard";

const mock = [
  {
    _id: "1",
    userName: "Vijay · Germany",
    rating: 5,
    comment:
      "My first order arrived quickly with excellent packaging. Prices are competitive and product quality is consistently high."
  },
  {
    _id: "2",
    userName: "Sophia · Sweden",
    rating: 5,
    comment:
      "Fresh vegetables, wide range of staples and always on‑time delivery. The app and website are both delightful to use."
  },
  {
    _id: "3",
    userName: "GH · Hungary",
    rating: 5,
    comment:
      "Best Indian grocery store in Europe. Transparent pricing, responsive support and thoughtful product recommendations."
  }
];

const ReviewsSection = () => {
  return (
    <section className="container-wide space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            Customer love
          </p>
          <h2 className="mt-1 text-xl font-semibold text-slate-900 sm:text-2xl">
            What customers are saying
          </h2>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {mock.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;


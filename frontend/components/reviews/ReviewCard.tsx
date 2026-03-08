import type { Review } from "@/lib/types";

type Props = {
  review: Review;
};

const ReviewCard = ({ review }: Props) => {
  return (
    <article className="card flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">
            {review.userName}
          </p>
          <p className="text-xs text-slate-400">Verified buyer</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-amber-500">
          {Array.from({ length: 5 }).map((_, idx) => (
            <span key={idx}>{idx < review.rating ? "★" : "☆"}</span>
          ))}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-slate-600">{review.comment}</p>
    </article>
  );
};

export default ReviewCard;


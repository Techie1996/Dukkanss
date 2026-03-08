import type { Collection, Product, Review } from "./types";

export const collections: Collection[] = [
  {
    _id: "c1",
    title: "Pulses & Lentils",
    slug: "pulses-lentils",
    image: "https://picsum.photos/seed/dukaans-pulses/1200/800"
  },
  {
    _id: "c2",
    title: "Ready to Eat",
    slug: "ready-to-eat",
    image: "https://picsum.photos/seed/dukaans-ready-eat/1200/800"
  },
  {
    _id: "c3",
    title: "Snacks & Namkeen",
    slug: "snacks-namkeen",
    image: "https://picsum.photos/seed/dukaans-snacks/1200/800"
  },
  {
    _id: "c4",
    title: "Sweets & Mithai",
    slug: "sweets-mithai",
    image: "https://picsum.photos/seed/dukaans-sweets/1200/800"
  }
];

export const products: Product[] = [
  {
    _id: "p1",
    title: "Tirupati Split Yellow Peas (500g)",
    slug: "tirupati-split-yellow-peas-500g",
    description:
      "Versatile pantry essential, carefully cleaned and processed for a consistent, high-quality result every time.",
    price: 1.99,
    images: ["https://picsum.photos/seed/dukaans-peas/900/900"],
    collection: "pulses-lentils",
    rating: 4.9,
    reviewsCount: 128,
    badges: ["LOWEST PRICE"]
  },
  {
    _id: "p2",
    title: "Fortune Urad Dal Whole (1kg)",
    slug: "fortune-urad-dal-whole-1kg",
    description:
      "Premium whole urad dal for creamy dals, stews and South Indian delicacies.",
    price: 3.49,
    images: ["https://picsum.photos/seed/dukaans-urad/900/900"],
    collection: "pulses-lentils",
    rating: 4.8,
    reviewsCount: 96,
    badges: ["BUNDLE", "17% OFF"]
  },
  {
    _id: "p3",
    title: "MTR 3 Minute Poha Cup (Bundle of 2 x 80g)",
    slug: "mtr-3-minute-poha-cup-bundle",
    description:
      "Light, homestyle poha in a convenient cup. Just add hot water and enjoy.",
    price: 4.16,
    images: ["https://picsum.photos/seed/dukaans-poha/900/900"],
    collection: "ready-to-eat",
    rating: 4.7,
    reviewsCount: 61,
    badges: ["BUNDLE", "18% OFF"]
  },
  {
    _id: "p4",
    title: "Haldiram's Dal Tadka (300g)",
    slug: "haldirams-dal-tadka-300g",
    description:
      "Comforting, restaurant-style dal tadka with the perfect balance of spices.",
    price: 2.59,
    images: ["https://picsum.photos/seed/dukaans-daltadka/900/900"],
    collection: "ready-to-eat",
    rating: 4.8,
    reviewsCount: 142,
    badges: ["30% OFF"]
  },
  {
    _id: "p5",
    title: "Balaji Simply Salted Wafers (45g)",
    slug: "balaji-simply-salted-wafers-45g",
    description:
      "Crisp, golden potato wafers with a clean salted finish. Perfect tea-time partner.",
    price: 0.89,
    images: ["https://picsum.photos/seed/dukaans-chips/900/900"],
    collection: "snacks-namkeen",
    rating: 4.6,
    reviewsCount: 88,
    badges: ["TRENDING"]
  },
  {
    _id: "p6",
    title: "Kaju Katli Gift Box (500g)",
    slug: "kaju-katli-gift-box-500g",
    description:
      "Classic diamond-cut kaju katli made from premium cashews. Ideal for gifting.",
    price: 11.99,
    images: ["https://picsum.photos/seed/dukaans-kajukatli/900/900"],
    collection: "sweets-mithai",
    rating: 4.9,
    reviewsCount: 203,
    badges: ["GIFT BOX", "BEST SELLER"]
  }
];

export const homepageBestSellers = products.slice(0, 4);
export const homepageNewArrivals = products.slice(2);

export const sampleReviews: Review[] = [
  {
    _id: "r1",
    userName: "Vijay · Germany",
    rating: 5,
    comment:
      "Great packing and quick delivery. Pulses and ready-to-eat curries tasted just like home."
  },
  {
    _id: "r2",
    userName: "Sophia · Sweden",
    rating: 5,
    comment:
      "Website is fast and the snacks selection is amazing. Everything arrived fresh and on time."
  },
  {
    _id: "r3",
    userName: "GH · Hungary",
    rating: 5,
    comment:
      "Best Indian grocery experience in Europe. Transparent pricing and reliable service."
  }
];

/** Virtual collections for nav (bestsellers, new-arrivals, etc.) */
export const navCollections = [
  ...collections,
  {
    _id: "nav-bestsellers",
    title: "Bestsellers",
    slug: "bestsellers",
    image: "https://picsum.photos/seed/dukaans-bestsellers/800/600"
  },
  {
    _id: "nav-new-arrivals",
    title: "New Arrivals",
    slug: "new-arrivals",
    image: "https://picsum.photos/seed/dukaans-new/800/600"
  },
  {
    _id: "nav-on-sale",
    title: "On Sale",
    slug: "on-sale",
    image: "https://picsum.photos/seed/dukaans-sale/800/600"
  },
  {
    _id: "nav-bundles",
    title: "Bundles",
    slug: "bundles",
    image: "https://picsum.photos/seed/dukaans-bundles/800/600"
  }
];

export const getCollectionBySlug = (slug: string) =>
  navCollections.find((c) => c.slug === slug);

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getProductsByCollectionSlug = (slug: string): Product[] => {
  if (slug === "bestsellers") return homepageBestSellers;
  if (slug === "new-arrivals") return homepageNewArrivals;
  if (slug === "on-sale")
    return products.filter((p) => p.badges?.some((b) => b.includes("% OFF")));
  if (slug === "bundles")
    return products.filter((p) => p.badges?.includes("BUNDLE"));
  return products.filter((p) => p.collection === slug);
};


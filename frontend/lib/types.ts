export type Collection = {
  _id: string;
  title: string;
  slug: string;
  image: string;
};

export type Product = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  collection?: Collection | string;
  rating?: number;
  reviewsCount?: number;
  badges?: string[];
};

export type Review = {
  _id: string;
  userName: string;
  rating: number;
  comment: string;
};

export type CartItem = {
  productId: string;
  title: string;
  slug: string;
  price: number;
  image: string;
  quantity: number;
  maxQuantity?: number;
};


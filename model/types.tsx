export type ImageSizes = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type Product = {
  id: number;
  slug: string;
  name: string;
  image: ImageSizes;
  category: string;
  categoryImage: ImageSizes;
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: {
    quantity: number;
    item: string;
  }[];
  gallery: {
    first: ImageSizes;
    second: ImageSizes;
    third: ImageSizes;
  };
  others: {
    slug: string;
    name: string;
    image: ImageSizes;
  }[];
};

export type CartItem = {
  slug: string;
  price: number;
  quantity: number;
  name: string;
};

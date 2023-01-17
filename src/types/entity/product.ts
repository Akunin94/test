interface ProductImage {
  url: string;
}

interface ProductPrice {
  old_price: number | null;
  current_price: number;
}

export interface IProduct {
  name: string;
  code?: string;
  material: number | string;
  image?: ProductImage;
  id: number | string;
  price: ProductPrice
}
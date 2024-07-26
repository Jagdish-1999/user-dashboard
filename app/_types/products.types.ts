export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  images: { url: string; id: string }[];
  category: {
    _id: string;
    name: string;
    parent: null;
    properties: { name: string; values: string[] }[];
    createdAt: string;
    updatedAt: string;
    cartPrice?: number;
  };
  properties: { name: string; value: string }[];
  createdAt: string;
  updatedAt: string;
}

export interface Products {
  data: Product[];
  message: string;
  success: boolean;
  successCode: number;
}

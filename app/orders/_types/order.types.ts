export interface OrderItemPrice {
  currency: string;
  unitPrice: number;
  totalPrice: number;
}

export interface OrderItem {
  _id: string;
  price: OrderItemPrice;
  quantity: number;
  name: string;
}

export interface Orders {
  orderItems: OrderItem[];
  name: string;
  email: string;
  contact: number;
  alternateNumber: number;
  city: string;
  postalCode: string;
  streetAddress: string;
  state: string;
  country: string;
  isPaid: boolean;
  createdAt: string;
  updatedAt: string;
}

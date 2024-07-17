export interface Order {
  name: string;
  quantity: number;
  price: {
    currency: string;
    unit_price: number;
    total_price: number;
  };
}

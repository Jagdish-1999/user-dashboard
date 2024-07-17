"use client";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  Button,
  CartRoot,
  Input,
  Form,
  OrderInfo,
  ProductsContainer,
} from "./_styles/styled.cart";
import { useAppDispatch, useAppSelector } from "../_store/store";
import { addToCart, fetchCartProductsWithIds } from "../_slices/cart.slice";
import { Loading } from "../_components/loading";
import { Table } from "./_components/table";

import { Product } from "../_types/products.types";
import { columns } from "./_components/columns";
import { BodyCellLabelProps } from "./_components/table.types";
import { checkout } from "../_slices/order.slice";

interface CartPriceInfo {
  [key: string]: number;
}

interface FormValues {
  name: string;
  email: string;
  contact: string;
  addressLine_1: string;
  addressLine_2: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
}

const initialFormValues = {
  name: "",
  email: "",
  contact: "",
  addressLine_1: "",
  addressLine_2: "",
  city: "",
  postalCode: "",
  state: "",
  country: "",
};

const Cart = () => {
  const initialRef = useRef(true);
  const dispatch = useAppDispatch();
  const [selectedProductToPurchase, setSelectedProductToPurchase] = useState<
    string[]
  >([]);
  const { data: cartItems, products } = useAppSelector((state) => state.cart);
  const [cartProducts, setCartProducts] = useState<Product[]>(products.data);
  const [cartPriceInfo, setCartPriceInfo] = useState<CartPriceInfo>({});
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const onInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [evt.target.name]: evt.target.value.trim(),
    }));
  }, []);

  const onSubmit = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault();
      const cartItems = selectedProductToPurchase.reduce((acc, curr) => {
        return (acc = { ...acc, [curr]: cartPriceInfo[curr] });
      }, {});
      dispatch(checkout({ ...formValues, cartItems }));
    },
    [dispatch, formValues, cartPriceInfo, selectedProductToPurchase]
  );

  const onCellClick = useCallback(
    async ({ column, product }: BodyCellLabelProps<Product>) => {
      switch (column?.id) {
        case "checkbox": {
          setSelectedProductToPurchase((prev): string[] =>
            prev.includes(product._id)
              ? prev.filter((id) => id !== product._id)
              : [...prev, product._id]
          );
          break;
        }
        case "quantity": {
          const cartPrice = Number(column.extraKeys.selectedOption.value);
          if ((cartPriceInfo[product._id] || 0) !== cartPrice) {
            setCartPriceInfo((prevInfo) => ({
              ...prevInfo,
              [product._id]: Number(column.extraKeys.selectedOption.value),
            }));
          }
          break;
        }
        case "delete": {
          dispatch(addToCart(product._id));
          setSelectedProductToPurchase((prev) =>
            prev.filter((p) => p !== product._id)
          );
          break;
        }

        default: {
          console.log(`[${column?.id}]: called`);
          break;
        }
      }
    },
    [cartPriceInfo, dispatch]
  );

  useEffect(() => {
    setCartProducts((prevProduct) =>
      prevProduct.map((p) => {
        return { ...p, cartPrice: p.price * cartPriceInfo[p._id] };
      })
    );
  }, [cartPriceInfo]);

  useEffect(() => {
    if (initialRef.current && cartItems.length > 0) {
      dispatch(fetchCartProductsWithIds(cartItems));
      initialRef.current = false;
    }
  }, [dispatch, cartItems]);

  useEffect(() => {
    setCartProducts(products.data);
  }, [products.data]);

  const isErrorVisible = useMemo(() => {
    if (
      !formValues.name ||
      !formValues.email ||
      !formValues.contact ||
      !formValues.addressLine_1 ||
      !formValues.city ||
      !formValues.postalCode ||
      !formValues.state ||
      !formValues.country
    ) {
      return true;
    } else return false;
  }, [
    formValues.addressLine_1,
    formValues.city,
    formValues.contact,
    formValues.country,
    formValues.email,
    formValues.name,
    formValues.postalCode,
    formValues.state,
  ]);

  if (products.isLoading) {
    return <Loading />;
  }

  return (
    <CartRoot>
      {cartProducts.length > 0 ? (
        <>
          <ProductsContainer className="custom-scrollbar">
            <h3>CART</h3>
            <Table<Product>
              data={cartProducts}
              columns={columns}
              onCellClick={onCellClick}
              highlightRows={selectedProductToPurchase}
            />
          </ProductsContainer>
          <OrderInfo>
            <h3>ORDER INFORMATION</h3>
            <Form onSubmit={onSubmit}>
              <Input
                warn={!formValues.name}
                name="name"
                autoComplete="on"
                value={formValues.name}
                onChange={onInputChange}
                placeholder="Name *"
              />
              <Input
                warn={!formValues.email}
                name="email"
                autoComplete="on"
                value={formValues.email}
                onChange={onInputChange}
                placeholder="Email *"
              />
              <Input
                warn={!formValues.contact}
                type="number"
                name="contact"
                autoComplete="on"
                value={formValues.contact}
                onChange={onInputChange}
                placeholder="Mobile number *"
              />
              <Input
                warn={!formValues.addressLine_1}
                name="addressLine_1"
                autoComplete="on"
                value={formValues.addressLine_1}
                onChange={onInputChange}
                placeholder="Address line 1 *"
              />
              <Input
                name="addressLine_2"
                autoComplete="on"
                value={formValues.addressLine_2}
                onChange={onInputChange}
                placeholder="Address line 2 *"
              />
              <Input
                warn={!formValues.city}
                name="city"
                autoComplete="on"
                value={formValues.city}
                onChange={onInputChange}
                placeholder="City *"
              />
              <Input
                warn={!formValues.postalCode}
                type="number"
                name="postalCode"
                autoComplete="on"
                value={formValues.postalCode}
                onChange={onInputChange}
                placeholder="Postal code *"
              />
              <Input
                warn={!formValues.state}
                name="state"
                autoComplete="on"
                value={formValues.state}
                onChange={onInputChange}
                placeholder="State *"
              />
              <Input
                warn={!formValues.country}
                name="country"
                autoComplete="on"
                value={formValues.country}
                onChange={onInputChange}
                placeholder="Country *"
              />
              <Button type="submit" disabled={isErrorVisible}>
                Continue payment
              </Button>
            </Form>
          </OrderInfo>
        </>
      ) : (
        <>
          <ProductsContainer>
            <h3>CART</h3>
            Your cart is empty
          </ProductsContainer>
        </>
      )}
    </CartRoot>
  );
};

export default Cart;

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
  // Input,
  Form,
  OrderInfo,
  ProductsContainer,
  WarnText,
  Center,
} from "./_styles/styled.cart";
import { useAppDispatch, useAppSelector } from "../_store/store";
import {
  addToCart,
  fetchCartProductsWithIds,
  updateCartProductsLoading,
} from "../_slices/cart.slice";
import { Loading } from "../_components/loading";
import { Table } from "./_components/table";

import { Product } from "../_types/products.types";
import { columns } from "./_components/columns";
import { BodyCellLabelProps } from "./_components/table.types";
import { checkout } from "../_slices/order.slice";
import { Input } from "../_components/input/input";

interface CartPriceInfo {
  [key: string]: number;
}

interface FormValues {
  name: string;
  email: string;
  contact: string;
  alternateNumber: string;
  streetAddress: string;
  city: string;
  postalCode: string;
  state: string;
  country: string;
}

const initialFormValues = {
  name: "",
  email: "",
  contact: "",
  alternateNumber: "",
  streetAddress: "",
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
      [evt.target.name]: evt.target.value,
    }));
  }, []);

  const onSubmit = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault();
      const cartItems = selectedProductToPurchase.reduce((acc, curr) => {
        return (acc = { ...acc, [curr]: cartPriceInfo[curr] });
      }, {});
      dispatch(checkout({ ...formValues, cartItems, isPaid: true }));
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
    } else {
      dispatch(updateCartProductsLoading(false));
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
      !formValues.alternateNumber ||
      !formValues.streetAddress ||
      !formValues.city ||
      !formValues.postalCode ||
      !formValues.state ||
      !formValues.country ||
      !selectedProductToPurchase.length
    ) {
      return true;
    } else return false;
  }, [
    formValues.alternateNumber,
    formValues.city,
    formValues.contact,
    formValues.country,
    formValues.email,
    formValues.name,
    formValues.postalCode,
    formValues.state,
    formValues.streetAddress,
    selectedProductToPurchase.length,
  ]);

  if (products.isLoading) {
    return <Loading />;
  }

  return (
    <CartRoot>
      {cartProducts.length > 0 && (
        <>
          <ProductsContainer className="custom-scrollbar">
            <Center>CART</Center>
            <Table<Product>
              data={cartProducts}
              columns={columns}
              onCellClick={onCellClick}
              highlightRows={selectedProductToPurchase}
            />
          </ProductsContainer>
          <OrderInfo>
            <Center>ORDER INFORMATION</Center>
            <Form onSubmit={onSubmit}>
              <Input
                required
                name="name"
                autoComplete="on"
                value={formValues.name}
                onChange={onInputChange}
                placeholder="Name"
              />
              <Input
                required
                name="email"
                autoComplete="on"
                value={formValues.email}
                onChange={onInputChange}
                placeholder="Email"
              />
              <Input
                required
                type="number"
                name="contact"
                autoComplete="on"
                value={formValues.contact}
                onChange={onInputChange}
                placeholder="Mobile number"
              />
              <Input
                required
                type="number"
                name="alternateNumber"
                autoComplete="on"
                value={formValues.alternateNumber}
                onChange={onInputChange}
                placeholder="Alternate Number"
              />
              <Input
                required
                name="streetAddress"
                autoComplete="on"
                value={formValues.streetAddress}
                onChange={onInputChange}
                placeholder="Streed Address"
              />
              <Input
                required
                name="city"
                autoComplete="on"
                value={formValues.city}
                onChange={onInputChange}
                placeholder="City"
              />
              <Input
                required
                type="number"
                name="postalCode"
                autoComplete="on"
                value={formValues.postalCode}
                onChange={onInputChange}
                placeholder="Postal code"
              />
              <Input
                required
                name="state"
                autoComplete="on"
                value={formValues.state}
                onChange={onInputChange}
                placeholder="State"
              />
              <Input
                required
                name="country"
                autoComplete="on"
                value={formValues.country}
                onChange={onInputChange}
                placeholder="Country"
              />
              <WarnText show={isErrorVisible}>
                {selectedProductToPurchase.length > 0
                  ? "All fields marked with * are required"
                  : "Select atleast one product to purchase"}
              </WarnText>
              <Button type="submit">Continue payment</Button>
            </Form>
          </OrderInfo>
        </>
      )}
      {!cartProducts.length && <Center>Your cart is empty</Center>}
    </CartRoot>
  );
};

export default Cart;

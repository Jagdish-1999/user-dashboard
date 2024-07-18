"use client";
import { Product } from "@/app/_types/products.types";
import {
  CardContainer,
  CardRoot,
  Cart,
  Price,
  SlideWrapper,
  Title,
  TitleWrapper,
  Wishlist,
} from "./styled.card";
import { ImageSlider } from "../image-slider/image-slider";
import { useTheme } from "../theme-providers";
import { useAppDispatch, useAppSelector } from "@/app/_store/store";
import { addToWishlist } from "@/app/_slices/wishlist.slice";
import { addToCart } from "@/app/_slices/cart.slice";

const Card = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useTheme();

  const wishlistItems = useAppSelector((state) => state.wishlist.data);
  const cartItems = useAppSelector((state) => state.cart.data);

  return (
    <CardRoot>
      <Wishlist
        width="25px"
        height="25px"
        stroke={
          wishlistItems.includes(product._id)
            ? "#d30c91"
            : isDarkMode
              ? "#fff"
              : "#111"
        }
        fill={wishlistItems.includes(product._id) ? "#d30c91" : "none"}
        onClick={() => {
          dispatch(addToWishlist(product._id));
        }}
      />
      <Cart
        width="25px"
        height="25px"
        stroke={
          cartItems.includes(product._id)
            ? "#d30c91"
            : isDarkMode
              ? "#fff"
              : "#111"
        }
        fill={cartItems.includes(product._id) ? "#d30c91" : "none"}
        onClick={() => {
          dispatch(addToCart(product._id));
        }}
      />
      <SlideWrapper>
        <ImageSlider images={product.images} />
      </SlideWrapper>
      <CardContainer href={`/products/${product._id}`}>
        <TitleWrapper>
          <Title>{product.name}</Title>
          <Price>
            &#x20B9; <span>{product.price}</span>
          </Price>
        </TitleWrapper>
      </CardContainer>
    </CardRoot>
  );
};

export { Card };

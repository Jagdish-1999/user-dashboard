"use client";
import { Product } from "@/app/_types/products.types";
import {
  ButtonCart,
  ButtonWishlist,
  CardContainer,
  CardRoot,
  Price,
  SlideWrapper,
  Title,
  TitleWrapper,
} from "./styled.card";
import { ImageSlider } from "../../../_components/image-slider/image-slider";
import { useTheme } from "../../../_components/theme-providers";
import { useAppDispatch, useAppSelector } from "@/app/_store/store";
import { addToWishlist } from "@/app/_slices/wishlist.slice";
import { addToCart } from "@/app/_slices/cart.slice";
import { css } from "styled-components";
import { CartIcon } from "@/app/_icons/cart";
import { WishlistIcon } from "@/app/_icons/wishlist";

const Card = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useTheme();

  const wishlistItems = useAppSelector((state) => state.wishlist.data);
  const cartItems = useAppSelector((state) => state.cart.data);

  return (
    <CardRoot passHref href={`/products/${product._id}`}>
      <ButtonWishlist
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          dispatch(addToWishlist(product._id));
        }}
      >
        <WishlistIcon
          width="18px"
          height="18px"
          stroke={
            wishlistItems.includes(product._id)
              ? "#d30c91"
              : isDarkMode
                ? "#fff"
                : "#111"
          }
          fill={wishlistItems.includes(product._id) ? "#d30c91" : "none"}
        />
      </ButtonWishlist>
      <ButtonCart
        onClick={(evt) => {
          evt.preventDefault();
          evt.stopPropagation();
          dispatch(addToCart(product._id));
        }}
      >
        <CartIcon
          width="18px"
          height="18px"
          stroke={
            cartItems.includes(product._id)
              ? "#d30c91"
              : isDarkMode
                ? "#fff"
                : "#111"
          }
          fill={cartItems.includes(product._id) ? "#d30c91" : "none"}
        />
      </ButtonCart>
      <SlideWrapper>
        <ImageSlider
          styles={css`
            cursor: pointer;
          `}
          images={product.images}
        />
      </SlideWrapper>
      <CardContainer>
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

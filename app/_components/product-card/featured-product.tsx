"use client";

import { Product } from "@/app/_types/products.types";
import {
  Button,
  ButtonLink,
  ButtonWrapper,
  Cart,
  Description,
  DescriptionWrapper,
  ProductWrapper,
  Title,
  Wishlist,
} from "./styled.featured-product";

import { ImageSlider } from "../image-slider/image-slider";
import { useTheme } from "../theme-providers";
import { addToWishlist } from "@/app/_slices/wishlist.slice";
import { addToCart } from "@/app/_slices/cart.slice";
import { useAppDispatch, useAppSelector } from "@/app/_store/store";

const FeaturedProduct = ({ product }: { product: Product }) => {
  const dispatch = useAppDispatch();
  const { isDarkMode } = useTheme();
  const wishlistItems = useAppSelector((state) => state.wishlist.data);
  const cartItems = useAppSelector((state) => state.cart.data);

  return (
    <ProductWrapper>
      <DescriptionWrapper>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <ButtonWrapper>
          <ButtonLink href={`/products/${product._id}`} $variant="outlined">
            Read more
          </ButtonLink>
          <Button
            onClick={() => {
              dispatch(addToWishlist(product._id));
            }}
          >
            <Wishlist
              pointerEvents="none"
              width="16px"
              height="16px"
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
            Add to wishlist
          </Button>
          <Button
            onClick={() => {
              dispatch(addToCart(product._id));
            }}
          >
            <Cart
              pointerEvents="none"
              width="16px"
              height="16px"
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
            Add to cart
          </Button>
        </ButtonWrapper>
      </DescriptionWrapper>
      <ImageSlider images={product.images} />
    </ProductWrapper>
  );
};

export { FeaturedProduct };

"use client";
import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../_store/store";
import { HomeRoot } from "../_styles/styled-home";
import {
  fetchWishlistProductsWithIds,
  updateWishlistProductsLoading,
} from "../_slices/wishlist.slice";
import { Card } from "../products/_components/product-card/card";
import { Loading } from "../_components/loading";
import { Center, ProductsContainer } from "./_styles/styled.wishlist";

const Wishlist = () => {
  const initialRef = useRef(true);
  const dispatch = useAppDispatch();

  const { data: wishlistItems, products } = useAppSelector(
    (state) => state.wishlist
  );

  useEffect(() => {
    if (initialRef.current && wishlistItems.length > 0) {
      dispatch(fetchWishlistProductsWithIds(wishlistItems));
      initialRef.current = false;
    } else {
      dispatch(updateWishlistProductsLoading(false));
    }
  }, [dispatch, wishlistItems]);

  if (products.isLoading) {
    return <Loading />;
  }

  return (
    <HomeRoot>
      <ProductsContainer className="custom-scrollbar">
        {products.data.length > 0 &&
          products.data.map((product) => (
            <Card key={product._id} product={product} />
          ))}
      </ProductsContainer>
      {!products.data.length && <Center>Your wishlist is empty</Center>}
    </HomeRoot>
  );
};

export default Wishlist;

"use client";

import { useEffect, useRef } from "react";
import { Loading } from "../_components/loading";
import { useAppDispatch, useAppSelector } from "../_store/store";
import { fetchProducts } from "../_slices/product.slice";
import { HomeRoot, ProductsContainer } from "../_styles/styled-home";
import { FeaturedProduct } from "../_components/product-card/featured-product";
import { Card } from "../_components/product-card/card";

const Products = () => {
  const initialRef = useRef(true);
  const dispatch = useAppDispatch();

  const { data: products, isLoading } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (initialRef.current && !products.length) {
      dispatch(fetchProducts());
    }
    initialRef.current = false;
  }, [dispatch, products.length]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <HomeRoot>
      <ProductsContainer className="custom-scrollbar">
        <FeaturedProduct product={products[5]} />
        {products.map((product) => (
          <Card key={product._id} product={product} />
        ))}
      </ProductsContainer>
    </HomeRoot>
  );
};

export default Products;

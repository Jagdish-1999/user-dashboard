"use client";

import { Loading } from "@/app/_components/loading";
import {
  fetchProductWithId,
  updateProductDetailsData,
  updateProductDetailsLoading,
} from "@/app/_slices/product-details.slice";

import { useAppDispatch, useAppSelector } from "@/app/_store/store";
import { Product } from "@/app/_types/products.types";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  Arrow,
  ButtonContainer,
  Container,
  DetailsHeading,
  EachProperty,
  ImageContainer,
  Images,
  MainImage,
  Price,
  ProductDescription,
  ProductDetailWrapper,
  ProductDetailsContainer,
  ProductName,
  ProductNameContainer,
  PropertyLabel,
  PropertyValue,
  StyledImage,
} from "./_styles/styled.product-details";
import {
  Button,
  Cart,
} from "../products/_components/product-card/styled.featured-product";
import { useTheme } from "@/app/_components/theme-providers";
import { addToCart } from "@/app/_slices/cart.slice";

const ProductDetails = () => {
  const inititalRef = useRef(true);
  const initialDispatch = useRef(true);
  const dispatch = useAppDispatch();
  const { pid }: { pid: string } = useParams();
  const [product, setProduct] = useState<Product>({} as Product);
  const [activeUrl, setActiveUrl] = useState<string>(
    product?.images?.[0]?.url || ""
  );
  const [imageUrls, setImageUrls] = useState<{ id: string; url: string }[]>([]);

  const { isDarkMode } = useTheme();
  const cartItems = useAppSelector((state) => state.cart.data);
  const isLoading = useAppSelector((state) => state.productDetails.isLoading);
  const item = useAppSelector((state) => state.productDetails.data);
  const plpItem = useAppSelector((state) =>
    state.products.data.find((p) => p._id === pid)
  );

  useEffect(() => {
    if (plpItem && initialDispatch.current) {
      setProduct(plpItem);
      dispatch(updateProductDetailsData(plpItem));
      dispatch(updateProductDetailsLoading(false));
      inititalRef.current = false;
      initialDispatch.current = false;
    } else {
      if (Object.keys(item).length) {
        setProduct(item);
      } else {
        if (inititalRef.current) {
          dispatch(fetchProductWithId(pid));
          inititalRef.current = false;
        }
      }
    }
  }, [dispatch, item, pid, plpItem, product]);

  useEffect(() => {
    setActiveUrl(product.images?.[0].url);
    setImageUrls(product.images?.length > 1 ? product.images : []);
  }, [product.images]);

  if (isLoading) return <Loading />;

  return (
    <Container className="custom-scrollbar">
      <ProductDetailWrapper>
        <ProductNameContainer>
          <ProductName>{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <Price>
            &#x20B9; <span>{product.price}</span>
          </Price>
          <ButtonContainer>
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
          </ButtonContainer>
        </ProductNameContainer>
        <ProductDetailsContainer>
          <DetailsHeading>Product Details</DetailsHeading>
          {product?.properties?.map((p) => (
            <EachProperty key={p.name}>
              <PropertyLabel>
                {p.name}
                <Arrow>→</Arrow>
              </PropertyLabel>
              <PropertyValue>{p.value}</PropertyValue>
            </EachProperty>
          ))}
        </ProductDetailsContainer>
      </ProductDetailWrapper>
      <ImageContainer>
        <MainImage>
          {activeUrl && (
            <StyledImage
              isMainImage={true}
              src={activeUrl}
              alt="image"
              width={500}
              height={500}
              priority
            />
          )}
        </MainImage>
        <Images className="no-scrollbar">
          {imageUrls?.map((image) => (
            <StyledImage
              isActive={image.url === activeUrl}
              onClick={() => setActiveUrl(image.url)}
              src={image.url}
              alt="image"
              width={500}
              height={500}
              priority
              key={image.id}
            />
          ))}
        </Images>
      </ImageContainer>
    </Container>
  );
};

export default ProductDetails;

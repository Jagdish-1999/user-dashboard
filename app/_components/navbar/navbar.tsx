"use client";
import { useAppDispatch, useAppSelector } from "@/app/_store/store";
import {
  RootNavbar,
  StyledLink,
  Links,
  Count,
  StyledImage,
  NavLogoContainer,
} from "./styled-navbar";
import { useTheme } from "../theme-providers";
import { CartIcon } from "@/app/_icons/cart";
import { WishlistIcon } from "@/app/_icons/wishlist";
import { useEffect, useRef, useState } from "react";
import { fetchWishlistProducts } from "@/app/_slices/wishlist.slice";
import { fetchCartProducts } from "@/app/_slices/cart.slice";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const initialRender = useRef(true);
  const dispatch = useAppDispatch();
  const { toggleTheme, isDarkMode } = useTheme();

  const { data: cartItems } = useAppSelector((state) => state.cart);
  const { data: wishlistItems } = useAppSelector((state) => state.wishlist);
  const cartCount = cartItems.length;
  const wishlistCount = wishlistItems.length;

  useEffect(() => {
    if (initialRender.current) {
      if (!wishlistItems.length) dispatch(fetchWishlistProducts());
      if (!cartItems.length) dispatch(fetchCartProducts());
    }
    initialRender.current = false;
  }, [wishlistItems.length, cartItems.length, dispatch]);

  return (
    <RootNavbar>
      <StyledLink href="/" underline={"false"}>
        <NavLogoContainer>
          <StyledImage
            src="/assets/app-logo.svg"
            alt="logo"
            priority
            width={30}
            height={30}
          />
          Dashboard
        </NavLogoContainer>
      </StyledLink>
      <Links>
        <StyledImage
          src={
            isDarkMode ? "/assets/dark-theme.png" : "/assets/light-theme.png"
          }
          alt="theme"
          width={500}
          height={500}
          onClick={toggleTheme}
        />
        <StyledLink href="/" isActive={path === "/"}>
          Home
        </StyledLink>
        <StyledLink href="/products" isActive={path === "/products"}>
          Products
        </StyledLink>
        <StyledLink href="/categories" isActive={path === "/categories"}>
          Categories
        </StyledLink>
        <StyledLink href="/account" isActive={path === "/account"}>
          Account
        </StyledLink>
        <StyledLink href="/wishlist" isActive={path === "/wishlist"}>
          <WishlistIcon
            fill={isDarkMode ? "#ddd" : "#666"}
            width="20px"
            height="20px"
          />
          Wishlist
          {wishlistCount > 0 && (
            <Count>{wishlistCount > 9 ? "9+" : wishlistCount}</Count>
          )}
        </StyledLink>
        <StyledLink href="/cart" isActive={path === "/cart"}>
          <CartIcon
            fill={isDarkMode ? "#ddd" : "#666"}
            width="18px"
            height="18px"
          />
          Cart
          {cartCount > 0 && <Count>{cartCount > 9 ? "9+" : cartCount}</Count>}
        </StyledLink>
      </Links>
    </RootNavbar>
  );
};

export { Navbar };

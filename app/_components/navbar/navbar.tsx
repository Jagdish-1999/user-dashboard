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
import { useEffect, useRef } from "react";
import { fetchWishlistProducts } from "@/app/_slices/wishlist.slice";
import { fetchCartProducts } from "@/app/_slices/cart.slice";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();
  const initialRender = useRef(true);
  const countRef = useRef({ cartCount: 0, wishlistCount: 0 });
  const dispatch = useAppDispatch();
  const { toggleTheme, isDarkMode } = useTheme();

  const cartItems = useAppSelector((state) => state.cart.data);
  const wishlistItems = useAppSelector((state) => state.wishlist.data);
  countRef.current.cartCount = cartItems.length;
  countRef.current.wishlistCount = wishlistItems.length;

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
        <StyledLink href="/orders" isActive={path === "/orders"}>
          Orders
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
          {countRef.current.wishlistCount > 0 && (
            <Count>
              {countRef.current.wishlistCount > 9
                ? "9+"
                : countRef.current.wishlistCount}
            </Count>
          )}
        </StyledLink>
        <StyledLink href="/cart" isActive={path === "/cart"}>
          <CartIcon
            fill={isDarkMode ? "#ddd" : "#666"}
            width="18px"
            height="18px"
          />
          Cart
          {countRef.current.cartCount > 0 && (
            <Count>
              {countRef.current.cartCount > 9
                ? "9+"
                : countRef.current.cartCount}
            </Count>
          )}
        </StyledLink>
      </Links>
    </RootNavbar>
  );
};

export { Navbar };

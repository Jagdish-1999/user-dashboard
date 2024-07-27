import { CartIcon } from "@/app/_icons/cart";
import { WishlistIcon } from "@/app/_icons/wishlist";
import Link from "next/link";
import styled, { css } from "styled-components";

const ProductWrapper = styled.div`
  cursor: default;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
  border-radius: 4px;
  padding: 1rem;
  grid-column: 1/-1;
  background-color: ${(props) => props.theme.colors.nav_bg};
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  width: 70%;
`;

const ProductDescription = styled.div``;

const Title = styled.h2`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.description};
  font-family: "DM Sans";
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  padding-block: 0.5rem;
`;

const buttonStyle = css<{ $variant?: "outlined" | "normal" }>`
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: inherit;
  font-family: inherit;
  ${({ $variant = "normal" }) =>
    $variant === "outlined"
      ? css`
          background-color: transparent;
          border: 1px solid ${(props) => props.theme.colors.button_border};
        `
      : css`
          background-color: ${(props) => props.theme.colors.primary};
          border: 1px solid ${(props) => props.theme.colors.button_border};
        `}
`;

const Button = styled.button<{ $variant?: "outlined" | "normal" }>`
  ${buttonStyle}
`;

const ButtonLink = styled(Link)<{ $variant: "outlined" | "normal" }>`
  ${buttonStyle}
  text-decoration: none;
  font-size: 14px;
  text-underline-offset: 1px;
  transition: all 0.3s;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }
`;

const Wishlist = styled(WishlistIcon)`
  transition: all 0.2s;
`;

const Cart = styled(CartIcon)`
  transition: all 0.2s;
`;

export {
  ProductWrapper,
  DescriptionWrapper,
  ProductDescription,
  Title,
  Description,
  ButtonWrapper,
  Button,
  ButtonLink,
  Wishlist,
  Cart,
};

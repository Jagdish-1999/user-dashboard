import { CartIcon } from "@/app/_icons/cart";
import { WishlistIcon } from "@/app/_icons/wishlist";
import Link from "next/link";
import styled, { css } from "styled-components";

const CardRoot = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: centser;
  align-items: center;
  max-width: 300px;
  max-height: 300px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.card_border};
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.card_hover_border};
  }
`;

const iconStyle = css`
  padding: 4px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 2;
  transition: all 0.2s;
  border-radius: 100%;

  &:hover {
    background-color: ${(props) => props.theme.colors.card_border};
  }
`;
const Wishlist = styled(WishlistIcon)`
  ${iconStyle}
`;

const Cart = styled(CartIcon)`
  ${iconStyle}
  top: 2.1rem;
`;

const SlideWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  padding: 1rem 0;
`;

const CardContainer = styled(Link)`
  color: inherit;
  text-decoration: none;
  border-top: 1px solid ${(props) => props.theme.colors.card_border};
`;

const TitleWrapper = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
`;

const Title = styled.h4`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${(props) => props.theme.colors.product_title};
`;

const Price = styled.h4`
  display: flex;
  gap: 2px;
  font-size: 20px;
`;

export {
  CardRoot,
  Wishlist,
  Cart,
  SlideWrapper,
  CardContainer,
  TitleWrapper,
  Title,
  Price,
};

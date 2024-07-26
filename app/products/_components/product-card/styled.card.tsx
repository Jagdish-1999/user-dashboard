import Link from "next/link";
import styled, { css } from "styled-components";

const CardRoot = styled(Link)`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: centser;
  align-items: center;
  max-width: 300px;
  max-height: 300px;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53);
  background-color: ${(props) => props.theme.colors.nav_bg};
  color: inherit;
  text-decoration: none;
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
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.cart_icon_hover};
  }
`;

const ButtonWishlist = styled.button`
  ${iconStyle}
`;

const ButtonCart = styled.button`
  ${iconStyle};
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

const CardContainer = styled.div`
  border-top: 1px solid ${(props) => props.theme.colors.card_border};
  width: 100%;
`;

const TitleWrapper = styled.div`
  padding: 0.5rem 1.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  width: 100%;
  font-family: "DM Sans";
  font-size: 14px;
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
  font-size: 16px;
`;

export {
  CardRoot,
  ButtonWishlist,
  ButtonCart,
  SlideWrapper,
  CardContainer,
  TitleWrapper,
  Title,
  Price,
};

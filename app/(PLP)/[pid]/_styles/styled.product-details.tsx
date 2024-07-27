import Image from "next/image";
import styled, { css } from "styled-components";

const Container = styled.div`
  overflow: auto;
  display: flex;
  gap: var(--padding-12);
  width: 100%;
  height: calc(100% - 72px);
  padding-inline: 8.5rem;
  margin-top: var(--padding-12);

  @media screen and (max-width: 1250px) {
    padding-inline: 4.5rem;
  }
  @media screen and (max-width: 850px) {
    padding-inline: 2.5rem;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  gap: var(--padding-12);
`;

const MainImage = styled.div`
  width: 350px;
  height: 350px;
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.nav_bg};
  border-radius: var(--padding-12);
`;

const StyledImage = styled(Image).withConfig({
  shouldForwardProp: (prop) => !["isActive", "isMainImage"].includes(prop),
})<{ isMainImage?: boolean; isActive?: boolean }>`
  ${({ isMainImage }) =>
    isMainImage
      ? css`
          width: auto;
          height: auto;
          max-height: 350px;
        `
      : css`
          width: 50px;
          height: 50px;
          padding: var(--padding-4);
          border-radius: var(--padding-12);
          border: 1px solid ${(props) => props.theme.colors.card_border};
          border-spacing: var(--padding-4);
          outline-offset: var(--padding-4);
          background-color: ${(props) => props.theme.colors.nav_bg};
          cursor: pointer;
        `}

  ${({ isActive }) =>
    isActive &&
    css`
      border: 1px solid green;
    `}
`;

const Images = styled.div`
  width: 350px;
  display: flex;
  overflow: auto;
  justify-content: center;
  gap: var(--padding-10);
`;

const ProductDetailWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: var(--padding-12);
`;

const ProductNameContainer = styled.div`
  background-color: ${(props) => props.theme.colors.nav_bg};
  padding: 1rem;
  border-radius: var(--padding-8);
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
`;

const ProductName = styled.h2``;

const ProductDescription = styled.p`
  margin-top: 1rem;
  font-family: "DM Sans";
  color: ${(props) => props.theme.colors.description};
`;

const Price = styled.h3`
  font-family: "DM Sans";
  display: flex;
  gap: 2px;
`;

const ButtonContainer = styled.div`
  width: fit-content;
`;

const ProductDetailsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.nav_bg};
  padding: 1rem;
  border-radius: var(--padding-8);
`;

const DetailsHeading = styled.h2`
  padding-bottom: 1rem;
`;

const EachProperty = styled.div`
  display: flex;
  padding-block: var(--padding-8);
  height: fit-content;
  width: 100%;
`;

const PropertyLabel = styled.h5`
  min-width: 180px;
  align-items: center;
  display: flex;
  justify-content: space-between;
  font-family: "DM Sans";
  text-transform: uppercase;
`;

const Arrow = styled.span``;

const PropertyValue = styled.p`
  padding-left: 4rem;
  color: ${(props) => props.theme.colors.description};
`;

export {
  Container,
  ImageContainer,
  MainImage,
  Images,
  StyledImage,
  ProductDetailWrapper,
  ProductNameContainer,
  ProductName,
  ProductDescription,
  Price,
  ButtonContainer,
  ProductDetailsContainer,
  DetailsHeading,
  EachProperty,
  PropertyLabel,
  Arrow,
  PropertyValue,
};

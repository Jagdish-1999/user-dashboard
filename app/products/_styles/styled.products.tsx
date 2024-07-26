import styled, { css } from "styled-components";

export const rootStyles = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* @media screen and (max-width: 1200px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 850px) {
    padding: 0 2rem;
  } */
`;

const ProductsRoot = styled.div`
  ${rootStyles}
  padding: var(--padding-12);
  padding-right: 0;
`;

const ProductsContainer = styled.div`
  overflow: auto;
  width: 100%;
  max-height: 100%;
  height: fit-content;
  padding-right: var(--padding-10);
  gap: var(--padding-12);
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { ProductsRoot, ProductsContainer };

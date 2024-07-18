import styled, { css } from "styled-components";

export const rootStyles = css`
  width: 100%;
  height: calc(100% - 76px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 8rem;

  @media screen and (max-width: 1200px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 850px) {
    padding: 0 2rem;
  }
`;

const HomeRoot = styled.div`
  ${rootStyles}
`;

const ProductsContainer = styled.div`
  overflow: auto;
  width: 100%;
  max-height: 100%;
  height: fit-content;
  padding: 0 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export { HomeRoot, ProductsContainer };

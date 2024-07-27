import styled from "styled-components";

const ProductsContainer = styled.div`
  overflow: auto;
  width: 100%;
  max-height: 100%;
  height: fit-content;
  padding: 0 0.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1rem;

  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Center = styled.div`
  display: flex;
  gap: 1rem;
  height: 100%;
  width: 100%;
  font-size: 20px;
  justify-content: center;
  align-items: center;
`;

export { ProductsContainer, Center };

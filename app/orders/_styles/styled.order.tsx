import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 72px);
  padding-inline: 8.5rem;
  padding-bottom: var(--padding-12);
  margin-top: var(--padding-12);

  @media screen and (max-width: 1200px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 850px) {
    padding: 0 2rem;
  }
`;

const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--padding-12);
  overflow: auto;
  padding: 1rem;
  padding-right: var(--padding-8);
  border-radius: var(--padding-6);
  height: 100%;
`;

const StyledEachOrder = styled.div`
  padding: var(--padding-12);
  border-radius: var(--padding-6);
  background-color: ${(props) => props.theme.colors.nav_bg};
`;

export { Container, OrdersContainer, StyledEachOrder };

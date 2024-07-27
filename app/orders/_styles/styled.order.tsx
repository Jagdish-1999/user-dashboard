import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: calc(100% - 72px);
  padding-inline: 8.5rem;
  padding-bottom: var(--padding-12);
  margin-top: var(--padding-12);
`;

const OrdersContainer = styled.div`
  overflow: auto;
  background-color: ${(props) => props.theme.colors.nav_bg};
  padding: 1rem;
  border-radius: var(--padding-6);
  height: 100%;
`;

export { Container, OrdersContainer };

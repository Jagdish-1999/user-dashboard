import styled, { css } from "styled-components";

const CartRoot = styled.div`
  height: calc(100% - 60px);
  padding: 1rem 8rem;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 2rem;
`;

const ProductsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.nav_bg};
  padding: 1rem;
  overflow: auto;
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  border-radius: 8px;
`;

const OrderInfo = styled.div`
  background-color: ${(props) => props.theme.colors.nav_bg};
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "warn",
})<{ warn?: boolean }>`
  padding: 10px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #aaaaaa44;
  border-radius: 4px;
  font-family: inherit;
  color: inherit;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
  /* 
  &::placeholder {
    opacity: 0.9;
    color: ${(props) => props.theme.colors.danger};
  } */

  &:focus {
    outline-offset: 3px;
    outline: 2px solid #007daaaa;
    appearance: none;
  }

  ${({ warn }) =>
    warn &&
    css`
      &::placeholder {
        opacity: 0.9;
        color: ${(props) => props.theme.colors.danger};
      }
      /* color: ${(props) => props.theme.colors.delete_icon}; */
    `}
`;

const Button = styled.button`
  padding: 10px;
  font-family: inherit;
  font-size: 16px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.fg};
  border-radius: 4px;
  border: none;
  cursor: pointer;
  outline: none;

  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`;

export { CartRoot, ProductsContainer, OrderInfo, Form, Input, Button };

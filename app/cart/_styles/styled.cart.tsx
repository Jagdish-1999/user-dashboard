import styled from "styled-components";

const CartRoot = styled.div`
  height: calc(100% - 60px);
  padding: 1rem 8rem;
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  gap: 1rem;
  background-color: ${(props) => props.theme.colors.bg};
`;

const ProductsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.nav_bg};
  padding: 1rem;
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  border-radius: 8px;
`;

const OrderInfo = styled.div`
  background-color: ${(props) => props.theme.colors.nav_bg};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Center = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 1/-1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: #aaaaaa44;
  border-radius: 4px;
  font-family: inherit;
  color: inherit;
  font-size: 15px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }

  &:focus {
    outline-offset: 2px;
    outline: 2px solid #05b0eee3;
    appearance: none;
  }
`;

const WarnText = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "show",
})<{ show: boolean }>`
  color: ${(props) => props.theme.colors.required_fields_fg};
  font-size: 12px;
  font-weight: 600;
  transform: all 0.3s;
  text-indent: 2px;
  opacity: ${(props) => (props.show ? "1" : "0")};
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
`;

export {
  CartRoot,
  ProductsContainer,
  OrderInfo,
  Center,
  Form,
  Input,
  WarnText,
  Button,
};

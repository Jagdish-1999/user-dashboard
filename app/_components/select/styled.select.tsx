import styled from "styled-components";

const CustomSelectContainer = styled.div`
  position: relative;
  font-family: inherit;
  width: 80px;
`;

const SelectElement = styled.select`
  display: none; /*hide original SELECT element:*/
`;

const SelectSelected = styled.div`
  color: inherit;
  padding: 8px 16px;
  border: 1px solid ${(props) => props.theme.colors.cart_border};
  border-color: transparent transparent
    ${(props) => props.theme.colors.cart_border} transparent;
  cursor: pointer;
  user-select: none;
  position: relative;
  height: 100%;

  &:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 14px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: ${(props) => props.theme.colors.fg} transparent transparent
      transparent;
    transition: all 0.3s;
  }

  &.select-arrow-active:after {
    border-color: transparent transparent ${(props) => props.theme.colors.fg}
      transparent;
    top: 7px;
  }
`;

const SelectItems = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "show",
})<{ show: boolean }>`
  position: absolute;
  background-color: ${(props) => props.theme.colors.bg};
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
  display: none; /*hide the items when the select box is closed:*/
  ${(props) => props.show && "display: block;"}
  max-height: 250px;
  overflow: auto;
  border-radius: 2px;

  div {
    color: inherit;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
    user-select: none;
    height: 100%;

    &:hover,
    &.same-as-selected {
      background-color: rgba(0, 0, 0, 0.1);
      background-color: ${(props) => props.theme.colors.select_item_hover};
      height: fit-content;
    }
  }
`;

export { CustomSelectContainer, SelectElement, SelectSelected, SelectItems };

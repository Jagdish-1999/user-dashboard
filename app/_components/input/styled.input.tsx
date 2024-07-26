import styled, { css } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid #b312b3; */
  position: relative;
  border-radius: 4px;
  /* overflow: hidden; */
  color: ${(props) => props.theme.colors.input_fg};
  border: 1px solid ${(props) => props.theme.colors.input_bg};
`;

const Label = styled.label`
  display: flex;
  position: absolute;
  top: 50%;
  transform: translate(12px, -50%);
  font-size: 15px;
  pointer-events: none;
  color: inherit;
  transition: all 0.2s;
`;

const StyledInput = styled.input`
  background-color: transparent;
  color: inherit;
  padding: 12px 18px;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: 15px;

  &:focus + .label,
  &:valid + .label {
    color: inherit;
    border-radius: 8px;
    padding-inline: 8px;
    font-size: 12px;
    background-color: ${(props) => props.theme.colors.nav_bg};
    backdrop-filter: blur(18px);
    transform: translate(18px, -31px);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

const Astrick = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== "show",
})<{ show?: boolean }>`
  color: ${(props) => props.theme.colors.required_fields_fg};
  font-size: 12px;
  font-weight: 600;
  transform: all 0.3s;
  text-indent: 3px;
  ${(props) =>
    props.show
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0;
        `};
`;

export { Container, Label, StyledInput, Astrick };

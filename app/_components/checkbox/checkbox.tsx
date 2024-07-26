import React, { InputHTMLAttributes } from "react";
import { Container, StyledInput, CheckMark } from "./styled.checkbox";

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {}

const CheckBox = (props: CheckBoxProps) => {
  return (
    <Container>
      <StyledInput type="checkbox" {...props} />
      <CheckMark />
    </Container>
  );
};

export { CheckBox };

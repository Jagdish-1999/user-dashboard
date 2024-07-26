import { InputHTMLAttributes } from "react";
import { Astrick, Container, Label, StyledInput } from "./styled.input";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const Input = ({
  name,
  placeholder,
  required,
  value,
  ...props
}: InputProps) => {
  return (
    <Container>
      <StyledInput
        className="input"
        id={name}
        value={value}
        name={name}
        required={required}
        {...props}
      />
      <Label htmlFor={name} className="label">
        {placeholder}
        <Astrick show={required && !value}>*</Astrick>
      </Label>
    </Container>
  );
};

export { Input };

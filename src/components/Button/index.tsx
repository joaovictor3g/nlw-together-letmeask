import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <StyledButton {...props}>
      
    </StyledButton>
  );
}
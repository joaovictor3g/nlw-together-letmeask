import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined=false, ...rest }: ButtonProps) {
  return (
    <StyledButton 
      isOutlined={isOutlined} 
      {...rest} 
    />
  );
}
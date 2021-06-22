import { useState } from "react";
import Switch from "react-switch";
import { Container } from "./styles";

interface ISwitcher {
  onChange(): void;
  checked: boolean;
}

export function Switcher({ onChange, checked }: ISwitcher) {
  return (
    <Container>
      <Switch 
        onChange={onChange}
        checked={checked}
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        handleDiameter={20}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        height={10}
        width={48}
      
      />
    </Container>
  )
}
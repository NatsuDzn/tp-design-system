import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Button text={"Sign in"}></Button>
      <Button text={"Sign up"}></Button>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  background: #f1f1f1;
  padding: 1.5rem;
`;

export default Header;
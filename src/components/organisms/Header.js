import React from "react";
import styled from "styled-components";
import { Button } from "../atoms/Button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link to="/">
        <Button text={"Sign in"}></Button>
      </Link>
      <Link to="/register">
        <Button text={"Sign up"}></Button>
      </Link>
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

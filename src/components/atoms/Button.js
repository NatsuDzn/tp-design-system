import React from "react";
import styled from "styled-components";

export const Button = ({ text }) => {
  return (
    <ButtonStyled>
      <a>{text}</a>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  background: purple;
`;

export default Button;
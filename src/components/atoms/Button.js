import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import font from "../../styles/font";
import space from "../../styles/space";

export const Button = ({ text, disabled, isPrimary, isLoading }) => {
  return (
    <ButtonStyled
      disabled={disabled}
      isPrimary={isPrimary}
      isLoading={isLoading}
    >
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  outline: 0;
  border: 0;
  background: ${(prop) =>
    prop.isPrimary ? colors.accent.base : "transparent"};
  color: ${(prop) => (prop.isPrimary ? colors.text.white : colors.accent.base)};
  padding: ${space.measurement.xs}px ${space.measurement.lg}px;
  border-radius: ${space.measurement.xxs}px;
  font-size: ${font.size.text}px;
  font-family: ${font.family.base};
  transition: all 0.35s ease;
  box-shadow: 0px;
  cursor: pointer;
  border: ${(prop) =>
    prop.isPrimary
      ? "1px solid transparent"
      : `1px solid ${colors.accent.base}`};

  &:focus {
    box-shadow: 0 0 0 2px ${colors.accent.darker};
  }

  &:active {
    background: ${colors.accent.darker};
    color: ${colors.text.white};
    transform: scale(0.95) !important;
  }

  &:hover {
    transform: translate3d(0, -4px, 0);
    box-shadow: 0px 4px 30px rgba(110, 55, 227, 0.4);
  }

  &:disabled {
    background: ${colors.status.disabled};
    border: none;
    color: ${colors.text.white};
    pointer-events: none;
  }
`;

export default Button;

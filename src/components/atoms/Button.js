import React from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon";
import colors from "../../styles/colors";
import font from "../../styles/font";
import space from "../../styles/space";
import icons from "../../styles/icons";

export const Button = ({
  text,
  disabled,
  isPrimary,
  isLoading,
  icon,
  onClick,
}) => {
  if (icon) {
    return (
      <ButtonStyled
        disabled={disabled}
        isPrimary={isPrimary}
        isLoading={isLoading}
        onClick={onClick}
      >
        <Icon icon={handleIcon(icon)} />
        {text}
      </ButtonStyled>
    );
  }

  if (isLoading) {
    return (
      <ButtonStyled
        disabled={disabled}
        isPrimary={isPrimary}
        isLoading={isLoading}
      >
        <Icon icon={handleIcon("loading")} />
        {text}
      </ButtonStyled>
    );
  }

  return (
    <ButtonStyled
      disabled={disabled}
      isPrimary={isPrimary}
      isLoading={isLoading}
      onClick={onClick}
    >
      {text}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: 0;
  border: 0;
  background: ${(prop) =>
    prop.isPrimary ? colors.accent.base : "white"};
  color: ${(prop) => (prop.isPrimary ? colors.text.white : colors.accent.base)};
  fill: ${(prop) => (prop.isPrimary ? colors.text.white : colors.accent.base)};
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
    fill: ${colors.text.white};
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
    fill: ${colors.text.white};
    pointer-events: none;
  }
`;

function handleIcon(icon) {
  switch (icon) {
    case "loading":
      return icons.loading;
    case "user":
      return icons.user;
    case "gear":
      return icons.gear;
    default:
      return `${font.size.text}px`;
  }
}

export default Button;

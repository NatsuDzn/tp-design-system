import React from "react";
import styled from "styled-components";
import space from "../../styles/space";
import font from "../../styles/font";
import colors from "../../styles/colors";

export const Input = ({ type, placeholder, isValid, setChange }) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      isValid={isValid}
      onChange={(event) => setChange(event.target.value)}
    />
  );
};

const InputWrapper = styled.input`
  border: transparent;
  outline: 0;
  box-shadow: 0px 4px 30px rgba(168, 168, 168, 0.25);
  padding: ${space.measurement.xs}px ${space.measurement.lg}px;
  border-radius: ${space.measurement.xxs}px;
  font-size: ${font.size.text}px;
  font-family: ${font.family.base};
  border: 2px solid transparent;
  border-color: ${(prop) =>
    prop.isValid ? "transparent" : colors.status.error};
  margin: ${space.measurement.base}px 0;
  transition: all 0.35s ease;
  width: auto;

  &:focus {
    box-shadow: 0 0 0 1px ${colors.accent.darker};
    border-color: ${colors.accent.darker};
  }

  &::placeholder {
    font-style: italic;
    color: ${colors.text.placeholder};
  }
`;

export default Input;

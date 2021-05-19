import React from "react";
import styled from "styled-components";
import font from "../../styles/font";

export const Label = ({ label }) => {
  return <LabelWrapper>{label}</LabelWrapper>;
};

const LabelWrapper = styled.label`
  font-family: ${font.family.base};
  font-weight: ${font.weight.bold};
`;

export default Label;
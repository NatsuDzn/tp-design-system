import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import font from "../../styles/font";
import space from "../../styles/space";

export const Label = ({ label }) => {
  return <LabelWrapper>{label}</LabelWrapper>;
};

const LabelWrapper = styled.label`
  font-family: ${font.family.base};
  font-weight: ${font.weight.bold};
  font-size: ${font.size.text};
  color: ${colors.text.primary};
  margin-bottom: ${space.measurement.xs}px;
`;

export default Label;
import React from "react";
import styled from "styled-components";
import space from "../../styles/space";

export const Icon = ({ icon }) => {
  return (
    <IconWrapper viewBox="0 0 24 24">
      <path d={icon}></path>
    </IconWrapper>
  );
};

const IconWrapper = styled.svg`
  width: ${space.measurement.md}px;
  height: ${space.measurement.md}px;
  margin-right: ${space.measurement.xxs}px;
`;

export default Icon;

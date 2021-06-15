import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";
import space from "../../styles/space";

export const FormElement = (props) => {
  const { label, type, placeholder, isValid } = props;
  return (
    <FormElementWrapper>
      <Label label={label} />
      <Input type={type} placeholder={placeholder} isValid={isValid} />
    </FormElementWrapper>
  );
};

const FormElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${space.measurement.base}px;
`;

export default FormElement;

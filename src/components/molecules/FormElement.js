import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

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
  display: inline-flex;
  flex-direction: column;
`;

export default FormElement;

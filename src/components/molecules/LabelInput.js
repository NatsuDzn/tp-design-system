import React from "react";
import styled from "styled-components";
import { Input } from "../atoms/Input";
import { Label } from "../atoms/Label";

export const LabelInput = (props) => {
  const { label, type, placeholder, isValid } = props;
  return (
    <LabelInputWrapper>
      <Label label={label} />
      <Input type={type} placeholder={placeholder} isValid={isValid} />
    </LabelInputWrapper>
  );
};

const LabelInputWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

export default LabelInput;

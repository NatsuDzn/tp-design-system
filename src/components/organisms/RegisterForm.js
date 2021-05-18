import React from "react";
import styled from "styled-components";
import { LabelInput } from "../molecules/LabelInput";
import { Button } from "../atoms/Button";

export const RegisterForm = () => {
  return (
    <RegisterFormWrapper>
      <FormTitle>Inscrivez-vous</FormTitle>
      <div>Nous sommes ravies que vous fassiez parti de notre team !</div>
      <form>
        <LabelInput
          type="email"
          placeholder="Entrez votre adresse mail"
          label="Email"
        />
        <LabelInput type="password" placeholder="Entrez votre mot de passe" label="Password" />
        <LabelInput
          type="password"
          placeholder="Password"
          label="Password confirmation"
        />
      </form>
      <Button text="S'inscrire"></Button>
    </RegisterFormWrapper>
  );
};

const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  padding: 1.5rem;
`;

const FormTitle = styled.h2`
  text-align: center;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export default RegisterForm;
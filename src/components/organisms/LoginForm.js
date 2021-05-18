import React from "react";
import styled from "styled-components";
import { LabelInput } from "../molecules/LabelInput";
import { Button } from "../atoms/Button";

export const LoginForm = () => {
  return (
    <LoginFormWrapper>
      <FormTitle>Connectez-vous</FormTitle>
      <div>
        Vous n'avez pas encore de compte ? <a>Inscrivez-vous</a>
      </div>
      <form>
        <LabelInput
          type="email"
          placeholder="username@domain.com"
          label="Email"
        />
        <LabelInput type="password" placeholder="Password" label="Password" />
      </form>
      <div>
        Vous avez oublié votre mot de passe ?{" "}
        <a>cliquez ici pour le réinitialiser</a>
      </div>
      <Button text="Se connecter"></Button>
    </LoginFormWrapper>
  );
};

const LoginFormWrapper = styled.div`
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

export default LoginForm;
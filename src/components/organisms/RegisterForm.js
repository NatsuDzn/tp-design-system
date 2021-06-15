import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { Text } from "../atoms/Text";
import colors from "../../styles/colors";
import space from "../../styles/space";

export const RegisterForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isFormDisabled, setIsFormDisabled] = useState(true);

  useEffect(() => {
    email && password ? setIsFormDisabled(false) : setIsFormDisabled(true);
  }, [email, password]);

  const updateEmail = (value) => {
    setEmail(value);
  };

  const updatePassword = (value) => {
    setPassword(value);
  };

  const registerUser = () => {
    let user = {
      email: email,
      password: password
    }
    localStorage.setItem("users", JSON.stringify(user));
    history.push("/")
  };

  return (
    <RegisterFormWrapper>
      <Text tag="h2" color={colors.accent.base} text="Inscrivez-vous"></Text>
      <Text
        tag="h4"
        color={colors.text.primary}
        text="Nous sommes ravies que vous fassiez parti de notre team !"
      ></Text>
      <FormContainer>
        <Input
          type="email"
          placeholder="Entrez votre adresse mail"
          setChange={updateEmail}
          isValid={email !== "" ? true : false}
        />
        <Input
          type="password"
          placeholder="Entrez votre mot de passe"
          setChange={updatePassword}
          isValid={password !== "" ? true : false}
        />
        <Button
          text="S'inscrire"
          isPrimary="true"
          disabled={isFormDisabled}
          onClick={() => registerUser()}
        ></Button>
      </FormContainer>
      <FormFooter>
        <Text
          tag="h4"
          color={colors.text.primary}
          text="Vous avez déjà un compte ?"
        ></Text>
        <Text tag="h4" color={colors.accent.base} text="Connectez-vous"></Text>
        <Button
          text="Se connecter"
          isPrimary="true"
          onClick={() => history.push("/")}
        ></Button>
      </FormFooter>
    </RegisterFormWrapper>
  );
};

const RegisterFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: ${space.measurement.xs}px;
  height: calc(100vh - 3rem);

  @media screen and (min-width: 1440px) {
    height: auto;
  }
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin-bottom: auto;
  padding: 1rem 0;
`;

const FormFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${space.measurement.base}px;
`;

export default RegisterForm;

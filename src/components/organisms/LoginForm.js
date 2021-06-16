import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { Label } from "../atoms/Label";
import { Text } from "../atoms/Text";
import colors from "../../styles/colors";
import space from "../../styles/space";

export const LoginForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const updateEmail = (value) => {
    setEmail(value);
  };

  const updatePassword = (value) => {
    setPassword(value);
  };

  const login = () => {
    let user = {
      email: email,
      password: password,
    };

    if (JSON.stringify(user) === localStorage.getItem("users")) {
      setIsLoading(true);
      setDisplayError(false);
      setTimeout(() => {
        history.push("/account");
      }, 2000);
    } else {
      setDisplayError(true);
    }
  };

  return (
    <LoginFormWrapper>
      <Heading>
        <Text tag="h1" color={colors.accent.base} text="Connectez-vous"></Text>
        <Text
          tag="h2"
          color={colors.text.primary}
          text="Nous sommes ravies que vous fassiez parti de notre team !"
        ></Text>
      </Heading>
      <FormContainer>
        <Wrapper>
          <Label label="Email" />
          <Input
            type="email"
            placeholder="Entrez votre adresse mail"
            setChange={updateEmail}
            isValid={email !== "" ? true : false}
          />
        </Wrapper>
        <Wrapper>
          <Label label="Password" />
          <Input
            type="password"
            placeholder="Entrez votre mot de passe"
            setChange={updatePassword}
            isValid={password !== "" ? true : false}
          />
        </Wrapper>

        <Button
          text="Se connecter"
          isPrimary="true"
          isLoading={isLoading}
          onClick={() => login()}
        ></Button>
        <Text
          tag="small"
          color={colors.text.primary}
          text="Vous avez perdu votre mot de passe ?"
          onClick={() => history.push("/reset")}
        ></Text>
        {displayError && (
          <Text
            tag="small"
            color={colors.status.error}
            text="Informations incorrect !"
          ></Text>
        )}
      </FormContainer>
      <FormFooter>
        <Text
          tag="h2"
          color={colors.text.primary}
          text="Vous n'avez pas de compte ?"
        ></Text>
        <Text tag="h4" color={colors.accent.base} text="Inscrivez-vous"></Text>
        <Button
          text="S'inscrire"
          isPrimary="true"
          onClick={() => history.push("/register")}
        ></Button>
      </FormFooter>
    </LoginFormWrapper>
  );
};

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: left;
`;

const LoginFormWrapper = styled.div`
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export default LoginForm;

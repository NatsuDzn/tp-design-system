import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { Label } from "../atoms/Label";
import { Text } from "../atoms/Text";
import colors from "../../styles/colors";
import space from "../../styles/space";

export const RegisterForm = () => {
  const history = useHistory();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [displayError, setDisplayError] = useState(false);

  const updateEmail = (value) => {
    setEmail(value);
  };

  const updatePassword = (value) => {
    setPassword(value);
  };

  const registerUser = () => {
    if (
      (email === null || password === null) ||
      (email === "" || password === "")
    ) {
      setDisplayError(true);
    } else {
      let user = {
        email: email,
        password: password,
      };
      localStorage.setItem("users", JSON.stringify(user));
      history.push("/");
    }
  };

  return (
    <RegisterFormWrapper>
      <Heading>
        <Text tag="h1" color={colors.accent.base} text="Inscrivez-vous"></Text>
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
          text="S'inscrire"
          isPrimary="true"
          onClick={() => registerUser()}
        ></Button>
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
          text="Vous avez déjà un compte ?"
        ></Text>
        <Text tag="h4" color={colors.accent.base} text="Connectez-vous"></Text>
        <Button
          text="Se connecter"
          isPrimary={false}
          onClick={() => history.push("/")}
        ></Button>
      </FormFooter>
    </RegisterFormWrapper>
  );
};

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: left;
`;

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

export default RegisterForm;

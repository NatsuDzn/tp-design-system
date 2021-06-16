import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { Label } from "../atoms/Label";
import { Text } from "../atoms/Text";
import colors from "../../styles/colors";
import space from "../../styles/space";

export const ResetForm = () => {
  const history = useHistory();
  const [email, setEmail] = useState(null);
  const [newPassword, setNewPassowrd] = useState(null);
  const [isFormDisabled, setIsFormDisabled] = useState(true);
  const [displayError, setDisplayError] = useState(false);

  useEffect(() => {
    email && newPassword ? setIsFormDisabled(false) : setIsFormDisabled(true);
  }, [email, newPassword]);

  const updateEmail = (value) => {
    setEmail(value);
  };

  const updateNewPassword = (value) => {
    setNewPassowrd(value);
  };

  const resetPassword = () => {
    let userEmail = JSON.parse(localStorage.getItem("users")).email;

    let newValue = { email: userEmail, password: newPassword };

    if (userEmail === email) {
      localStorage.setItem("users", JSON.stringify(newValue));
    } else {
      setDisplayError(true);
    }
  };

  return (
    <ResetFormWrapper>
      <Heading>
        <Text
          tag="h1"
          color={colors.accent.base}
          text="Réinitialisation du mot de passe"
        ></Text>
        <Text
          tag="h2"
          color={colors.text.primary}
          text="Merci de saisir l'adresse mail de votre compte !"
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
            placeholder="Entrez votre nouveau mot de passe"
            setChange={updateNewPassword}
            isValid={newPassword !== "" ? true : false}
          />
        </Wrapper>
        <Button
          text="Réinitialiser le mot de passe"
          isPrimary="true"
          disabled={isFormDisabled}
          onClick={() => resetPassword()}
        ></Button>
        {displayError && (
          <Text
            tag="small"
            color="red"
            text="Aucune compte n'est lié avec cette adresse mail !"
            onClick={() => history.push("/reset")}
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
    </ResetFormWrapper>
  );
};

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  text-align: left;
`;

const ResetFormWrapper = styled.div`
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

export default ResetForm;

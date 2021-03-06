import React from "react";
import styled from "styled-components";
import { LoginForm } from "../organisms/LoginForm";

export const LoginPage = () => {
  return (
    <Page>
      <LoginForm />
    </Page>
  );
};

const Page = styled.div`
  height: 100vh;
  width: 100%;

  @media screen and (min-width: 1440px) {
    width: 75%;
    margin: auto;
    display: flex;
    height: auto;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export default LoginPage;
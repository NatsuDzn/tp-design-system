import React from "react";
import styled from "styled-components";
import { Header } from "../organisms/Header";
import { LoginForm } from "../organisms/LoginForm";

export const LoginPage = () => {
  return (
    <Page>
      <Header />
      <LoginForm />
    </Page>
  );
};

const Page = styled.div`
  height: 100vh;
  width: 100%;
`;

export default LoginPage;
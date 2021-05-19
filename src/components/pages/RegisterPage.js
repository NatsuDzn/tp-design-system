import React from "react";
import styled from "styled-components";
import { Header } from "../organisms/Header";
import { RegisterForm } from "../organisms/RegisterForm";

export const RegisterPage = () => {
  return (
    <Page>
      <Header />
      <RegisterForm />
    </Page>
  );
};

const Page = styled.div`
  height: 100vh;
  width: 100%;
`;

export default RegisterPage;

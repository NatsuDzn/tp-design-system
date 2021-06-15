import React from "react";
import styled from "styled-components";
import colors from "../../styles/colors";
import Text from "../atoms/Text";

export const AccountPage = () => {
  return (
    <Page>
      <Text tag="h2" color={colors.status.ok} text="Welcome"></Text>
    </Page>
  );
};

const Page = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1440px) {
    width: 75%;
    margin: auto;
    display: flex;
    height: auto;
    align-items: flex-end;
    justify-content: flex-end;
  }
`;

export default AccountPage;

import "./App.css";
import styled from "styled-components";
import { LoginPage } from "./components/pages/LoginPage";
import { RegisterPage } from "./components/pages/RegisterPage";
import "./styles/config/reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AccountPage} from "./components/pages/AccountPage";
import ResetPage from "./components/pages/ResetPage";
import img from "./styles/assets/background.svg";

export const App = () => {
  return (
    <Router>
      <AppWrapper>
        <Switch>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/reset">
            <ResetPage />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </AppWrapper>
    </Router>
  );
};

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-size: 100vw;
  background-position: bottom;
  background-repeat: no-repeat;

  @media screen and (min-width: 1440px) {
    background-size: 45vw;
    background-position: left bottom;
  }
`;

export default App;

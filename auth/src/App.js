import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignUp from "../components/Signup";
import SignIn from "../components/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route
              exact
              path="/auth/signup"
              render={() => <SignUp onSignIn={onSignIn} />}
            />
            <Route
              path="/auth/signin"
              render={() => <SignIn onSignIn={onSignIn} />}
            />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

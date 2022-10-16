import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Router,
  Redirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./component/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();
const MarkettingLazy = lazy(() => import("./component/MarketingApp"));
const AuthAppLazy = lazy(() => import("./component/AuthApp"));
const DashBoardAppLazy = lazy(() => import("./component/DashBoardApp"));

export default () => {
  const [signIn, setSignIn] = useState(false);

  const setTrueSignIn = () => {
    setSignIn(true);
  };
  useEffect(() => {
    if (signIn) {
      history.push("/dashboard");
    }
  }, [signIn]);
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Header signedIn={signIn} onSignOut={() => setSignIn(false)} />
          <Suspense fallback={<div>loading......</div>}>
            <Switch>
              <Route
                path="/auth"
                render={() => <AuthAppLazy onSignIn={setTrueSignIn()} />}
              />
              <Route path="/dashboard">
                {!signIn && <Redirect to="/" />}
                <DashBoardAppLazy />
              </Route>
              <Route path="/" component={MarkettingLazy} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  );
};

import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import Header from "./component/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const MarkettingLazy = lazy(() => import("./component/MarketingApp"));
const AuthAppLazy = lazy(() => import("./component/AuthApp"));

export default () => {
  const [signIn, setSignIn] = useState(false);

  const setTrueSignIn = () => {
    setSignIn(true);
  };
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header signedIn={signIn} />
          <Suspense fallback={<div>loading......</div>}>
            <Switch>
              <Route
                path="/auth"
                render={() => <AuthAppLazy onSignIn={setTrueSignIn()} />}
              />
              <Route path="/" component={MarkettingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

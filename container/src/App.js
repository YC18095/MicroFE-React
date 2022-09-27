import React, { lazy, Suspense } from "react";
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
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<div>loading......</div>}>
            <Switch>
              <Route path="/auth" component={AuthAppLazy} />
              <Route path="/" component={MarkettingLazy} />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  );
};

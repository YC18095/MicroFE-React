import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

//if we are in development and in isolation
//call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");
  //Asumming our container element does not have an element with id dev-products
  if (devRoot) {
    mount(devRoot);
  }
}

//we are running through container
//and we should export the moun function
export { mount };

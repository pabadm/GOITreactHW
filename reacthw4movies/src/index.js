import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./index.css";

import HomePage from "./components/HomePage/HomePage";

import MoviesSearcher from "./components/MoviesSearcher/MoviesSearcher";

const App = () => {
  return (
    <Switch>
      <Route
        path="/GOITreactHW/reacthw4movies/build/"
        exact
        component={HomePage}
      />
      <Route
        path="GOITreactHW/reacthw4movies/build/search"
        component={MoviesSearcher}
      />
      <Redirect to="/GOITreactHW/reacthw4movies/build/" />
    </Switch>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);

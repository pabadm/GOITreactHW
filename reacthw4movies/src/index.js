import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "./index.css";

import HomePage from "./components/HomePage/HomePage";

import MoviesSearcher from "./components/MoviesSearcher/MoviesSearcher";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={MoviesSearcher} />
      <Redirect to="/" />
    </Switch>
  );
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);

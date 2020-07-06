// key da3cb846a4228da5ed81f3869652dea8

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => (
  <>
    <Route path="/t" component={TestComponent} />
    <Route path="/test" component={TestComponent2} />
  </>
);

const TestComponent = () => {
  return <span>Test Component 1</span>;
};

const TestComponent2 = () => {
  return <span>Test Component 2</span>;
};

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);

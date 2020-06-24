import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Section from "./components/Statistics";

const App = () => {
  return (
    <div className='App'>
      <Section title='Plz leave feedback' />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));

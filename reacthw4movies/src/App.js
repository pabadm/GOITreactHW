import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// components

import HomePage from './components/HomePage/HomePage';
import MoviesSearcher from './components/MoviesSearcher/MoviesSearcher';

import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <Route component={Navigation} />
      <Switch>
        <Route path="/Home" exact component={HomePage} />
        <Route path="/search" component={MoviesSearcher} />
        <Redirect to="/Home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

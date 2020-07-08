import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// components

import HomePage from './components/HomePage/HomePage';
import MoviesSearcher from './components/MoviesSearcher/MoviesSearcher';

import Navigation from './components/Navigation/Navigation';
import MovieDetails from './components/MovieDetails/MovieDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Route component={Navigation} />
      <Switch>
        <Route path="/Home" exact component={HomePage} />
        <Route path="/Search" component={MoviesSearcher} />
        <Route path="/Details" component={MovieDetails} />
        <Redirect to="/Home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

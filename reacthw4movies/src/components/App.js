import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// components

import HomePage from './HomePage/HomePage';
import MoviesSearcher from './MoviesSearcher/MoviesSearcher';
import FavoriteMovies from './FavoriteMovies/FavoriteMovies';

import Navigation from './Navigation/Navigation';
import MovieDetails from './MovieDetails/MovieDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Route component={Navigation} />
      <Switch>
        <Route path="/Home" exact component={HomePage} />
        <Route path="/Search" component={MoviesSearcher} />
        <Route path="/Favorites" component={FavoriteMovies} />
        <Route path="/Details" component={MovieDetails} />
        <Redirect to="/Home" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

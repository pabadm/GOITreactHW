import React, { Component } from 'react';

import queryString from 'query-string';

import getApiData from '../../api/getApiData';

import MoviesShower from '../secondary/MoviesShower/MoviesShower';

export default class FavoriteMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 0,
      total: 1,
      error: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    this.updateComponent();
  }

  updateComponent = async () => {
    const { p } = queryString.parse(location.search);

    await this.setState({
      isLoading: true,
      error: false,
      page: p !== undefined ? Number(p) : 1,
    });

    const { movies } = this.state;

    const FavoriteMovies = JSON.parse(localStorage.getItem('FavoriteMovies'));

    FavoriteMovies.map(movie =>
      getApiData
        .details(movie)
        .then(data => {
          movies.push(data);
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false })),
    );
  };

  handleShowDetails = id => {
    const { history } = this.props;
    history.push(`/Details?id=${id}`);
  };

  render() {
    const { movies, error, isLoading, page } = this.state;
    const savedMovies = JSON.parse(localStorage.getItem('FavoriteMovies'));
    if (savedMovies.length === movies.length) {
      return (
        <MoviesShower
          movies={movies}
          error={error}
          isLoading={isLoading}
          page={page}
          totalPages={null}
          handlePageChange={null}
          handleShowDetails={this.handleShowDetails}
        />
      );
    }
    return <MoviesShower error={error} isLoading />;
  }
}

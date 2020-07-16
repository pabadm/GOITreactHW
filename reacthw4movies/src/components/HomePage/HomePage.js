import React, { Component } from 'react';
import queryString from 'query-string';

import getApiData from '../../api/getApiData';

import MoviesShower from '../secondary/MoviesShower/MoviesShower';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 0,
      totalPages: 1,
      error: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    const { history } = this.props;

    const recievedData = queryString.parse(location.search);

    const { p } = recievedData;
    const { length } = Object.keys(recievedData);

    if (p !== '' && length !== 0) {
      this.updateComponent();
    } else {
      history.push('/Home?p=1');
    }
  }

  componentDidUpdate() {
    const { page } = this.state;

    const { p } = queryString.parse(location.search);

    if (p !== undefined && page !== Number(p)) {
      this.updateComponent();
    }
  }

  updateComponent = async () => {
    const { p } = queryString.parse(location.search);

    await this.setState({
      isLoading: true,
      error: false,
      page: p !== undefined ? Number(p) : 1,
    });

    const { page } = this.state;

    getApiData
      .popular(page)
      .then(data =>
        this.setState({ movies: data.results, totalPages: data.total_pages }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handlePageChange = ({ target }) => {
    const { page } = this.state;
    const { history } = this.props;

    history.push(
      `/Home?p=${target.name === 'increment' ? page + 1 : page - 1}`,
    );
  };

  handleShowDetails = id => {
    const { history } = this.props;
    history.push(`/Details?id=${id}`);
  };

  render() {
    const { movies, error, isLoading, page, totalPages } = this.state;

    return (
      <MoviesShower
        movies={movies}
        error={error}
        isLoading={isLoading}
        page={page}
        totalPages={totalPages}
        handlePageChange={this.handlePageChange}
        handleShowDetails={this.handleShowDetails}
      />
    );
  }
}

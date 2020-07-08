import React, { Component } from 'react';
import queryString from 'query-string';

import getApiData from '../../api/getApiData';

import MoviesShower from '../secondary/MoviesShower/MoviesShower';

export default class MoviesSearcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
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

    const { q, p } = recievedData;
    const { length } = Object.keys(recievedData);

    if (q !== '' && p !== '' && length !== 0) {
      this.updateComponent();
    } else {
      history.push('/Home?p=1');
    }
  }

  componentDidUpdate() {
    const { query, page } = this.state;

    const { q, p } = queryString.parse(location.search);

    if (query !== q || (p !== undefined && page !== Number(p))) {
      this.updateComponent();
    }
  }

  updateComponent = async () => {
    const { q, p } = queryString.parse(location.search);

    await this.setState({
      isLoading: true,
      error: false,
      page: p !== undefined ? Number(p) : 1,
      query: q,
    });

    const { page, query } = this.state;

    getApiData
      .search(page, query)
      .then(data =>
        this.setState({ movies: data.results, totalPages: data.total_pages }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  handlePageChange = ({ target }) => {
    const { page, query } = this.state;
    const { history } = this.props;

    history.push(
      `/Search?q=${query}&p=${
        target.name === 'increment' ? page + 1 : page - 1
      }`,
    );
  };

  handleShowDetails = id => {
    const { history } = this.props;
    history.push(`/Details?id=${id}`);
  };

  render() {
    const { movies, error, isLoading, page, totalPages } = this.state;
    const { history } = this.props;

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

import React, { Component } from 'react';
import queryString from 'query-string';

import getApiData from '../../api/getApiData';

import DetailsShower from './DetailsShower/DetailsShower';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      overview: '',
      posterPath: '',
      id: '',
      isLoading: false,
      castLoading: false,
      error: false,
      castERR: false,
      cast: [],
      reviews: [],
    };
  }

  componentDidMount() {
    this.updateComponent();
  }

  updateComponent = () => {
    const { id } = queryString.parse(location.search);
    this.setState({
      isLoading: true,
      castLoading: true,
      reviewsLoading: true,
      reviewsERR: false,
      castERR: false,
      error: false,
      id,
    });
    getApiData
      .details(id)
      .then(data =>
        this.setState({
          title: data.title,
          overview: data.overview,
          posterPath: data.poster_path,
          vote: data.vote_average,
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));

    this.getCast(id);
    this.getReviews(id);
  };

  getCast = id => {
    getApiData
      .cast(id)
      .then(data => this.setState({ cast: data.cast }))
      .catch(castERR => this.setState({ castERR }))
      .finally(() => this.setState({ castLoading: false }));
  };

  getReviews = id => {
    getApiData
      .reviews(id)
      .then(data => this.setState({ reviews: data.results }))
      .catch(reviewsERR => this.setState({ reviewsERR }))
      .finally(() => this.setState({ reviewsLoading: false }));
  };

  render() {
    const { title, overview, posterPath, vote, cast, reviews, id } = this.state;
    return (
      <DetailsShower
        title={title}
        overview={overview}
        posterPath={posterPath}
        id={id}
        vote={vote}
        cast={cast}
        reviews={reviews}
      />
    );
  }
}

import React, { Component } from 'react';
import queryString from 'query-string';

import getApiData from '../../api/getApiData';

import DetailsShower from '../secondary/DetailsShower/DetailsShower';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      overview: '',
      posterPath: '',
      id: '',
      isLoading: false,
      error: false,
    };
  }

  componentDidMount() {
    this.updateComponent();
  }

  componentDidUpdate() {
    const { id } = this.state;
    const { history } = this.props;
    const newId = queryString.parse(location.search).id;

    if (newId === undefined || newId === '') {
      history.push('/Home');
    } else if (id !== newId) {
      this.updateComponent();
    }
  }

  updateComponent = () => {
    const { id } = queryString.parse(location.search);
    console.log('q :>> ', queryString.parse(location.hash));
    this.setState({ isLoading: true, error: false, id });
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
  };

  render() {
    const { title, overview, posterPath, vote, id } = this.state;
    return (
      <DetailsShower
        title={title}
        overview={overview}
        posterPath={posterPath}
        id={id}
        vote={vote}
      />
    );
  }
}

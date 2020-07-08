import React, { Component } from 'react';
import queryString from 'query-string';

import getApiData from '../../api/getApiData';
import getPosterLink from '../../api/getPosterLink';

export default class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      overview: '',
      posterPath: '',
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
    this.setState({ isLoading: true, error: false, id });
    getApiData
      .details(id)
      .then(data =>
        this.setState({
          title: data.title,
          overview: data.overview,
          posterPath: data.poster_path,
        }),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { title, overview, posterPath } = this.state;
    return (
      <section>
        <div>
          <img src={getPosterLink(posterPath, 500)} alt="img" />
        </div>
        <h3>{title}</h3>
        <p>{overview}</p>
      </section>
    );
  }
}

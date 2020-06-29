import React, { Component } from 'react';

import PropTypes from 'prop-types';

import SearchBar from './SearchBar/SearchBar';

import './ImageSearcher.css';

class ImageSearcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  // изменяет query, чтобы обновлять поле поиска
  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  // передает подтвержденный query родителю с помощью его метода для перерисовки
  handleSubmit = evt => {
    evt.preventDefault();

    const { updateSubmitedQuery } = this.props;
    const { query } = this.state;

    updateSubmitedQuery(query);
  };

  render() {
    const { query } = this.state;
    return (
      <SearchBar
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        query={query}
      />
    );
  }
}

ImageSearcher.propTypes = {
  updateSubmitedQuery: PropTypes.func,
};
ImageSearcher.defaultProps = {
  updateSubmitedQuery: null,
};
export default ImageSearcher;

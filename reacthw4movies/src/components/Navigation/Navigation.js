import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import SearchBar from '../secondary/SearchBar/SearchBar';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { query } = this.state;
    const { history } = this.props;
    if (query !== '') {
      history.push(`/Search?q=${query}&p=1`);
    }
  };

  render() {
    return (
      <header>
        <NavLink to="/Home?p=1">Go Home</NavLink>
        <SearchBar
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.query}
        />
      </header>
    );
  }
}

export default Navigation;

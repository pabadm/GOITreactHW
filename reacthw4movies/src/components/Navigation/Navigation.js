import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import SearchBar from '../secondary/SearchBar/SearchBar';

import styles from './Navigation.module.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  handleChange = ({ target }) => {
    this.setState({ query: target.value !== ' ' ? target.value : '' });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { query } = this.state;
    const { history } = this.props;
    if (query !== '') {
      this.setState({ query: '' }, history.push(`/Search?q=${query}&p=1`));
    }
  };

  render() {
    const { query } = this.state;
    return (
      <header className={styles.Navigation}>
        <nav>
          <div>
            <NavLink to="/https://stackoverflow.com/questions/39600138/how-to-simultaneously-transiticon-colour-of-nested-childrenHome?p=1">
              Go Home
            </NavLink>
          </div>
          {/* <NavLink to="/Favorites">Favorites</NavLink> */}
          <SearchBar
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
            value={query}
          />
        </nav>
      </header>
    );
  }
}

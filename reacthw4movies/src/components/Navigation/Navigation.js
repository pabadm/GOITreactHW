import React, { Component } from 'react';

import { NavLink, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';

import styles from './Navigation.module.scss';

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
        <nav className={styles['Navigation-nav']}>
          <div className={styles['Navigation-nav-links']}>
            <NavLink
              className={`${styles.link} ${styles.text}`}
              activeClassName={styles['link-ACTIVE']}
              to="/Home"
            >
              Go Home
            </NavLink>
            <NavLink
              className={`${styles.link} ${styles.text}`}
              activeClassName={styles['link-ACTIVE']}
              to="/Favorites"
            >
              Show Favorites
            </NavLink>
          </div>
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

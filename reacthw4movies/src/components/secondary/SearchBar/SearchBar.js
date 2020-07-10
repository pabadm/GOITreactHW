import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

export default class SearchBar extends Component {
  handleHover = ({ target }) => {
    target.parentNode.classList.add(styles['SearchBar-form--HOVER']);
  };

  handleUnHover = ({ target }) => {
    target.parentNode.classList.remove(styles['SearchBar-form--HOVER']);
  };

  render() {
    const { onChange, value, onSubmit } = this.props;

    return (
      <div className={styles.SearchBar}>
        <form onSubmit={onSubmit} className={styles['SearchBar-form']}>
          <input
            type="text"
            name="search"
            placeholder="Find some movies!"
            value={value}
            onChange={onChange}
            className={`${styles['form-input']} ${
              value === ''
                ? styles['form-search--ONLY']
                : styles['form-search--notONLY']
            }`}
          />
          <input
            type="submit"
            value="Search"
            className={`${styles['form-input']} ${
              value === ''
                ? styles['form-submit--HIDDEN']
                : styles['form-submit--SHOWN']
            }`}
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleUnHover}
            onClick={this.handleClick}
          />
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};
SearchBar.defaultProps = {
  value: '',
};

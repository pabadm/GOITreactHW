import React from 'react';

import PropTypes from 'prop-types';

// обычный функциональный компонент, ничего особенного
const SearchBar = ({ handleChange, handleSubmit, query }) => {
  return (
    <header className="SearchBar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input input"
          type="text"
          placeholder="Search images and photos"
          onChange={handleChange}
          value={query}
        />
        <input
          className="SearchForm-submit input"
          type="submit"
          value="Submit"
        />
      </form>
    </header>
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  query: PropTypes.string,
};

SearchBar.defaultProps = null;

export default SearchBar;

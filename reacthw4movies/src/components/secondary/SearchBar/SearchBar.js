import React, { StrictMode } from 'react';

import styles from './SearchBar.module.css';

const SearchBar = ({ onChange, value, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="search"
          value={value}
          onChange={onChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default SearchBar;

import React from 'react';

const SearchBar = ({handleChange, handleSubmit, query}) =>{
  return(
    <header className="SearchBar">
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className="SearchForm-input input"
        type="text"
        placeholder="Search images and photos"
        onChange={handleChange}
        value={query}
      />
      <input className="SearchForm-submit input" type="submit" value="Submit" />
    </form>
  </header>
  )
}

export default SearchBar;
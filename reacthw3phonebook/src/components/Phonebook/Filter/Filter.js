import React from 'react';

import PropTypes from 'prop-types';

// компонент поиска принимает коллбек и значение фильтра

const Filter = ({ filter, handleChange }) => {
  return (
    <input
      className="Filter"
      type="text"
      name="filter"
      placeholder="search your contacts"
      value={filter}
      onChange={handleChange}
    />
  );
};

Filter.defaultProps = {
  filter: 'filter',
  handleChange: null,
};
Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};

export default Filter;

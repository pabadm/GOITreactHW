import React from 'react';

import PropTypes from 'prop-types';

import './LoadMore.css';

const LoadMore = ({ handleClick }) => {
  return (
    <div className="LoadMore">
      <button type="button" className="LoadMore-button" onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

LoadMore.propTypes = {
  handleClick: PropTypes.func,
};
LoadMore.defaultProps = null;

export default LoadMore;

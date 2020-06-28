import React, { Component } from "react";
import "./LoadMore.css";
const LoadMore = ({ handleClick }) => {
  return (
    <div className="LoadMore">
      <button type="button" className="LoadMore-button" onClick={handleClick}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;

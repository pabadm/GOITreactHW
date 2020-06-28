import React, { Component } from "react";
// для перерисовки не всех картинок сразу

import SearchBar from "./SearchBar/SearchBar";

import "./ImageSearcher.css";

class ImageSearcher extends Component {
  state = {
    query: "",
  };

  handleChange = ({ target }) => {
    this.setState({ query: target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    
    const { updateSubmitedQuery } = this.props;

    const { query } = this.state;


    updateSubmitedQuery(query);

  };

  render() {
    const { query } = this.state;
    return (
        <SearchBar
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          query={query}
        />
    );
  }
}

export default ImageSearcher;

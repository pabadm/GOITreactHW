import React, { Component } from "react";

import ImageSearcher from "./ImageSearcher/ImageSearcher";

import ImageFinder from "./ImageFinder/ImageFinder";

class ImageFinderApp extends Component {
  state = {
    submitedQuery: "",
    toUpdate: false,
    toResetPages: false,
  };

  updateSubmitedQuery = (value) => {
    this.setState({ submitedQuery: value, toUpdate: true, toResetPages: true });
  };

  stopUpdating = () => {
    this.setState({ toUpdate: false, toResetPages: false });
  };

  updateComponent = () => {
    this.setState({ toUpdate: true });
  };

  componentDidUpdate = () => {
    // console.log("updated :>> ");
  };

  render() {
    const { submitedQuery, toUpdate, toResetPages } = this.state;
    return (
      <div>
        <ImageSearcher updateSubmitedQuery={this.updateSubmitedQuery} />
        <ImageFinder
          submitedQuery={submitedQuery}
          toUpdate={toUpdate}
          stopUpdating={this.stopUpdating}
          updateComponent={this.updateComponent}
          toResetPages={toResetPages}
        />
      </div>
    );
  }
}

export default ImageFinderApp;

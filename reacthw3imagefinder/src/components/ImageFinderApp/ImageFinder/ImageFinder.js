import React, { Component } from "react";

import axios from "axios";

import ImageGallery from "./ImageGallery/ImageGallery";

import LoadMore from "./LoadMore/LoadMore";

import useApi from "../api/useApi";

import './ImageFinder.css'

class ImageFinder extends Component {
  state = {
    photos: [],
    page: 1,
    error: false,
    isLoading: true,
    totalHits: 500,
  };

  addPage = () => {
    // this.props.toUpdate = true;
    this.setState({ page: this.state.page + 1 });
    this.props.updateComponent();
  };

  componentDidMount = () => {
    const { page } = this.state;
    const { submitedQuery } = this.props;
    this.setState({ isLoading: true });

    axios
      .get(useApi(submitedQuery, page))
      .then((response) => this.setState({ photos: response.data.hits }))
      .catch((err) => this.setState({ error: err }))
      .finally(() => this.setState({ isLoading: false }));
  };

  componentDidUpdate = () => {
    // console.log("updated :>> ");
    const { submitedQuery, toUpdate, stopUpdating, toResetPages } = this.props;
    const { page, photos } = this.state;
    console.log(toUpdate);
    console.log("this.state.toResetPages :>> ", this.state.toResetPages);
    if (toUpdate) {
      if (toResetPages) {
        this.setState({ page: 1 });
      }
      stopUpdating();

      this.setState({ isLoading: true, error: false });

      axios
        .get(useApi(submitedQuery, toResetPages ? 1 : page))
        .then((response) =>
          this.setState({
            totalHits: response.data.totalHits,
            photos: toResetPages
              ? response.data.hits
              : photos.concat(response.data.hits),
          })
        )
        .catch((err) => this.setState({ error: err }))
        .finally(() => this.setState({ isLoading: false }));
    }
  };

  render() {
    const { photos, error, isLoading,totalHits,page } = this.state;
    // const { submitedQuery } = this.props;
    return (
      <>
        {error && <span className='message'>Whoops, something went wrong: {error.message}</span>}

        {isLoading && <span className='message'>Loading...</span>}

        {photos.length > 0 ? (
          <ImageGallery photos={photos} />
        ) : (
          <span className='message'>No images found</span>
        )}
        {totalHits>page*12 && <LoadMore handleClick={this.addPage} />}
        
      </>
    );
  }
}

export default ImageFinder;

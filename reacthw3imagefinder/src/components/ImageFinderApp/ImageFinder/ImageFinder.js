import React, { Component } from 'react';

import PropTypes from 'prop-types';

import ImageGallery from './ImageGallery/ImageGallery';

import LoadMore from './LoadMore/LoadMore';

import useApi from '../api/useApi';

import './ImageFinder.css';

class ImageFinder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      page: 1,
      error: false,
      isLoading: true,
      totalHits: 500,
    };
  }

  addPage = () => {
    const { updateComponent } = this.props;
    const { page } = this.state;
    // this.props.toUpdate = true;
    this.setState({ page: page + 1 }, updateComponent());
  };

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    // чтобы юзались данные по умолчанию
    const data = await useApi();

    if (data.total !== undefined) {
      this.setState({
        totalHits: data.totalHits,
        photos: data.hits,
        isLoading: false,
      });
    } else {
      this.setState({ error: data, isLoading: false });
    }
  };

  // отрисовываю картинки с помощью этого, только в конце понял, что .
  // это полнейшая дичь. Родитель обновляет компонент, а он проверяет
  // стоит ли ему отрисовывать картинки прямо во время обновления.
  // очень тупо вышло. из-за этого передавал целую кучу в пропсах
  componentDidUpdate = async () => {
    const { submitedQuery, toUpdate, stopUpdating, toResetPages } = this.props;
    const { page, photos } = this.state;
    if (toUpdate) {
      const data = await useApi(submitedQuery, !toResetPages && page);

      if (data.total !== undefined) {
        this.setState(
          {
            isLoading: false,
            totalHits: data.totalHits,
            photos: toResetPages ? data.hits : photos.concat(data.hits),
            page: toResetPages ? 1 : page,
          },
          stopUpdating(),
        );
      } else {
        this.setState({ error: data, isLoading: false }, stopUpdating());
      }
    }
  };

  render() {
    const { photos, error, isLoading, totalHits, page } = this.state;
    return (
      <>
        {error && (
          <span className="message">
            Whoops, something went wrong: {error.message}
          </span>
        )}

        {isLoading && <span className="message">Loading...</span>}

        {photos.length > 0 ? (
          <ImageGallery photos={photos} />
        ) : (
          <span className="message">No images found</span>
        )}
        {totalHits > page * 12 && <LoadMore handleClick={this.addPage} />}
      </>
    );
  }
}
ImageFinder.propTypes = {
  submitedQuery: PropTypes.string,
  toUpdate: PropTypes.bool,
  stopUpdating: PropTypes.func,
  updateComponent: PropTypes.func,
  toResetPages: PropTypes.bool,
};
ImageFinder.defaultProps = null;
export default ImageFinder;

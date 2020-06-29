import React, { Component } from 'react';

import PropTypes from 'prop-types';

import shortid from 'shortid';
import ModalWindow from './ModalWindow/ModalWindow';

import './ImageGallery.css';

class ImageGalleryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toRenderModal: false,
    };
  }

  closeModal = evt => {
    evt.stopPropagation();
    const body = document.querySelector('body');
    body.style.overflow = 'scroll';
    this.setState({ toRenderModal: false });
  };

  handleClick = () => {
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    this.setState({ toRenderModal: true });
  };

  handleKeyDown = evt => {
    this.closeModal(evt);
  };

  render() {
    const { toRenderModal } = this.state;
    const { photo } = this.props;
    return (
      <li className="ImageGalleryItem" id={photo.id}>
        <button
          type="button"
          className="ImageGalleryItem-btn"
          onClick={this.handleClick}
          onKeyDown={this.handleKeyDown}
        >
          <img
            src={photo.webformatURL}
            alt={photo.tags}
            className="ImageGalleryItem-image"
          />
          {toRenderModal && (
            <ModalWindow
              link={photo.largeImageURL}
              alt={photo.tags}
              closeModal={this.closeModal}
            />
          )}
        </button>
      </li>
    );
  }
}
const ImageGallery = ({ photos }) => {
  return (
    <ul className="ImageGallery">
      {photos.map(photo => (
        <ImageGalleryItem photo={photo} key={shortid.generate()} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.array,
};
ImageGallery.defaultProps = null;

ImageGalleryItem.propTypes = {
  photo: PropTypes.object,
};
ImageGalleryItem.defaultProps = null;
export default ImageGallery;

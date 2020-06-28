import React, { Component } from "react";

import shortid from "shortid";
import ModalWindow from "./ModalWindow/ModalWindow";

import './ImageGallery.css'


class ImageGalleryItem extends Component {
  state = {
    toRenderModal: false,
  };
  closeModal = (evt) => {
    evt.stopPropagation()
    const body = document.querySelector('body');
    body.style.overflow='scroll';
    this.setState({ toRenderModal: false });
  };
  handleClick = () => {
    const body = document.querySelector('body');
    body.style.overflow='hidden';
    this.setState({ toRenderModal: true });
  };
  render() {
    const { toRenderModal } = this.state;
    const { photo } = this.props;
    return (
      <li className="ImageGalleryItem" id={photo.id} onClick={this.handleClick}>
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
      </li>
    );
  }
}
const ImageGallery = ({ photos}) => {
  return (
    <ul className={"ImageGallery"}>
      {photos.map((photo) => (
        <ImageGalleryItem photo={photo} key={shortid.generate()} />
      ))}
    </ul>
  );
};

export default ImageGallery;

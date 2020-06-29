import React, { Component } from 'react';

import ImageSearcher from './ImageSearcher/ImageSearcher';

import ImageFinder from './ImageFinder/ImageFinder';

class ImageFinderApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitedQuery: '', // слово поиска взаимодействует image searcher
      toUpdate: false, // решает перерисовывать ли картинки в Image finder
      toResetPages: false, // решает сбросить ли страницу до одной в Image finder
    };
  }

  // метод, который принимает слово поиска, которое передается Image finder (юзает image searcher)
  updateSubmitedQuery = value => {
    this.setState({ submitedQuery: value, toUpdate: true, toResetPages: true });
  };

  // метод, который прекращает апдейт в Image finder
  stopUpdating = () => {
    this.setState({ toUpdate: false, toResetPages: false });
  };

  // метод, который перерисовывает поле поиска и Image finder, юзает Image finder (Load more btn)
  updateComponent = () => {
    this.setState({ toUpdate: true });
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

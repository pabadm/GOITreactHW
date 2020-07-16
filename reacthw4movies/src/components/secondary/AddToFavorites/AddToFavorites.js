import React, { Component } from 'react';

import HeartSolid from '../../../Images/icons/heartSolid.svg';
import HeartLinear from '../../../Images/icons/heartLinear.svg';

import styles from './AddToFavorites.module.scss';

export default class AddToFavorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false,
    };
  }

  componentDidMount() {
    const FavoriteMovies = JSON.parse(localStorage.getItem('FavoriteMovies'));
    const { id } = this.props;

    if (FavoriteMovies === null) {
      localStorage.setItem('FavoriteMovies', '[]');
    }

    this.setState({ isFavorite: FavoriteMovies.includes(id) });
  }

  handleClick = () => {
    const { isFavorite } = this.state;
    const { id } = this.props;

    const FavoriteMovies = JSON.parse(localStorage.getItem('FavoriteMovies'));
    if (FavoriteMovies.includes(id)) {
      const index = FavoriteMovies.indexOf(id);

      FavoriteMovies.splice(index, 1);
      localStorage.setItem('FavoriteMovies', `[${FavoriteMovies}]`);
    } else {
      FavoriteMovies.push(id);
      localStorage.setItem('FavoriteMovies', `[${FavoriteMovies}]`);
    }
    this.setState({ isFavorite: !isFavorite });
  };

  render() {
    const { className } = this.props;

    const { isFavorite } = this.state;
    return (
      <div className={className}>
        <button type="button" onClick={this.handleClick} className={styles.btn}>
          {isFavorite ? (
            <HeartSolid className={styles['AddToFavorites-btn-icon']} />
          ) : (
            <HeartLinear />
          )}
        </button>
      </div>
    );
  }
}

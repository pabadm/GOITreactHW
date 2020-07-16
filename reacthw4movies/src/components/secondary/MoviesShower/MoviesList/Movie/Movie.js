import React, { Component } from 'react';

import getPosterLink from '../../../../../api/getPosterLink';

// import HeartIcon from '../../../../../Images/icons/heart.svg';
// import HeartLinear from '../../../../../Images/icons/heartLinear.svg';
// import HeartSolid from '../../../../../Images/icons/heartSolid.svg';
import AddToFavorites from '../../../AddToFavorites/AddToFavorites';

import styles from './Movie.module.scss';

class Movie extends Component {
  handleClick = () => {
    const { id, handleShowDetails } = this.props;
    handleShowDetails(id);
  };

  render() {
    const {
      posterPath,
      title,
      overview,
      vote,
      overviewBottomIndent,
      id,
    } = this.props;
    return (
      <li className={styles.Movie}>
        <AddToFavorites id={id} className={styles['Movie-poster-like']} />
        <button
          type="button"
          onClick={this.handleClick}
          title="Watch details"
          className={`${styles.text} ${styles['Movie-btn']}`}
        >
          <div className={styles['Movie-poster']}>
            <img
              className={styles['Movie-poster-img']}
              src={getPosterLink(posterPath, 500)}
              alt="img"
            />

            {vote !== 0 && (
              <span
                className={`${styles.text} ${styles['Movie-poster-vote']} ${
                  vote < 4 && styles['vote-bad']
                } ${vote >= 4 && vote <= 6 && styles['vote-average']} ${
                  vote > 6 && styles['vote-nice']
                }`}
              >
                {Number.isInteger(vote) ? `${vote}` : vote}
              </span>
            )}
          </div>
          <h4
            className={`${styles.text} ${styles['Movie-title']} ${
              vote < 4 && styles['title-bad']
            } ${vote >= 4 && vote <= 6 && styles['title-average']} ${
              vote > 6 && styles['title-nice']
            }`}
          >
            {title}
          </h4>

          <div className={styles.blur}>
            <h6
              style={overviewBottomIndent}
              className={`${styles.text} ${styles['blur-overview']}`}
            >
              {overview}
            </h6>
          </div>
        </button>
      </li>
    );
  }
}

export default Movie;

import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import getPosterLink from '../../../../../api/getPosterLink';

import AddToFavorites from '../../../AddToFavorites/AddToFavorites';

import styles from './Movie.module.scss';

const Movie = ({
  posterPath,
  title,
  overview,
  vote,
  overviewBottomIndent,
  id,
}) => {
  return (
    <li className={styles.Movie}>
      <AddToFavorites id={id} className={styles['Movie-poster-like']} />
      <Link to={`Details?id=${id}`} className={styles['Movie-link']}>
        <div className={styles['Movie-poster']}>
          <img
            className={styles['Movie-poster-img--HIGH']}
            src={getPosterLink(posterPath, 500)}
            alt="img"
          />
          <img
            className={styles['Movie-poster-img--LOW']}
            src={getPosterLink(posterPath, 92)}
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
              {Number.isInteger(vote) ? `${vote}.0` : vote}
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
      </Link>
    </li>
  );
};

export default Movie;

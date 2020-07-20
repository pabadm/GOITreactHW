import React from 'react';
import { NavLink } from 'react-router-dom';
import getPosterLink from '../../../api/getPosterLink';

import styles from './DetailsShower.module.scss';

import AddToFavorites from '../AddToFavorites/AddToFavorites';

const DetailsShower = ({ posterPath, overview, title, id, vote }) => {
  return (
    <section className={styles.DetailsShower}>
      <AddToFavorites id={id} className={styles['DetailsShower-like']} />
      <div className={styles['DetailsShower-poster']}>
        <img
          className={styles['DetailsShower-poster-img']}
          src={getPosterLink(posterPath, 1280)}
          alt="img"
        />
        {vote !== 0 && (
          <span
            className={`${styles.text} ${styles['DetailsShower-poster-vote']} ${
              vote < 4 && styles['vote-bad']
            } ${vote >= 4 && vote <= 6 && styles['vote-average']} ${
              vote > 6 && styles['vote-nice']
            }`}
          >
            {Number.isInteger(vote) ? `${vote}.0` : vote}
          </span>
        )}
      </div>
      <div className={styles.blur}>
        <h4 className={`${styles.text} ${styles['blur-title']}`}>{title}</h4>
        <p className={`${styles.text} ${styles['blur-overview']}`}>
          {overview}
        </p>
        <div className={`${styles.text} ${styles['blur-navigation']}`}>
          <NavLink
            className={`${styles.text} ${styles['DetailsShower-navigation-link']}`}
            activeClassName={styles['DetailsShower-navigation-link--ACTIVE']}
            to={`/Details?id=${id}#Reviews`}
          >
            Reviews
          </NavLink>
          <NavLink
            className={`${styles.text} ${styles['DetailsShower-navigation-link']}`}
            activeClassName={styles['DetailsShower-navigation-link--ACTIVE']}
            to={`/Details?id=${id}#Cast`}
          >
            Cast
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default DetailsShower;

import React from 'react';
import { NavLink } from 'react-router-dom';
import getPosterLink from '../../../api/getPosterLink';

import styles from './DetailsShower.module.css';

const DetailsShower = ({ posterPath, overview, title, id, vote }) => {
  return (
    <section className={styles.DetailsShower}>
      <div className={styles['DetailsShower-poster']}>
        <img
          className={styles['DetailsShower-poster-img']}
          src={getPosterLink(posterPath, 780)}
          alt="img"
        />
        <span
          className={`${styles.text} ${styles['DetailsShower-poster-vote']} ${
            vote < 4 && styles['vote-bad']
          } ${vote >= 4 && vote <= 6 && styles['vote-average']} ${
            vote > 6 && styles['vote-nice']
          }`}
        >
          {vote}
        </span>
      </div>
      <div className={styles['DetailsShower-blur']}>
        <h4 className={`${styles.text} ${styles['DetailsShower-title']}`}>
          {title}
        </h4>
        <p className={`${styles.text} ${styles['DetailsShower-overview']}`}>
          {overview}
        </p>
        <div className={`${styles.text} ${styles['DetailsShower-navigation']}`}>
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

import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import shortid from 'shortid';
import getPosterLink from '../../../api/getPosterLink';

import styles from './DetailsShower.module.scss';

import AddToFavorites from '../../secondary/AddToFavorites/AddToFavorites';

const DetailsShower = ({
  posterPath,
  overview,
  title,
  id,
  vote,
  cast,
  reviews,
}) => {
  const location = useLocation();
  return (
    <section className={styles.DetailsShower}>
      <AddToFavorites
        id={Number(id)}
        className={styles['DetailsShower-like']}
      />
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
          {reviews.length !== 0 && (
            <NavLink
              className={`${styles.text} ${styles['blur-navigation-link']} ${
                location.hash === '#Reviews'
                  ? styles['blur-navigation-link-ACTIVE']
                  : styles['blur-navigation-link-INACTIVE']
              }`}
              to={`/Details?id=${id}#Reviews`}
            >
              Reviews
            </NavLink>
          )}

          {cast.length !== 0 && (
            <NavLink
              className={`${styles.text} ${styles['blur-navigation-link']} ${
                location.hash === '#Cast'
                  ? styles['blur-navigation-link-ACTIVE']
                  : styles['blur-navigation-link-INACTIVE']
              }`}
              to={`/Details?id=${id}#Cast`}
            >
              Cast
            </NavLink>
          )}
        </div>
        <div className={styles['blur-cast']}>
          {location.hash === '#Cast' &&
            cast.map(person =>
              cast.indexOf(person) < 20 ? (
                <span
                  className={`${styles.text} ${styles['blur-cast-person']}`}
                  key={shortid.generate()}
                >
                  {person.name},&ensp;
                </span>
              ) : (
                cast.indexOf(person) === 20 ||
                (cast.indexOf(person) === cast.length - 1 && (
                  <span
                    className={`${styles.text} ${styles['blur-cast-person']}`}
                    key={shortid.generate()}
                  >
                    {person.name}...
                  </span>
                ))
              ),
            )}
        </div>
        <div className={styles['blur-reviews']}>
          {location.hash === '#Reviews' &&
            reviews.map(review => (
              <p key={shortid.generate()} className={styles['blur-review']}>
                <span className={styles['blur-review-author']}>
                  {review.author}
                </span>
                {review.content}
              </p>
            ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsShower;

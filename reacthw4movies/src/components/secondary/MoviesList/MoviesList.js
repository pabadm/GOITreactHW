import React from 'react';

import shortid from 'shortid';

import getPosterLink from '../../../api/getPosterLink';

import styles from './MoviesList.module.css';

const Movie = ({ id, posterPath, title }) => {
  return (
    <li id={id} className={styles.Movie}>
      <div className={styles['Movie-poster']}>
        <img
          className={styles['Movie-poster-img']}
          src={getPosterLink(posterPath, 500)}
          alt="img"
        />
      </div>
      <h4 className={styles['Movie-title']}>{title}</h4>
    </li>
  );
};

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.MoviesList}>
      {movies.map(movie => (
        <Movie
          key={shortid.generate()}
          id={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
        />
      ))}
    </ul>
  );
};

export default MoviesList;

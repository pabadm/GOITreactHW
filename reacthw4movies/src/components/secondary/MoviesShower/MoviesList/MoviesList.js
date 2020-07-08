import React from 'react';

import shortid from 'shortid';

import getPosterLink from '../../../../api/getPosterLink';

import styles from './MoviesList.module.css';

const Movie = ({ id, posterPath, title, handleShowDetails }) => {
  return (
    <li className={styles.Movie}>
      <button type="button" onClick={() => handleShowDetails(id)}>
        <div className={styles['Movie-poster']}>
          <img
            className={styles['Movie-poster-img']}
            src={getPosterLink(posterPath, 500)}
            alt="img"
          />
        </div>
        <h4 className={styles['Movie-title']}>{title}</h4>
      </button>
    </li>
  );
};

const MoviesList = ({ movies, handleShowDetails }) => {
  return (
    <ul className={styles.MoviesList}>
      {movies.map(movie => (
        <Movie
          key={shortid.generate()}
          id={movie.id}
          posterPath={movie.poster_path}
          title={movie.title}
          handleShowDetails={handleShowDetails}
        />
      ))}
    </ul>
  );
};

export default MoviesList;

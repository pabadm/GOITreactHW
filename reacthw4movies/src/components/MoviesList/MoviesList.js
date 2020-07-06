import React from "react";

import styles from "./MoviesList.module.css";

import getPosterLink from "../../api/getPosterLink";

import shortid from 'shortid';

const Movie = ({ id, poster_path, title }) => {
  return (
    <li id={id} className={styles["Movie"]}>
      <div className={styles["Movie-poster"]}>
        <img
          className={styles["Movie-poster-img"]}
          src={getPosterLink(poster_path, 500)}
        />
      </div>
      <h4 className={styles["Movie-title"]}>{title}</h4>
    </li>
  );
};

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles["MoviesList"]}>
      {movies.map((movie) => (
        <Movie
          key={shortid.generate()}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </ul>
  );
};

export default MoviesList;

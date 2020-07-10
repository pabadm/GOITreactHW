import React, { Component } from 'react';

import shortid from 'shortid';

import getPosterLink from '../../../../api/getPosterLink';

import styles from './MoviesList.module.css';

const Movie = ({
  posterPath,
  title,
  overview,
  vote,
  id,
  handleShowDetails,
  overviewBottomIndent,
}) => {
  return (
    <li className={styles.Movie}>
      <button
        type="button"
        onClick={() => handleShowDetails(id)}
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
          onCopy="return false;"
          className={`${styles.text} ${styles['Movie-title']}`}
        >
          {title}
        </h4>

        <div className={styles.blur}>
          <h6
            onCopy="return false;"
            style={overviewBottomIndent}
            className={`${styles.text} ${styles['blur-overview']}`}
          >
            {overview}
          </h6>
        </div>
      </button>
    </li>
  );
};
// }

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewBottomIndents: [],
    };
  }

  componentDidMount() {
    const titles = [...document.getElementsByClassName(styles['Movie-title'])];

    const overviewBottomIndents = [];

    titles.map(title =>
      overviewBottomIndents.push({
        bottom: `${(title.clientHeight + 8 + 16) / 16}rem`,
      }),
    );
    this.setState({ overviewBottomIndents });
  }

  render() {
    const { movies, handleShowDetails } = this.props;
    const { overviewBottomIndents } = this.state;
    return (
      <ul className={styles.MoviesList}>
        {movies.map(movie => (
          <Movie
            key={shortid.generate()}
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            overview={movie.overview}
            vote={movie.vote_average}
            handleShowDetails={handleShowDetails}
            overviewBottomIndent={overviewBottomIndents[movies.indexOf(movie)]}
          />
        ))}
      </ul>
    );
  }
}

export default MoviesList;

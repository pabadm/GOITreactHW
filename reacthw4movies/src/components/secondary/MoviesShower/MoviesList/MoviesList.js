import React, { Component } from 'react';

import shortid from 'shortid';

import styles from './MoviesList.module.sass';
// для проверки высоты названия
import checkTitleStyles from './Movie/Movie.module.scss';

import Movie from './Movie/Movie';

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      overviewBottomIndents: [],
    };
  }

  componentDidMount() {
    this.countBottomIndents();
  }

  componentDidUpdate() {
    this.countBottomIndents();
  }

  countBottomIndents = () => {
    const titles = [
      ...document.getElementsByClassName(checkTitleStyles['Movie-title']),
    ];

    const overviewBottomIndents = [];

    titles.map(title =>
      overviewBottomIndents.push({
        bottom: `${(title.clientHeight + 8 + 16) / 16}rem`,
      }),
    );

    if (
      this.state.overviewBottomIndents.join('') !==
      overviewBottomIndents.join('')
    ) {
      this.setState({ overviewBottomIndents });
    }
  };

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

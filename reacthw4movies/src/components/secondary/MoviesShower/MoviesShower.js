import React from 'react';

import MoviesList from './MoviesList/MoviesList';
import PageChanger from './PageChanger/PageChanger';
import Loader from './Loader/Loader';
import Message from './Message/Message';

const MoviesShower = ({
  movies,
  error,
  isLoading,
  page,
  totalPages,
  handlePageChange,
  handleShowDetails,
}) => {
  return (
    <>
      {isLoading && <Loader />}
      {error && <Message msg={error.message} />}
      {totalPages < page && !error && <Message msg="no films found" />}
      {!isLoading && !error && (
        <>
          <MoviesList movies={movies} handleShowDetails={handleShowDetails} />
          <PageChanger
            onClick={handlePageChange}
            page={page}
            totalPages={totalPages}
          />
        </>
      )}
    </>
  );
};

export default MoviesShower;

import React, { Component } from "react";

import getApiData from "../../api/getApiData";

import MoviesList from "../MoviesList/MoviesList";

import LoadMore from "../LoadMore/LoadMore";

export default class MoviesSearcher extends Component {
  state = {
    page: 1,
    movies: [],
    info: {},
    error: false,
    isLoading: true,
  };

  updateComponent = async () => {
    const { page } = this.state;
    const recievedData = await getApiData.popular(page);

    this.setState({
      movies: recievedData.results !== undefined && recievedData.results,
      info: recievedData.results !== undefined && {
        totalResults: recievedData.total_results,
        totalPages: recievedData.total_pages,
      },
      error: recievedData === true ? true : false,
      isLoading: false,
    });
  };

  addPage = () => {
    const { page } = this.state;
    this.setState({ isLoading: true, page: page + 1 }, this.updateComponent);
  };

  reducePage = () => {
    const { page } = this.state;
    this.setState({ isLoading: true, page: page - 1 }, this.updateComponent);
  };

  componentDidMount = () => {
    console.log("mounted :>> ");
    this.updateComponent();
  };

  render() {
    const { movies, error, isLoading, page, info } = this.state;

    return (
      <>
        {isLoading && <span>Loading...</span>}
        {error && <span>something went wrong</span>}
        {isLoading === false && error === false && (
          <>
            <MoviesList movies={movies} />
            {page < info.totalPages && (
              <LoadMore text="Next page" handleClick={this.addPage} />
            )}
            {page !== 1 && (
              <LoadMore text="Prev page" handleClick={this.reducePage} />
            )}
          </>
        )}
      </>
    );
  }
}

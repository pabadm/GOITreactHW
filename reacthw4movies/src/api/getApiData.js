import axios from 'axios';

// key da3cb846a4228da5ed81f3869652dea8

const getApiData = {
  popular: (page = 1) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=da3cb846a4228da5ed81f3869652dea8&language=en-US&page=${page}`,
      )
      .then(response => response.data);
  },
  search: (page = 1, query = '') => {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=da3cb846a4228da5ed81f3869652dea8&language=en-US&query=${query}&page=${page}&include_adult=false`,
      )
      .then(response => response.data);
  },
  details: id => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=da3cb846a4228da5ed81f3869652dea8&language=en-US`,
      )
      .then(response => response.data);
  },
  reviews: id => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=da3cb846a4228da5ed81f3869652dea8&language=en-US&page=1`,
      )
      .then(response => response.data);
  },
  cast: id => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=da3cb846a4228da5ed81f3869652dea8&language=en-US`,
      )
      .then(response => response.data);
  },
};

export default getApiData;

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
};

export default getApiData;

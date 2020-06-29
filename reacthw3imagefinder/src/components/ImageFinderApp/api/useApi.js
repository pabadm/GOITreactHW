import axios from 'axios';

const useApi = (query = '', page = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?=&page=${page}&key=17239878-22287161951b064189e8d052f&q=${query}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data)
    .catch(error => error);
};

export default useApi;

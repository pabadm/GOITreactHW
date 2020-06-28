
const useApi = (query = '', page = 1) =>{
  return `https://pixabay.com/api/?=&page=${page}&key=17239878-22287161951b064189e8d052f&q=${query}&image_type=photo&orientation=horizontal&per_page=12`
}

export default useApi;

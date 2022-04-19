const axios = require('axios');

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function fetchImages(searchRequest) {
  return axios.get(
    `?key=26638339-3b1376c53457034de3b242118&q=${searchRequest}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`,
  );
}

import { refs } from './get-refs';
import { renderMoreImages } from './pagination-render';
import { paginationInit } from './pagination-init';

const axios = require('axios');

let page = 1;

export async function pagination() {
  const searchRequest = refs.form.elements.searchQuery.value;

  page += 1;

  const data = await axios
    .get(
      `?key=26638339-3b1376c53457034de3b242118&q=${searchRequest}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`,
    )
    .then(r => r.data);
  renderMoreImages(data.hits);

  let totalPages = paginationInit(data);
  if (page === totalPages) {
    refs.loadMoreBtn.classList.add('is-hidden');
  }
}

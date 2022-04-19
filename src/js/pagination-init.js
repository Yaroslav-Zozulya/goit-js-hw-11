import { refs } from './get-refs';

let totalPages;
let perPage = 40;

export function paginationInit(data) {
  totalPages = data.total / perPage;

  if (!Number.isInteger(totalPages)) {
    totalPages = Math.trunc(totalPages) + 1;
  }

  if (totalPages > 1) {
    refs.loadMoreBtn.classList.remove('is-hidden');
  }

  return totalPages;
}

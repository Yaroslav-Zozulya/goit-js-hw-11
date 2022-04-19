import { refs } from './get-refs';
import { fetchImages } from './fetch-images';
import { renderImages } from './render-images';
import { pagination } from './pagination';
import { paginationInit } from './pagination-init';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

refs.form.addEventListener('submit', renderGalleryInterface);
refs.loadMoreBtn.addEventListener('click', pagination);

async function renderGalleryInterface() {
  event.preventDefault();
  refs.loadMoreBtn.classList.add('is-hidden');

  const searchRequest = event.target.searchQuery.value;

  try {
    const data = await fetchImages(searchRequest).then(response => response.data); // Получаем массив объектов с данными картинок
    if (data.total === 0) {
      Notify.failure('Sorry, no images were found for your request.');
      return;
    }
    renderImages(data.hits);
    let lightbox = new SimpleLightbox('.gallery div', {
      captionsData: 'alt',
      captionDelay: 300,
    });
    Notify.success('Pictures found');
    paginationInit(data);
  } catch {
    console.dir(error.text);
  }
}

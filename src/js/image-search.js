import { refs } from './get-refs';
import { fetchImages } from './fetch-images';
import { renderImages } from './render-images';

refs.form.addEventListener('submit', renderGalleryInterface);

async function renderGalleryInterface() {
  event.preventDefault();
  const searchRequest = event.target.searchQuery.value;

  try {
    const images = await fetchImages(searchRequest).then(response => response.data.hits); // Получаем массив объектов с данными картинок
    renderImages(images);
  } catch {
    console.dir(error);
  }
}

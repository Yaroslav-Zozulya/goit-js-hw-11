import { refs } from './get-refs';
import { fetchImages } from './fetch-images';

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

function renderImages(images) {
  const markup = images
    .map(
      ({ likes }) => `<div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes} </b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`,
    )
    .join(' ');
}

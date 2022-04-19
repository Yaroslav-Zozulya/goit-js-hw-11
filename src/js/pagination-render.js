import { refs } from './get-refs';

export function renderMoreImages(moreImages) {
  const markup = moreImages
    .map(
      ({
        likes,
        webformatURL,
        largeImageURL,
        tags,
        views,
        comments,
        downloads,
      }) => `<div class="photo-card"  href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <span class="info-item-number">${likes}</span>
    </p>
    <p class="info-item">
      <b>Views</b>
      <span class="info-item-number">${views}</span> 
    </p>
    <p class="info-item">
      <b>Comments </b>
      <span class="info-item-number">${comments}</span>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <span class="info-item-number">${downloads}</span>
    </p>
  </div>
</div>`,
    )
    .join(' ');
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

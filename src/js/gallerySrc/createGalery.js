export function createGaleryItems(imagesInfo) {
  return imagesInfo.reduce((htmlMarcup, el) => {
    return (htmlMarcup += `
      <li class="gallery-item">
          <a class="gallery-link" href="${el.largeImageURL}">
          <img class="gallery-image" src="${el.webformatURL}"
          width="360" heihgt="200"
          alt="${el.tags}"/>
          </a>
          <ul class="galery-descriptions">
            <li class="galery-descriptions-item">
              <span class="galery-descriptions-title">likes</span>
              <span>${el.likes}</span>
            </li>
            <li class="galery-descriptions-item">
            <span class="galery-descriptions-title">views </span>
            <span>${el.views}</span>
            </li>
            <li class="galery-descriptions-item">
            <span class="galery-descriptions-title">comments </span>
            <span>${el.comments}</span>
            </li>
            <li class="galery-descriptions-item">
              <span class="galery-descriptions-title"> downloads </span>
              <span>${el.downloads}</span>
            </li>
          </ul>
        </li>
      `);
  }, '');
}
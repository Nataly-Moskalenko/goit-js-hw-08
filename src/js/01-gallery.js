import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

function createImageCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
<li>
 <a class="gallery__item" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
 </a>
</li>
`;
    })
    .join('');
}

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

new SimpleLightbox('.gallery a', { captionDelay: 250 });
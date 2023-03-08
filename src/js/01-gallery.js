// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Opisany w dokumentacji
import SimpleLightbox from 'simplelightbox';
// Dodatkowy import stylów
import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryDiv = document.querySelector('.gallery');

for (const gi of galleryItems) {
  galleryDiv.append(document.createElement('div'));
  const div =
    document.querySelectorAll('.gallery div')[
      document.querySelectorAll('.gallery div').length - 1
    ];
  div.append(document.createElement('a'));
  const link = div.querySelector('a');
  link.append(document.createElement('img'));
  link.classList.add('gallery__item');
  link.href = gi.original;
  const img = div.querySelector('img');
  img.classList.add('gallery__image');
  img.src = gi.preview;
  img.alt = gi.description;
  img.dataset.source = gi.original;

  link.onclick = e => {
    e.preventDefault();
  };
}
const options = {
  captions: true,
  captionsData: 'alt',
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
};
let gallery = new SimpleLightbox('.gallery a', options);
gallery.on('show.simplelightbox', function () {
  //on show nothing :P
});

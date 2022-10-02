import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
    gallery: document.querySelector('.gallery'),
};


refs.gallery.insertAdjacentHTML('beforeend', createCardImageMarkup(galleryItems));

function createCardImageMarkup (images) {
    return images.map(({preview, original, description}) => {
        return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
                 src="${preview}" 
                 alt="${description}"/>
        </a>  
        `}).join('');
};

var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});


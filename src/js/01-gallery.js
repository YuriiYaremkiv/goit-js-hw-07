import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
}

let instance ='';

// create images list
const cardsImage = createCardImageMarkup(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', cardsImage);


refs.gallery.addEventListener('click', showImage);

document.addEventListener("keydown", closeImageModalWindow);


function createCardImageMarkup (images) {
    return images.map(({preview, original, description}) => {
        return `
            <div class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
            </div>   
        `}).join('');
};

function showImage(e) {
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    e.preventDefault();

    openModalWindow(e);
};

function openModalWindow (urlImage) {
    return instance = basicLightbox.create(`<img src="${urlImage.target.dataset.source}" width="800" height="600">`), instance.show();
}

function closeImageModalWindow(e) {
    if (e.key !== 'Escape') {
        return;
    }

    instance.close();
}
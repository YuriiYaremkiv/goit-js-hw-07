import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery'),
}

refs.gallery.addEventListener('click', getUrlImage);

function getUrlImage(event) {
    if (event.target.nodeName !== 'IMG') {
        return;
    }
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`)

instance.show()

};



const cardsImages = createCardImageMarkup(galleryItems);
refs.gallery.insertAdjacentHTML('beforeend', cardsImages);


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


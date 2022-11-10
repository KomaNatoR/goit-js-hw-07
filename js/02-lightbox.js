import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector('.gallery');

const listTemplate = (preview, original, description) => `
    <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`;

// listTemplate(galleryItems[0].preview, galleryItems[0].original, galleryItems[0].description);

const render = () => {
    const arrayFromListTemplate = galleryItems.map(item => listTemplate(item.preview, item.original, item.description));

    listEl.innerHTML = arrayFromListTemplate.join('');
};
render();

listEl.addEventListener('click', onClickOpenLightbox);

function onClickOpenLightbox(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
    return;
    }

    // show.simplelightbox();
    console.dir(simplelightbox);
};
import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galaryEl = document.querySelector('.gallery');

const getTemplateOfPictures = ({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>`;

const render = () => { 
    //---Не видаляти!!!--- const arrayOfStringOfPictures = galleryItems.map(item => getTemplateOfPictures(item)); - це так було до скорочення!
    const arrayOfStringOfPictures = galleryItems.map(getTemplateOfPictures);

    // console.dir(galaryEl.innerHTML);
    galaryEl.innerHTML = '';
    galaryEl.insertAdjacentHTML('afterbegin', arrayOfStringOfPictures.join(''));
};
render();

galaryEl.addEventListener('click', onClickOpenModalPicture);

function onClickOpenModalPicture(e) {
    e.preventDefault();
    if ( e.target.nodeName !== 'IMG') {
        return;
    }
    // console.dir(e.target.dataset.source);
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `);
    instance.show();
    console.dir(instance);

    window.addEventListener('keydown', onEscCloseModal);
    
    function onEscCloseModal(e) {
        if (e.code !== 'Escape') {
            return;
        }

        instance.close();
        // console.dir(e.code);
    }
}


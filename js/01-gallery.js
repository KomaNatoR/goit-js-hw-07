import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galaryEl = document.querySelector('.gallery');

const getTemplateOfPictures = ({ preview, original, description }) =>
    `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="large-image.jpg"
            alt="${description}"
            />
        </a>
    </div>`;

const render = () => { 
    // const arrayOfStringOfPictures = galleryItems.map(item => getTemplateOfPictures(item)); - це так було до скорочення!
    const arrayOfStringOfPictures = galleryItems.map(getTemplateOfPictures);

    // console.dir(galaryEl.innerHTML);
    galaryEl.innerHTML = '';
    galaryEl.insertAdjacentHTML('afterbegin', arrayOfStringOfPictures.join(''));
};

render();

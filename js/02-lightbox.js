import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(item => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
    </li>`
    
).join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", imageClickHandler);

function imageClickHandler(event) {
    if (event.target.tagName !== "IMG")
        return;
    event.preventDefault();
    
    const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
    // Без цього на сайті продовжують стакатись лайтбокси.
    // Якщо є якийсь інший спосіб запобігти цьому, то підкажіть будь ласка.
    gallery.removeEventListener("click", imageClickHandler);
}

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(item => 
             `<li class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                </a>
            </li>`
).join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery.addEventListener("click", imageClickHandler);

function imageClickHandler(event) {
    if (event.target.tagName !== "IMG")
        return;
    event.preventDefault();
    
    const imageSrc = event.target.getAttribute("data-source");
    
    createModal(imageSrc);
}

function createModal(src) {
    const modal = basicLightbox.create(
        `<div class="modal">
            <img src="${src}" width="1280">
        </div>`,
        {
            onShow: (modal) => {
                document.onkeydown = (event) => {
                    if (event.key !== "Escape")
                        return;
                    console.log("Ви натиснули на Escape!");
                    modal.close();
                };
            },
            onClose: () => {
                // Кращого варіанту я не зміг вигадати, але я навчився чомусь новому
                document.onkeydown = null;
            }
        }
    ).show();
}
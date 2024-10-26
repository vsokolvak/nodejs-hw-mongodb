import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallerySimpleLightBox = new simpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    })

export const gallery = {
    galleryEl: document.querySelector('.gallery'),

    clear() {
        this.galleryEl.innerHTML = ''
        gallerySimpleLightBox.refresh()
    },

    addItems(items) {
        this.galleryEl.innerHTML = items;
        gallerySimpleLightBox.refresh();
    }
}


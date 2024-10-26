import { button } from "./js/formSrc/button.js";
import { createGaleryItems } from "./js/gallerySrc/createGalery";
import { showModalMsg } from "./js/izitoast";
import { loader } from "./js/loader";
import { getImg } from "./js/pixabay-api";
import { gallery } from "./js/render-functions";



const formEl = document.querySelector('.search-form');

formEl.addEventListener('submit', submitForm);
formEl.addEventListener('input', inputForm);

function inputForm(form) {

    if (form.currentTarget.elements.searchText.value.length > 0) {
        button.active()
        return
    }
    button.disable()
}

function submitForm(form) {

    form.preventDefault()
    const serchTxt = form.currentTarget.elements.searchText.value.trim();
    const serchCategory = form.currentTarget.elements.category.value
    
    if (serchTxt.length < 2) {
        showModalMsg('the search word must contain at least 2 letters', 'red');
        form.currentTarget.reset();
        return
    }

    loader.show()
    gallery.clear()
    getImg(serchTxt, serchCategory)
    .then(data => {
        console.log(data)
        if (data.hits.length === 0) {
            showModalMsg(
              'Sorry, there are no images matching your search query. Please try again!'
            );
            return
        }

        gallery.addItems(createGaleryItems(data.hits));

    }).catch(err => {
        showModalMsg(
          'error ' + err
        );
        return;
    }).finally(() => {
        loader.close()
        form.target.reset();
    })
    
}

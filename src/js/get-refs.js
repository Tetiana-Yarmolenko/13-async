export default function getRefs() {
    return {
        searchForm: document.querySelector('#search-form'),
        gallery: document.querySelector('.gallery'),
        input: document.querySelector('#search-form_input'),
        sentinel: document.querySelector('#sentinel'),
    };
   }
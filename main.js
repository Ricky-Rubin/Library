const addBook = document.querySelector('#add-book');
const form = document.querySelector('#form');

function showForm() {
    form.style.display = 'block';
}

addBook.addEventListener('click', showForm);
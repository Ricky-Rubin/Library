const addBook = document.querySelector('#add-book');
const form = document.querySelector('#form');
const closeForm = document.querySelector('#close-form');

function showForm() {
    form.style.display = 'block';
}

function cancelForm() {
    form.style.display = 'none';
}

addBook.addEventListener('click', showForm);
closeForm.addEventListener('click', cancelForm);
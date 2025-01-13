const addBook = document.querySelector('#add-book');
const form = document.querySelector('#form');
const closeForm = document.querySelector('#close-form');
const mainLibrary = document.querySelector('#main-library')

const library = [];

function addBookToLibrary(title, author, pages, read) {
    const book = {
        title: title,
        author: author,
        pages: pages,
        read: read
    }

    library.push(book);
    console.log(library);
}

function displayBook() {
    form.style.display = 'none'

    const bookDiv = document.createElement('div');
    bookDiv.className = 'book-div'
    bookDiv.innerHTML = `<div class='book-details'>${title.value} by ${author.value}, ${pages.value}</div>
    <div class='book-btns'>
        <button class='read-stat'>${read.value.toLowerCase === 'yes' ? 'Read: Yes' : 'Read: No'}</button>
        <button class='remove-btn'>Remove</button>
    </div>
    `
}

function showForm() {
    form.style.display = 'block';
}

function cancelForm() {
    form.style.display = 'none';
}

addBook.addEventListener('click', showForm);
closeForm.addEventListener('click', cancelForm);
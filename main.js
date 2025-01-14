const addBook = document.querySelector('#add-book');
const form = document.querySelector('#form');
const closeForm = document.querySelector('#close-form');
const mainLibrary = document.querySelector('#main-library')
const addBookBtn = document.querySelector('#add-btn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read-status');

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
    bookDiv.innerHTML = `<div class='book-details'>${title.value} by ${author.value}, ${pages.value} pages</div>
    <div class='book-btns'>
        <button class='read-stat'>${read.value.toLowerCase() === 'yes' ? 'Read: Yes' : 'Read: No'}</button>
        <button class='remove-btn'data-title='${title.value}'>Remove</button>
    </div>
    `
    function removeBook() {
        bookDiv.innerHTML = '';
        bookDetails.style.padding = '';
        bookDiv.style.borderBottom = '';
        bookDiv.style.marginBottom = '';
    }

    function removeBookFromLibrary(bookTitle) {
        const bookToRemove = library.findIndex((book) => book.title === bookTitle);
        if (bookToRemove !== -1) {
            library.splice(bookToRemove, 1);
        };
        console.log(library);
    }

    const bookDetails = bookDiv.querySelector('.book-details');
    bookDetails.style.padding = '10px';
    bookDetails.style.fontSize = '17px'
    bookDetails.style.fontWeight = '600'
    bookDiv.style.borderBottom = '2px solid #2f3542';
    bookDiv.style.marginBottom = '12px'

    mainLibrary.appendChild(bookDiv);
    [title, author, pages, read].forEach((input) => input.value = '');

    const readStat = bookDiv.querySelector('.read-stat');
    readStat.addEventListener('click', () => {
        readStat.textContent = readStat.textContent === 'Read: Yes' ? 'Read: No' : 'Read: Yes';
    });

    const removeBtn = bookDiv.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
        const bookTitle = removeBtn.getAttribute('data-title');
        removeBookFromLibrary(bookTitle);
        removeBook();
    })

}

function showForm() {
    form.style.display = 'block';
}

function cancelForm() {
    form.style.display = 'none';
}

addBook.addEventListener('click', showForm);
closeForm.addEventListener('click', cancelForm);

addBookBtn.addEventListener('click', () => {
    addBookToLibrary(title.value, author.value, pages.value, read.value);
    displayBook();
})
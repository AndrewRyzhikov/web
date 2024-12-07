document.addEventListener('DOMContentLoaded', () => {
    const booksSection = document.querySelector('.books');
    const loader = document.querySelector('.loader');
    const errorMessage = document.querySelector('#error-message');

    const API_URL = "https://jsonplaceholder.typicode.com/photos";

    const showLoader = () => {
        loader.classList.remove('hidden');
    };

    const hideLoader = () => {
        loader.classList.add('hidden');
    };

    const showError = (message) => {
        errorMessage.textContent = `⚠ ${message}`;
        errorMessage.classList.remove('hidden');
    };

    const hideError = () => {
        errorMessage.classList.add('hidden');
    };

    const renderBooks = (books) => {
        books.forEach((book) => {
            const bookDiv = document.createElement('div');
            bookDiv.classList.add('book');

            const img = document.createElement('img');
            img.id = 'bookImg';
            img.src = book.thumbnailUrl;
            img.alt = book.title;

            const title = document.createElement('h3');
            title.textContent = book.title;

            const priceAndButtonDiv = document.createElement('div');
            priceAndButtonDiv.classList.add('price-and-button');

            const price = document.createElement('p');
            price.classList.add('price');
            price.textContent = `${Math.floor(Math.random() * 1000 + 300)} р`;

            const button = document.createElement('button');
            button.textContent = 'Купить';

            priceAndButtonDiv.appendChild(price);
            priceAndButtonDiv.appendChild(button);
            bookDiv.appendChild(img);
            bookDiv.appendChild(title);
            bookDiv.appendChild(priceAndButtonDiv);

            booksSection.appendChild(bookDiv);
        });
    };

    const fetchBooks = async () => {
        showLoader();
        hideError();

        try {
            const response = await fetch(API_URL);

            if (!response.ok) {
                throw new Error(`Ошибка загрузки данных: ${response.status}`);
            }

            const books = await response.json();

            const filteredBooks = books.filter(() => Math.random() > 0.5).slice(0, 5);

            renderBooks(filteredBooks);
        } catch (error) {
            showError(error.message || 'Что-то пошло не так');
        } finally {
            hideLoader();
        }
    };

    fetchBooks();
});
const books = [
    {title: "Конституция РФ", price: "500 р", imageSrc: "images/low.webp"},
    {title: "1984", price: "500 р", imageSrc: "images/1984.webp"},
    {title: "Vita Nostra", price: "700 р", imageSrc: "images/VitaNostra.webp"},
    {title: "Мастер и Маргарита", price: "800 р", imageSrc: "images/master.jpeg"},
    {title: "Преступление и наказание", price: "600 р", imageSrc: "images/crime.webp"}
];

const booksSection = document.querySelector('.books');

books.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const img = document.createElement('img');
    img.id = 'bookImg';
    img.src = book.imageSrc;
    img.alt = book.title;

    const title = document.createElement('h3');
    title.textContent = book.title;

    const priceAndButtonDiv = document.createElement('div');
    priceAndButtonDiv.classList.add('price-and-button');

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = book.price;

    const button = document.createElement('button');
    button.textContent = 'Купить';

    priceAndButtonDiv.appendChild(price);
    priceAndButtonDiv.appendChild(button);
    bookDiv.appendChild(img);
    bookDiv.appendChild(title);
    bookDiv.appendChild(priceAndButtonDiv);

    booksSection.appendChild(bookDiv);
});

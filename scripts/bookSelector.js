document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookSelect = document.getElementById('bookSelect');
    const bookList = document.getElementById('bookList');

    let selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || {};

    renderBookList();

    bookForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const bookName = bookSelect.value;
        if (!selectedBooks[bookName]) {
            selectedBooks[bookName] = 1;
        }
        saveAndRender();
    });

    function saveAndRender() {
        localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
        renderBookList();
    }

    function renderBookList() {
        bookList.textContent = '';

        for (const [bookName, count] of Object.entries(selectedBooks)) {
            const li = document.createElement('li');
            li.className = 'book-item';

            const bookNameSpan = document.createElement('span');
            bookNameSpan.textContent = bookName;

            const countSpan = document.createElement('span');
            countSpan.className = 'book-count';
            countSpan.textContent = count;

            const increaseAndDecreaseDiv = document.createElement('div')
            increaseAndDecreaseDiv.className = 'increaseAndDecreaseDiv';

            const increaseButton = document.createElement('button');
            increaseButton.className = 'increase';
            increaseButton.textContent = '+';
            increaseButton.addEventListener('click', () => {
                selectedBooks[bookName]++;
                saveAndRender();
            });

            const decreaseButton = document.createElement('button');
            decreaseButton.className = 'decrease';
            decreaseButton.textContent = '-';
            decreaseButton.addEventListener('click', () => {
                if (selectedBooks[bookName] > 1) {
                    selectedBooks[bookName]--;
                } else {
                    delete selectedBooks[bookName];
                }
                saveAndRender();
            });
            increaseAndDecreaseDiv.appendChild(decreaseButton);
            increaseAndDecreaseDiv.appendChild(increaseButton);

            li.appendChild(bookNameSpan);
            li.appendChild(countSpan);
            li.appendChild(increaseAndDecreaseDiv);

            bookList.appendChild(li);
        }
    }
});

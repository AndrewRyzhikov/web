document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'cart.html') {
        document.getElementById('cart-link').classList.add('active');
    } else if (currentPage === 'login.html') {
        document.getElementById('login-link').classList.add('active');
    } else if (currentPage === 'index.html') {
        document.getElementById('index-link').classList.add('active');
    }
});

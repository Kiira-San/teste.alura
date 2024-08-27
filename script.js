document.addEventListener('DOMContentLoaded', () => {
    const rightButton = document.querySelector('.button-arrow.-left');
    const leftButton = document.querySelector('.button-arrow.-right');
    const categories = document.querySelector('.categorias');

    rightButton.addEventListener('click', () => {
        categories.scrollBy({
            left: 200, // Ajuste esse valor para controlar a quantidade de scroll
            behavior: 'smooth'
        });
    });

    leftButton.addEventListener('click', () => {
        categories.scrollBy({
            left: -200, // Ajuste esse valor para controlar a quantidade de scroll
            behavior: 'smooth'
        });
    });
});

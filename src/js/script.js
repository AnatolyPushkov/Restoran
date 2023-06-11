const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu__media'),
      closeElem = document.querySelector('.hamburger__close');
hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', () => {
    let navList = document.querySelector('.nav-list');

    // change height of navList
    navList.classList.toggle('open');
});
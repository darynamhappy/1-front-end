function btnMenu () {
    const menuBurger  = document.querySelector('.header__burger');
if (menuBurger) {
    const menuItems = document.querySelector('.header__menu');
    menuBurger.addEventListener('click', function (e) {
        menuBurger.classList.toggle('active');
        menuItems.classList.toggle('_active');
    })
}
}

export default btnMenu;

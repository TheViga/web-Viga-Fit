const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const iconCarMenu = document.querySelector('.navbar-shooping-cart');
const shoppingMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
iconCarMenu.addEventListener('click', toggleIconCar);

function toggleDesktopMenu() {
    const isIconCarClose = shoppingMenu.classList.contains('inactive');

    if(!isIconCarClose) {
        shoppingMenu.classList.add('inactive');
        }
        
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isIconCarClose = shoppingMenu.classList.contains('inactive');

    if(!isIconCarClose) {
        shoppingMenu.classList.add('inactive');
        }

    mobileMenu.classList.toggle('inactive');
}

function toggleIconCar() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClose) {
    mobileMenu.classList.add('inactive');
    }
    
    shoppingMenu.classList.toggle('inactive');
}
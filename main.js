const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const productDetailCloseIcon = document.querySelector('.product-detail-close');

const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const iconCarMenu = document.querySelector('.navbar-shooping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
iconCarMenu.addEventListener('click', toggleIconCar);
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isIconCarClose = shoppingCartContainer.classList.contains('inactive');

    if(!isIconCarClose) {
        shoppingCartContainer.classList.add('inactive');
        }
        
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isIconCarClose = shoppingCartContainer.classList.contains('inactive');

    if(!isIconCarClose) {
        shoppingCartContainer.classList.add('inactive');
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle('inactive');
}

function toggleIconCar() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClose) {
    mobileMenu.classList.add('inactive');
    }

    const isProductDetailClose = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClose) {
        productDetailContainer.classList.add('inactive');
    }
    
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push ({
    name: 'Creatina 300g', 
    price: 99990 ,
    image: 'https://imnnutrition.co/wp-content/uploads/2022/10/creatina_mono_500.jpg-1.png',
});
productList.push ({
    name: 'Prote??na IMN 2 lb', 
    price: 159990 ,
    image: 'https://imnnutrition.co/wp-content/uploads/2021/11/iso-fresa.jpg',
});
productList.push ({
    name: 'Vitamina D3 100 caps', 
    price: 49990 ,
    image: 'https://cdnx.jumpseller.com/crucero-store/image/16178969/resize/480/480?1619482369',
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-inf');
    
        const productDiv =  document.createElement('div');
    
        const productName =  document.createElement('p');
        productName.innerText = product.name;
    
        const productPrice =  document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        productDiv.append(productName, productPrice);
    
        const productFigure =  document.createElement('figure');
        const productImgCart =  document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productImgCart);
    
        productInfo.append(productDiv, productFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    }
    
}

renderProducts(productList);

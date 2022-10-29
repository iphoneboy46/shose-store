window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

var cartProduct = document.querySelector(".header__card")
var cartTablet = document.querySelector(".card-tablet")
var shoppingCart = document.querySelector('.shopping-cart');
var shoppingCartTablet = document.querySelector('.shopping-cart-tablet')
var btnCard = document.querySelector('.card')
var exits = document.querySelector('.cart-exits');

btnCard.addEventListener('click', function(e) {
   
    shoppingCart.style.opacity = '1',
    shoppingCart.style.right = '0px';

});

cartTablet.addEventListener('click', function(e) {
    console.log(546456)
    shoppingCartTablet.style.opacity = '1',
    shoppingCartTablet.style.right = '0px';
});

exits.addEventListener('click', function(e) {
    shoppingCart.style.opacity = '0',
    shoppingCart.style.right = '-1200px';
});

// menu moblie
var barBtn = document.querySelector('.header__menu-ui');
var modal = document.querySelector('.modal') 
var menuBar = document.querySelector('.header__bars');
var icon = document.querySelector('.fa-bars')
menuBar.onclick = function() {
    if(icon.classList.contains('fa-bars')){
        icon.classList.replace('fa-bars','fa-xmark');
    }else{
        icon.classList.replace('fa-xmark','fa-bars');
    }
    modal.classList.toggle('menuActive')
    barBtn.classList.toggle('menuActive')
}




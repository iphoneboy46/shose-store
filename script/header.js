window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

var cartProduct = document.querySelector(".header__card")
var cartBars = document.querySelector(".header__card--bars")
var shoppingCart = document.querySelector('.shopping-cart');
var exits = document.querySelector('.cart-exits');

cartProduct.addEventListener('click', function(e) {
    shoppingCart.style.display = 'block';
    console.log(123)
});

cartBars.addEventListener('click', function(e) {
    shoppingCart.style.display = 'block';
});

exits.addEventListener('click', function(e) {
    shoppingCart.style.display = 'none';
});

// menu moblie
var barBtn = document.querySelector('.header__menu-ui') 
var menuBar = document.querySelector('.header__bars');
var icon = document.querySelector('.fa-bars')
menuBar.onclick = function() {
    if(icon.classList.contains('fa-bars')){
        icon.classList.replace('fa-bars','fa-xmark');
    }else{
        icon.classList.replace('fa-xmark','fa-bars');
    }
    barBtn.classList.toggle('menuActive')
}




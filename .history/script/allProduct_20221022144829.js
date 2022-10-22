var albumApi = "http://localhost:3000/albums";
var productList = document.querySelector("#product__lists");
var productLists = document.querySelectorAll("#product__lists");
var cartItemId = 1;
var currentIndex = 0;
function start() {
  getAlbum(function (albums) {
    renderAllProducts(albums);
  });

  productList.addEventListener("click", addProduct);
}

start();

function getAlbum(callback) {
  fetch(albumApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}


// add to card
function addProduct(e) {
  if (e.target.classList.contains("add-Btn")) {
    let product = e.target.parentElement.parentElement.parentElement;
    getProductInfo(product);
  }
}

//get product info after add to card button click
function getProductInfo(product) {
  var productInfo = {
    id: cartItemId,
    image: product.querySelector("#image").src,
    name: product.querySelector("#name").textContent,
    price: product.querySelector("#price").textContent,
    quantity: product.querySelector("#quantity").textContent,
  };
  cartItemId++;
  console.log(productInfo);
  // updateProductInCart(productInfo);
  // updateShoppingCartHTML();
}

//sort product
var nameBrandAll = document.querySelectorAll(".ul-items li");
nameBrandAll.forEach(function (nameBrand, index) {
  nameBrand.addEventListener("click", function () {
    nameBrandAll.forEach(function (items) {
      items.classList.remove("active");
    });
    currentIndex = index;
    nameBrandAll[index].classList.add("active");
  });
  var itemsProduct = document.querySelectorAll(".product__item");
  console.log(itemsProduct);
  itemsProduct.forEach(function (item) {
    console.log(item);
  });
});

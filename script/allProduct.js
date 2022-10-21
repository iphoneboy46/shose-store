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

function renderAllProducts(albums) {
  albums.map(function (album) {
    const productItem = document.createElement("div");
    productItem.classList.add("product__item");
    productItem.setAttribute("data-item", `${album.brand}`);
    productItem.innerHTML = `
        <div class="product__content">
        <div class="product__img">
            <img id="image" src="${album.image}" alt="">
        </div>
        <div class="product__cart--items">
            <button class="add-Btn">Add to card <i class="fa-solid fa-plus"></i></button>
            <button class="add-buy">Buy now <i style="color: black"
                    class="fa-solid fa-cart-shopping"></i></button>
        </div>
        </div>
        <div class="product__like">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="product__name">
            <h3 id="name">${album.name}</h3>
        </div>
        <div class="product__brand">
            <h5>${album.brand}</h5>
        </div>
        <div class="product__price">
            <p id="price">${album.price} vnd</p>
        </div>
        <div class="product__quantity" style="display: none">
            <p id="quantity">${album.quantity}</p>
        </div>
        `;
    productList.appendChild(productItem);
    return productItem;
  });
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

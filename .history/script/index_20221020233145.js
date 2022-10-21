var listArrivals = document.querySelector("#new-arrivals");
var productList = document.querySelector("#product__lists");
var itemQuantity = document.querySelector(".card--quantity");
var totalQuantity = document.querySelector(".total--quantity");
var totalValue = document.querySelector(".total--Value");
var num = document.querySelector(".num");
var deleteItem = document.querySelector(".card-delete");
var cartItemId = 1;

var albums = [
  {
    id: 1,
    name: "AIR FORCE 1",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: "3.600.000",
    image: "images/shoes-img1.png",
  },
  {
    id: 2,
    name: "AIR FORCE 1 '07 ESSENTIAL",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: "4.200.000",
    image: "images/shoes-img2.png",
  },
  {
    id: 3,
    name: "AIR MAX 1 SP",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: "6.200.000",
    image: "images/shoes-img3.png",
  },
  {
    id: 4,
    name: "JORDAN 3 RETRO CARDINAL RED",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: "6.200.000",
    image: "images/shoes-img4.png",
  },
  {
    id: 5,
    name: "JORDAN 1 LOW WHITE METALLIC GOLD",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: "6.200.000",
    image: "images/shoes-img5.png",
  },
  {
    id: 6,
    name: "AIR JORDAN 1 MID LIGHT SMOKE GREY",
    quantity: 100,
    color: "grey",
    brand: "Nike",
    price: "8.500.000",
    image: "images/shoes-img6.png",
  },
  {
    id: 7,
    name: "YEEZY BOOST 700 OG",
    quantity: 100,
    color: "grey",
    brand: "Adidas",
    price: "13.000.000",
    image: "images/shoes-img7.png",
  },
  {
    id: 8,
    name: "YEEZY BOOST 700 V2 STATIC",
    quantity: 100,
    color: "grey",
    brand: "Adidas",
    price: "12.000.000",
    image: "images/shoes-img8.png",
  },
  {
    id: 9,
    name: "ZX 2K BOOST 2.0 MANCHESTER UNITED",
    quantity: 100,
    color: "black",
    brand: "Adidas",
    price: "3.200.000",
    image: "images/shoes-img9.png",
  },
  {
    id: 10,
    name: "X9000L4 ADIDAS",
    quantity: 100,
    color: "black",
    brand: "Adidas",
    price: "2.900.000",
    image: "images/shoes-img10.png",
  },
  {
    id: 11,
    name: "AIR MAX 97",
    quantity: 100,
    color: "black",
    brand: "Nike",
    price: "4.600.000",
    image: "images/shoes-img11.png",
  },
  {
    id: 12,
    name: "AIR ZOOM ALPHAFLY NEXT% FLYKNIT",
    quantity: 100,
    color: "yellow",
    brand: "Nike",
    price: "6.800.000",
    image: "images/shoes-img12.png",
  },
];

function start() {

    renderAlbumNew(albums);
    renderAlbumSale(albums);
    renderProduct(albums);
    // renderAllProducts(albums);

  listArrivals.addEventListener("click", addProduct);
  loadCart();
}
start();


function renderProduct(albums) {
    
  var htmlsss = albums.map(function (album) {
    if (album.id <= 6) {
      return `
        <div class="section__product-item product_${album.id} col l-4 m-4 c-5" data-aos="zoom-in">
        <a href="product_${album.id}.html">
        <div class="product--item-name">
        <h2 id="name">${album.name}</h2>
        </div>
        <div class="product--item-img">
        <img id="image" src="${album.image}" alt=""">
        </div>
        </a>
        <div class="product__description">
            <div class="product-color">
                <p style="background-color:${album.color}; min-width:20px ; height: 20px; border: 1px solid black;"></p>
            </div>
            <div class="product__quantity" style="display: none">
                <p id="quantity">${album.quantity}</p>
            </div>
            <div class="product__cart">
                <button class="add-Btn"><i class="fa-solid fa-cart-plus"></i></button>
            </div>
            <div class="product-price">
                <p><strong id="price">${album.price}</strong> d</p>
            </div>
        </div>
    </div>
        `;
    }
  });
  var html = htmlsss.join("");
  listArrivals.innerHTML = html;
}

function renderAlbumSale(albums) {
  var listSale = document.querySelector("#img-sale");
  var htmlss = albums.map(function (album) {
    console.log(album);
    if (album.id == 3) {
      return `
            <div class="img-sale col l-8 m-8 c-8">
            <img src="${album.image}" alt="">
        </div>
        <div class="section_img-content col l-4 m-4 c-4">
            <p>
                Sale <br>
                <strong> ${album.name}</strong> <br>
                SHOES <br>
                <strong>${album.price}</strong> d
            </p>
            <div class="btn-seeMore-2 btn-i">
                <button><p>See More</p><i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </div>
            `;
    }
  });

  var html = htmlss.join("");
  listSale.innerHTML = html;
}

function renderAlbumNew(albums) {
  var listProduct = document.querySelector("#list-product");
  var htmls = albums.map(function (album) {
    if (album.id == 1) {
      return `
            <div id="${album.id}" class="product__item-1 col l-6 m-6 c-6" data-aos="fade-right"> 
            <img src="${album.image}" alt="">
            <h3>${album.name}</h3>
            <p><strong>${album.price} d</strong></p>
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            </div>
            `;
    } else if (album.id == 4) {
      return `
            <div id="${album.id}" class="product__item-2 col l-6 m-6 c-6" data-aos="fade-left">
            <img src="${album.image}" alt="">
            <h3>${album.name}</h3>
            <p><strong>${album.price} d</strong></p>
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            </div>
            `;
    }
  });

  listProduct.innerHTML = htmls.join("");
}

// add to card
function addProduct(e) {
    console.log(123);
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
  updateProductInCart(productInfo);
  updateShoppingCartHTML();
}

function updateProductInCart(product) {
  // let productInCart = JSON.parse(localStorage.getItem('ShoppingCart')) || [];
  for (let i = 0; i < productInCart.length; i++) {
    if (productInCart[i].name == product.name) {
      alert("Product into cart");
      return;
    }
  }
  productInCart.push({
    ...product,
    numberOfUnits: 1,
  });
}

// cart-array
let productInCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
var listCard = document.querySelector(".list-Card");
function updateShoppingCartHTML() {
  localStorage.setItem("ShoppingCart", JSON.stringify(productInCart));
  if (productInCart.length > 0) {
    let result = productInCart.map(function (product) {
      return `
            <div class="row cart__item">
            <div class="cart-img col l-3">
                <img src="${product.image}" alt="">
            </div>
            <div class="product__quantity" style="display: none">
            <p id="quantity">${product.quantity}</p>
            </div>
            <div class="cart-details col l-6">
                <h2 class="name-details">${product.name}</h2>
                <h3>Price: ${product.price} d</h3>
                <div class="quantity">
                    <input type="button" class="btn-minus" onClick="changeNumberOfUnits('minus', ${product.id})" value="-">
                    <span class="num">${product.numberOfUnits}</span>
                    <input type="button" class="btn-plus" onClick="changeNumberOfUnits('plus', ${product.id})" value="+">
                </div>
            </div>
            <div class="card-delete col l-3">
                <i class="fa-solid fa-trash-can" onClick="removeItemFromCart(${product.id})"></i>
            </div>
            </div>
            `;
    });
    listCard.innerHTML = result.join("");
    updateCartInfo();
  } else {
    var imgCart = document.querySelector(".list-img");
  }
}
updateShoppingCartHTML();

function loadCart() {
  let productInCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
  if (productInCart.length < 1) {
    cartItemId = 1;
  } else {
    cartItemId = productInCart[productInCart.length - 1].id;
    cartItemId++;
  }
}

// update cart
function updateCartInfo() {
  let cartInfo = findCartInfo();
  totalQuantity.textContent = cartInfo.productCount;
  itemQuantity.textContent = cartInfo.productCount;
  totalValue.textContent = cartInfo.total;
}

// calculate total quantity and price
function findCartInfo() {
  let productInCart = JSON.parse(localStorage.getItem("ShoppingCart")) || [];
  let total = productInCart.reduce(function (acc, product) {
    let price = parseFloat(product.price);
    let numberOfUnits = product.numberOfUnits;
    return (acc = acc + numberOfUnits * price);
  }, 0);

  let totalItems = productInCart.reduce(function (qua, product) {
    let numberOfUnits = product.numberOfUnits;
    return (qua = qua + numberOfUnits);
  }, 0);

  return {
    total: total.toFixed(7),
    productCount: totalItems,
  };
}

// changeNumberOfUnits
function changeNumberOfUnits(action, id) {
  productInCart = productInCart.map(function (product) {
    console.log(product);
    let numberOfUnits = product.numberOfUnits;
    if (product.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < product.quantity) {
        numberOfUnits++;
      }
    }
    return {
      ...product,
      numberOfUnits,
    };
  });
  updateShoppingCartHTML();
  updateCartInfo();
}
var imgCart = document.querySelector(".list-img-none");
console.log(imgCart);

//delete product
function removeItemFromCart(id) {
  productInCart = productInCart.filter(function (product) {
    return product.id !== id;
  });
  
  if(productInCart.length < 1){
    imgCart.style.display = "block";
  }
  updateShoppingCartHTML();
  updateCartInfo();
}

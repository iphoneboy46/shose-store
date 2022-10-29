var imgItem = document.querySelectorAll(".section-img-items img");
var imgList = document.querySelector("#img-zoom");
var imgDiv = document.querySelector(".section-img-list");
var sizeItem = document.querySelectorAll(".size li");
var currentIndex = 0;

//* img slideshow
function UpdateImageIndex(index) {
  //* reomove active

  document.querySelectorAll(".section-img-items div").forEach(function (item) {
    item.classList.remove("active");
  });

  currentIndex = index;
  imgList.src = imgItem[index].getAttribute("src");
  imgItem[index].parentElement.classList.add("active");
}

imgItem.forEach(function (imgElement, index) {
  imgElement.addEventListener("click", function (e) {
    imgList.style.opacity = "0";
    setTimeout(function () {
      UpdateImageIndex(index);
      imgList.style.opacity = "1";
    }, 400);
  });
});

UpdateImageIndex(0);

//* zoom img

imgDiv.addEventListener("mousemove", function (e) {
  //* lay toa do X - cho vi tri le trai cua the chua (div)
  getX = e.clientX - imgDiv.offsetLeft;
  //* lay toa do Y - cho vi tri le tren cua the chua (div)
  getY = e.clientY - imgDiv.offsetTop;

  //* lay kich thuoc chieu rong cua the chua (div)
  mWidth = imgDiv.offsetWidth;
  //* lay kich thuoc chieu cao cua the chua (div)
  mHeight = imgDiv.offsetHeight;

  getX = (getX / mWidth) * 50;
  getY = (getY / mHeight) * 50;

  imgList.style.transform =
    "translate(-" + getX + "%, -" + getY + "%) scale(2)";
  // imgList.style.transform = 'translate(-50%,-50%) scale(2)'
});

imgDiv.addEventListener("mouseleave", function (e) {
  imgList.style.transform = "translate(0%,0%) scale(1)";
});

//* active the size

sizeItem.forEach(function (sizes, index) {
  sizes.addEventListener("click", function (e) {
    document.querySelectorAll(".size li").forEach(function (item) {
      item.classList.remove("activeSize");
    });
    currentIndex = index;
    sizeItem[index].classList.add("activeSize");
  });
});

//* quantity
var plus = document.querySelector(".btn-plus");
var minus = document.querySelector(".btn-minus");
var num = document.querySelector("#quantity");

let a = 1;

const handleMinus = () => {
  console.log(123);
  if (a > 1) {
    a--;
    num.innerHTML = a;
  }
};

const handlePlus = () => {
  console.log(123);

  if (a < 10) {
    a++;
    num.innerHTML = a;
    console.log((num.innerHTML = a));
  }
};

//add to card

var cartItemId = Math.random()*1000;
console.log(cartItemId);
var productInCart = JSON.parse(localStorage.getItem("product")) || [];
function handleAdd() {
  const btnAdd = document.querySelector(".buy-cart");
  btnAdd.onclick = (e) => {
    let product = document.querySelector(".section__product");
    let productInfo = {
      id: cartItemId++,
      name: product.querySelector("#name").innerHTML,
      image: product.querySelector("#image").src,
      price: product.querySelector("#price").innerHTML,
      quantity: product.querySelector("#quantity").innerHTML,
      size: product.querySelector(".activeSize").innerHTML,
    };
    cartItemId++;
    updateProductInCart(productInfo);
    updateShoppingCartHTML();
    quantityInCard();
    priceInCard();
  };
}

handleAdd();

function updateProductInCart(product) {
  for (let i = 0; i < productInCart.length; i++) {
    if (
      productInCart[i].name == product.name &&
      productInCart[i].size === product.size
    ) {
      alert("Product into cart");
      return;
    }
  }
  let PQuantity = Number(product.quantity);

  let PPrice = parseFloat(product.price);

  let total = PQuantity * PPrice;

  console.log(total);

  productInCart.push({
    ...product,
    total: total,
    id: product.id,
  });
  localStorage.setItem("product", JSON.stringify(productInCart));
}

function updateShoppingCartHTML() {
  var listCard = document.querySelector(".list-Card");
  var imgCart = document.querySelector(".list-img");
  imgCart.style.display = "none";
  listCard.style.display = "block";

  console.log(productInCart.length);
  if (productInCart.length > 0) {
    let render = productInCart.map(function (product) {
      return `
                  <div class="row cartItem">
                  <div class="cart-img col l-3 m-3 c-3">
                      <img src="${product.image}" alt="">
                  </div>
                 
                  <div class="cart-details col l-4 m-4 c-4">
                      <h2 class="name-details">${product.name}</h2>
                      <h3>Price: ${product.price} đ</h3>
                      <h4>Size: ${product.size}</h4>
                      
                  </div>
                  <div class="col l-4 m-4 c-4">
                      <div class="quantity">
                          <input type="button" class="btn-minus"  value="-">
                          <span class="num">${product.quantity}</span>
                          <input type="button" class="btn-plus"  value="+">
                      </div>
                  </div>
                  <div class="col l-1 m-1 c-1">
                      <i class="fa-solid fa-trash-can" onclick="removeItemFromCart(${product.id})"></i>
                   </div>
                  </div>
                  
                  `;
    });
    listCard.innerHTML = render.join("");
    var imgCart = document.querySelector(".list-img");
    imgCart.style.display = "none";
  } else {
    var imgCart = document.querySelector(".list-img");
    imgCart.style.display = "block";
    listCard.style.display = "none";
  }
}
updateShoppingCartHTML();


var productInCart = JSON.parse(localStorage.getItem("product")) || [];

function updateShoppingCartHTML() {
  var listCard = document.querySelector(".list-Card");
  var imgCart = document.querySelector(".list-img");
  imgCart.style.display = "none";
  listCard.style.display = "block";

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
                    <i class="fa-solid fa-trash-can" onClick="removeItemFromCart(${product.id})"></i>
                 </div>
                </div>
                
                `;
    });
    listCard.innerHTML = render.join("");
    //   updateCartInfo();
    var imgCart = document.querySelector(".list-img");
    imgCart.style.display = "none";
  } else {
    var imgCart = document.querySelector(".list-img");
    imgCart.style.display = "block";
    listCard.style.display = "none";
  }
}
updateShoppingCartHTML();

function quantityInCard() {
  let quantityProduct = productInCart.map((item) => {
    return Number(item.quantity);
  });
  console.log(quantityProduct);

  let totalQuantityProduct = quantityProduct.reduce((quantity, total) => {
    return (total += quantity);
  }, 0);

  let totalQuantity = document.querySelector(".card--quantity");
  let renderTotalQuantity = document.querySelector(".total--quantity");
  let numberOfProducts = document.querySelector("#total-number");
  numberOfProducts.innerHTML = totalQuantityProduct;
  totalQuantity.innerHTML = totalQuantityProduct;
  renderTotalQuantity.innerHTML = totalQuantityProduct;
}
quantityInCard();

function priceInCard() {
  let totalPrice = productInCart.map((item) => {
    return parseFloat(item.total);
  });

  let totalPriceInCart = totalPrice.reduce((price, total) => {
    return (total += price);
  }, 0);

  let renderTotalPrice = document.querySelector(".total--Value");
  renderTotalPrice.innerHTML = totalPriceInCart;
}
priceInCard();

function removeItemFromCart(id) {
  console.log(id);
  productInCart = productInCart.filter((item) => {
    console.log(item.id);
    return item.id !== id;
  });
  localStorage.setItem("product", JSON.stringify(productInCart));
  updateShoppingCartHTML();
  quantityInCard();
  priceInCard();
}

function renderCart() {
  var listCart = document.querySelector("#section__cart");
  var imgNone = document.querySelector(".img-none-item");
  if (productInCart.length > 0) {
    imgNone.style.display = "none";
    listCart.style.display = "block";
    let renderItems = productInCart.map((product) => {
      return `
      <div class="section__cart--item">
      <div class="section__cart--item-img">
          <img src="${product.image}" alt="">
      </div>
      <div class="section__cart--item-name-price">
          <h2>${product.name}</h2>
          <h3>${product.price}  đ</h3>
      </div>
      <div class="section__cart--item-quantity">
          <input type="button" class="btn-minus"  value="-">
          <span class="num">${product.quantity}</span>
          <input type="button" class="btn-plus"  value="+">
      </div>
      <div class="section__cart--item-delete">
          <i class="fa-solid fa-trash-can" onClick="removeItemFromCart(${product.id})"></i>
      </div>
  </div>
        `;
    });
    listCart.innerHTML = renderItems.join("");
  } else {
    imgNone.style.display = "block";
    listCart.style.display = "num";
  }
}

renderCart();

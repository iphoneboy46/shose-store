//add to card

var cartItemId = 1;

function handleAdd() {
  const btnAdd = document.querySelector(".buy-cart");
  btnAdd.onClick = (e) => {
    let product = document.querySelector(".section__product");
    let productInfo = {
      id: cartItemId,
      name: product.querySelector("#name").innerHTML,
      image: product.querySelector("#image").src,
      price: product.querySelector("#price").innerHTML,
      quantity: product.querySelector("#quantity").innerHTML,
      size: product.querySelector(".activeSize").innerHTML,
    };
    updateProductInCart(productInfo);
    updateShoppingCartHTML();
  };
}

handleAdd();
var productInCart = JSON.parse(localStorage.getItem("product")) || [];

function updateProductInCart(product) {
  for (let i = 0; i < productInCart.length; i++) {
    if (
      productInCart[i].name === product.name &&
      productInCart[i].size === product.size
    ) {
      alert("Product into cart");
      return;
    }
  }
  productInCart.push({
    ...product,
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

console.log(productInCart);

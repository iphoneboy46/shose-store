var productInCart = JSON.parse(localStorage.getItem("product")) || [];

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
            <h3>${product.price}</h3>
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
      listCart.style.display = "none";
    }
  
  }
  
  renderCart();

  function quantityInCard() {
    let quantityProduct = productInCart.map((item) => {
      return Number(item.quantity);
    });
    console.log(quantityProduct);
  
    let totalQuantityProduct = quantityProduct.reduce((quantity, total) => {
      return (total += quantity);
    }, 0);
  
   
    let numberOfProducts = document.querySelector("#total-number");
    console.log(numberOfProducts);
  
    numberOfProducts.innerHTML = totalQuantityProduct;
   
  }
  quantityInCard();

  function priceInCard() {
    let totalPrice = productInCart.map((item) => {
      return Number(item.total);
    });
  
    let totalPriceInCart = totalPrice.reduce((price, total) => {
      return (total += price);
    }, 0);
  
    let renderPrice = document.querySelector("#total-price");
    renderPrice.innerHTML = totalPriceInCart.toFixed(6);
  }
  priceInCard();

  function removeItemFromCart(id) {
    console.log(id);
    productInCart = productInCart.filter((item) => {
      console.log(item.id);
      return item.id !== id;
    });
    localStorage.setItem("product", JSON.stringify(productInCart));
    updateShoppingCartHTML()
    quantityInCard();
    priceInCard();
    renderCart();
  }
  
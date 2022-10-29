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
  
    let numberOfProducts = document.querySelector("#total-number");
    numberOfProducts.innerHTML = totalQuantityProduct;
  }
  
  renderCart();
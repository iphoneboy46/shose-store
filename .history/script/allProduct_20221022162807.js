function renderAllProducts() {
  var productList = document.querySelector("#product__lists");
  var productItem = albums.map(function (album) {
    return `
      <div class="section__product-item product_${album.id}" data-aos="zoom-in">
      <a href="product_${album.id}.html">
      <div class="product--item-img">
      <img id="image" src="${album.image}" alt=""">
      </div>
      </a>
      <div class="product__description">
          <div class="product-color">
          <div class="product--item-name">
          <h2 id="name">${album.name}</h2>
          </div>
              <p style="background-color:${album.color}; min-width:20px ; height: 20px; border: 1px solid black;"></p>
          </div>
          <div class="product__quantity" style="display: none">
              <p id="quantity">${album.quantity}</p>
          </div>
          <div class="product__cart">
              <button class="add-Btn"><i class="fa-solid fa-cart-plus"></i></button>
          </div>
          <div class="product-price">
              <p><strong id="price">${album.price}</strong> đ</p>
          </div>
      </div>
    </div>
      `;
  });

  productList.innerHTML = productItem.join("");
}
renderAllProducts();

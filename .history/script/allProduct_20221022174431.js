function renderAllProducts() {
  var productList = document.querySelector("#product__lists");
  var productItem = albums.map(function (album) {
    return `
      <div class="section__product-item product_${album.id} ${album.brand}"  data-aos="zoom-in">
      <a href="product_${album.id}.html">
      <div class="product--item-img">
      <img id="image" src="${album.image}" alt=""">
      </div>
      </a>
      <div class="product__description">
          <div class="product--item-name">
          <h2 id="name">${album.name}</h2>
          </div>
          <div class="product__quantity" style="display: none">
              <p id="quantity">${album.quantity}</p>
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

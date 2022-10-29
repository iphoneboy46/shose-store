var albums = [
  {
    id: 1,
    name: "AIR FORCE 1",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: 3.6,
    image: "images/shoes-img1.png",
  },
  {
    id: 2,
    name: "AIR FORCE 1 '07 ESSENTIAL",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: 4.2,
    image: "images/shoes-img2.png",
  },
  {
    id: 3,
    name: "AIR MAX 1 SP",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: 6.2,
    image: "images/shoes-img3.png",
  },
  {
    id: 4,
    name: "JORDAN 3 RETRO CARDINAL RED",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: 6.2,
    image: "images/shoes-img4.png",
  },
  {
    id: 5,
    name: "JORDAN 1 LOW WHITE METALLIC GOLD",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: 6.2,
    image: "images/shoes-img5.png",
  },
  {
    id: 6,
    name: "AIR JORDAN 1 MID LIGHT SMOKE GREY",
    quantity: 100,
    color: "grey",
    brand: "Nike",
    price: 8.5,
    image: "images/shoes-img6.png",
  },
  {
    id: 7,
    name: "YEEZY BOOST 700 OG",
    quantity: 100,
    color: "grey",
    brand: "Adidas",
    price: 13.0,
    image: "images/shoes-img7.png",
  },
  {
    id: 8,
    name: "YEEZY BOOST 700 V2 STATIC",
    quantity: 100,
    color: "grey",
    brand: "Adidas",
    price: 12.0,
    image: "images/shoes-img8.png",
  },
  {
    id: 9,
    name: "ZX 2K BOOST 2.0 MANCHESTER UNITED",
    quantity: 100,
    color: "black",
    brand: "Adidas",
    price: 3.2,
    image: "images/shoes-img9.png",
  },
  {
    id: 10,
    name: "X9000L4 ADIDAS",
    quantity: 100,
    color: "black",
    brand: "Adidas",
    price: 2.9,
    image: "images/shoes-img10.png",
  },
  {
    id: 11,
    name: "AIR MAX 97",
    quantity: 100,
    color: "black",
    brand: "Nike",
    price: 4.6,
    image: "images/shoes-img11.png",
  },
  {
    id: 12,
    name: "AIR ZOOM ALPHAFLY NEXT% FLYKNIT",
    quantity: 100,
    color: "yellow",
    brand: "Nike",
    price: 6.8,
    image: "images/shoes-img12.png",
  },
];

function renderAllProducts() {
  var productList = document.querySelector("#product__lists");
  var productItem = albums.map(function (album) {
    return `
      <div class="section__product-item product_${album.id} ${album.brand}" >
      <a href="product_${album.id}.html">
      <div class="product--item-img">
      <img id="image" src="${album.image}" alt=""">
      </div>
      </a>
      <div class="product__description">
          <div class="product--item-name">
          <h2 id="name">${album.name}</h2>
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

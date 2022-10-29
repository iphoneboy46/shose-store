var listArrivals = document.querySelector("#new-arrivals");
var itemQuantity = document.querySelector(".card--quantity");
var itemQuantityMB = document.querySelector(".card--quantity-mb");
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
    price:" 6.200.000",
    image: "images/shoes-img3.png",
  },
  {
    id: 4,
    name: "JORDAN 3 RETRO CARDINAL RED",
    quantity: 100,
    color: "while",
    brand: "Nike",
    price: 6.200.000,
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

function renderAlbumSale() {
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
                <strong>${album.price}</strong> đ
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
renderAlbumSale();

function renderAlbumNew() {
  let listProduct = document.getElementById("list-product");
  console.log(listProduct);
  var htmls = albums.map(function (album) {
    if (album.id == 1) {
      return `
            <div id="${album.id}" class="product__item-1 col l-6 m-6 c-6" data-aos="fade-right"> 
            <img src="${album.image}" alt="">
            <h3>${album.name}</h3>
            <p><strong>${album.price} đ</strong></p>
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
            <p><strong>${album.price} đ</strong></p>
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
renderAlbumNew();

function renderProduct() {
  var htmlsss = albums.map(function (album) {
    if (album.id <= 6) {
      return `
      <div class="section__product-item product_${album.id}" data-aos="zoom-in">
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
    }
  });
  var html = htmlsss.join("");
  listArrivals.innerHTML = html;
}
renderProduct();



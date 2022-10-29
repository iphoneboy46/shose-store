window.addEventListener("load", function () {
  var imgItem = document.querySelectorAll(".section-img-items img");
  var imgList = document.querySelector("#img-zoom");
  var imgDiv = document.querySelector(".section-img-list");
  var sizeItem = document.querySelectorAll(".size li");
  var currentIndex = 0;

  //* img slideshow
  function UpdateImageIndex(index) {
    //* reomove active

    document
      .querySelectorAll(".section-img-items div")
      .forEach(function (item) {
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

    getX = (getX / mWidth) * 100;
    getY = (getY / mHeight) * 100;

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
  var num = document.querySelector(".num");

  let a = 1;

  plus.addEventListener("click", function () {
    if (a < 10) {
      a++;
      a = a < 10 ? "0" + a : a;
      num.innerHTML = a;
    }
  });

  minus.addEventListener("click", function () {
    if (a > 1) {
      a--;
      a = a < 10 ? "0" + a : a;
      num.innerHTML = a;
    }
  });

  //add to card
  let productInCart = [];
  var cartItemId = 1;

  function renderProductInCart() {
    console.log(productInCart.length);
  }
  renderProductInCart();

  function handleAdd() {
    const btnAdd = document.querySelector(".buy-cart");
    btnAdd.onclick = (e) => {
      const product = document.querySelector(".section__product");
      getProductInfo(product);
    };
  }

  handleAdd();

  function getProductInfo(product) {
    let productInfo = {
      id: cartItemId,
      name: product.getElementById("#name").innerHTML,
      image: product.querySelector("#image").src,
      price: product.querySelector("#price").innerHTML,
      quantity: product.querySelector("#quantity").innerHTML,
      size: product.querySelector(".activeSize").innerHTML,
    };
    updateProductInCart(productInfo);
  }

  getProductInfo();

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
});

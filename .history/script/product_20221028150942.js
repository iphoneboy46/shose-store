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

  var cartItemId = 1;

  function handleAdd() {
    const btnAdd = document.querySelector(".buy-cart");
    btnAdd.onclick = (e) => {
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

  function updateProductInCart(product) {
    var productInCarts = JSON.parse(localStorage.getItem("product"));
    console.log(productInCart);
    productInCarts.forEach((productInCart) => {
      if (
        productInCart.name === product.name &&
        productInCart.size === product.size
      ) {
        alert("Product into cart");
      } else {
        productInCart.push({
          ...product,
        });
      }

      localStorage.setItem("product", JSON.stringify(productInCart));
    });
  }


});

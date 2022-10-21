var albumApi = 'http://localhost:3000/albums';
var cardApi = 'http://localhost:3000/cards'
var listArrivals = document.querySelector('#new-arrivals');
var itemQuantity = document.querySelector('.card--quantity')
var totalQuantity = document.querySelector('.total--quantity');
var totalValue = document.querySelector('.total--Value');
var cartItemId = 1
function start() {
    getAlbum(function(albums){
        renderAlbumNew(albums);
        renderAlbumSale(albums);
        renderProduct(albums);
        
    })
    listArrivals.addEventListener('click',addProduct);
    autoPlay();
    loadCart();
    updateCartInfo();
    
   
}
start();

function getAlbum(callback) {
    fetch(albumApi)
        .then(function (response) {
            return response.json();
        })
        .then(callback)
}

function renderProduct(albums){
    var htmlsss = albums.map(function (album){
       if(album.id <= 6){
        return `
        <div class="section__product-item product_${album.id} col l-4 m-4 c-5" data-aos="zoom-in">
        <a href="product_${album.id}.html">
        <div class="product--item-name">
        <h2 id="name">${album.name}</h2>
        </div>
        <div class="product--item-img">
        <img id="image" src="${album.image}" alt=""">
        </div>
        <p id="number" style="display:none" >${album.number}</p>
        </a>
        <div class="product__description">
            <div class="product-color">
                <p style="background-color:${album.color}; min-width:20px ; height: 20px; border: 1px solid black;"></p>
            </div>
            <div class="product__cart">
                <button class="add-Btn"><i class="fa-solid fa-cart-plus"></i></button>
            </div>
            <div class="product-price">
                <p><strong id="price">${album.price}</strong> d</p>
            </div>
        </div>
    </div>
        `
       }
    })
    var html = htmlsss.join('');
    listArrivals.innerHTML = html;
}

function renderAlbumSale(albums) {
    var listSale = document.querySelector('#img-sale')
    var htmlss = albums.map(function (album){
        console.log(album);
        if(album.id == 3){
            return `
            <div class="img-sale col l-8 m-8 c-8">
            <img src="${album.image}" alt="">
        </div>
        <div class="section_img-content col l-4 m-4 c-4">
            <p>
                Sale <br>
                <strong> ${album.name}</strong> <br>
                SHOES <br>
                <strong>${album.price}</strong> d
            </p>
            <div class="btn-seeMore-2 btn-i">
                <button><p>See More</p><i class="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </div>
            `
        }
    })

    var html = htmlss.join('');
    listSale.innerHTML = html;
}

function renderAlbumNew(albums){
    var listProduct =document.querySelector('#list-product');
    var htmls = albums.map(function(album){
        if(album.id == 1){
            return `
            <div id="${album.id}" class="product__item-1 col l-6 m-6 c-6" data-aos="fade-right"> 
            <img src="${album.image}" alt="">
            <h3>${album.name}</h3>
            <p><strong>${album.price} d</strong></p>
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            </div>
            `;
        }else if(album.id == 4){
            return `
            <div id="${album.id}" class="product__item-2 col l-6 m-6 c-6" data-aos="fade-left">
            <img src="${album.image}" alt="">
            <h3>${album.name}</h3>
            <p><strong>${album.price} d</strong></p>
            <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </span>
            </div>
            `
        }
      
    })
    
    var html = htmls.join('');
    listProduct.innerHTML = html;

}

// update cart
function updateCartInfo(){
    let cartInfo = findCartInfo();
    totalQuantity.textContent = cartInfo.productCount;
    itemQuantity.textContent = cartInfo.productCount;
    totalValue.textContent = cartInfo.total;
    var imgCart = document.querySelector('.list-img')
    let product = getProductFormStorage();
    if(product.length < 1){
        imgCart.style.display = 'block';
    }else{
        imgCart.style.display = 'none';
    }
}



// add to card 
function addProduct(e){
   if(e.target.classList.contains('add-Btn')){
        let product = e.target.parentElement.parentElement.parentElement;
        getProductInfo(product);
   }
   
}
//get product info after add to card button click

function getProductInfo(product){
    var productInfo ={
        id: cartItemId,
        image : product.querySelector('#image').src,
        name : product.querySelector('#name').textContent,
        price : product.querySelector('#price').textContent,
        number: product.querySelector('#number').textContent
    }
    cartItemId++;
    updateQuantityNumber(productInfo);
    addToCartList(productInfo);
    saveProductInStorage(productInfo);
}
// add to cart
function addToCartList(product){
    var listCard = document.querySelector('.list-Card');
    
    const cartItem = document.createElement('div');
    cartItem.classList.add('card-item');
    cartItem.setAttribute('data-id', `${product.id}`);
    cartItem.innerHTML =`
        <div class="row">
            <div class="cart-img col l-3">
                <img src="${product.image}" alt="">
            </div>
            <div class="cart-details col l-6">
                <h2 class="name-details">${product.name}</h2>
                <h3>Price: ${product.price} d</h3>
                <div class="quantity">
                    <input type="button" class="minus" onclick="Minus()" value="-">
                    <span class="num">${product.number}</span>
                    <input type="button" class="plus" onclick="Plus()" value="+">
                </div>
            </div>
            <div class="card-delete col l-3">
                <i class="fa-solid fa-trash-can"></i>
            </div>
        </div>
        `
        listCard.appendChild(cartItem);
}
// save product in the local storage
function saveProductInStorage(item) {
    let products = getProductFormStorage();
    // for(let i=0; i < products.length; i++){
    //     if(products[i].name === item.name){
    //     alert("Product into Cart");
    //     return;
    //     }
    // }
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products));
    updateCartInfo();
}

// get all the products info if there is any in the local storage

function getProductFormStorage() {
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}

// load carts from the local storage
function loadCart() {
    let products = getProductFormStorage();
    if (products.length < 1){
        cartItemId = 1
    }else{
        cartItemId = products[products.length-1].id
        cartItemId++;
        
    }
    
    products.forEach(function(product){
        return addToCartList(product);
        
    })
    
}

// calculate total quantity and price
function findCartInfo(){
    let products = getProductFormStorage();
    let total = products.reduce(function(acc, product){
        let price = parseFloat(product.price);
        return acc = acc + price;
    },0)
    
   return{
       total: total.toFixed(7),
       productCount: products.length
   }
}

function updateQuantityNumber(product){
    let productsInCart = [];
    for (let i = 0; i < productsInCart.length; i++){
        if(productsInCart[i].id == product.id){
            productsInCart[i].number +=1;
        }
    }
}




// auto play caroulsel
function autoPlay(){
    var counter = 1;
    setInterval(function(){
        document.getElementById('btn-right-' + counter).checked = true;
        counter++;
        if(counter > 3){
            counter = 1;
        }
    }, 3000)
}









var albumApi = 'http://localhost:3000/albums';
var cardApi = 'http://localhost:3000/cards'
var listArrivals = document.querySelector('#new-arrivals');

var cardTotalValue = document.querySelector('#card-Total-Value');
var cartCountInfo = document.querySelector('#cart-Count-Info');
var cartItemId = 1
function start() {
    getAlbum(function(albums){
        renderAlbumNew(albums);
        renderAlbumSale(albums);
        renderProduct(albums);
       
    })

    getProduct(function(cards){
        
    })

    listArrivals.addEventListener('click',addProduct)
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
        <div class="section__product-item product_${album.id} col l-4 m-4" data-aos="zoom-in">
        <a href="product_${album.id}.html">
            <h2 id="name">${album.name}</h2>
        <img id="image" src="${album.image}" alt=""">
        <p id="quantity" style="display:none" >Quantity: ${album.quantity}</p>
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
            <div class="img-sale col l-8 m-8">
            <img src="${album.image}" alt="">
        </div>
        <div class="section_img-content col l-4 m-4">
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
            <div id="${album.id}" class="product__item-1 col l-6 m-6" data-aos="fade-right"> 
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
            <div id="${album.id}" class="product__item-2 col l-6 m-6" data-aos="fade-left">
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

// add to card 

function addProduct(e){
   if(e.target.classList.contains('add-Btn')){
        let product = e.target.parentElement.parentElement.parentElement;
        getProductInfo(product);
   }
}
//get product info after add to card button click

function getProductInfo(product){
    let productInfo ={
        image : product.querySelector('#image').src,
        name : product.querySelector('#name').textContent,
        price : product.querySelector('#price').textContent
    }

    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(productInfo)
    }

    fetch(cardApi,options)
        .then(function(response){
            return response.json();
        })
        .then(callback)
}



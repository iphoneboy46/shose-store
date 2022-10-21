var albumApi = 'http://localhost:3000/albums';
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
    // listArrivals.addEventListener('click',addProduct);
    autoPlay();   
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
                <button class="add-Btn" onclick="addToCart(${album.id})"><i class="fa-solid fa-cart-plus"></i></button>
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

//cart array
var productInCart = []; 

//Add to cart
function addToCart(id){
    const item = album.find(function(albums){
        albums.id === id
    })
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









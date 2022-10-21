var btnSelect = document.querySelector('.product__popular--select');
var btnOptions = document.querySelector('.product__popular--options')

btnSelect.addEventListener('toggled', function(){
    btnOptions.style.display = 'block';
})
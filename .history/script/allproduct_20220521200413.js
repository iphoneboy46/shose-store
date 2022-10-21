var btnSelect = document.querySelector('.product__popular--select');
var btnOptions = document.querySelectorAll('.product__popular--options')
var btnOption = document.querySelector('.product__popular--option')
btnSelect.addEventListener('click', function(){
    btnOptions.classList.toggle('hidden')
})

btnOptions.forEach(function(option){
    console.log(option)
})
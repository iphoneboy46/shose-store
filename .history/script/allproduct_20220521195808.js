var btnSelect = document.querySelector('.product__popular--select');
var btnOptions = document.querySelector('.product__popular--options')

btnSelect.addEventListener('click', function(){
   btnSelect.addEventListener('toggle', function(){
       btnOptions.style.display = 'block';
   })
})
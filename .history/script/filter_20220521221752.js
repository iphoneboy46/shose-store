var btnSelects = document.querySelector('.product__filter--select');
var Optionss = document.querySelectorAll('.product__filter--option');
var btnOptionss = document.querySelector('.product__filter--options');
var btnOptions = document.querySelector('.product__filter--option');
var texts = document.querySelector('.sBtn-text-filter');
var iconDropdowns = document.querySelector('.fa-caret-down');
btnSelects.addEventListener('click', function(){
    if(btnOptionss.classList.toggle('show')){
        iconDropdowns.style.transform = 'rotate(-180deg)'
    }else{
        iconDropdowns.style.transform = 'rotate(0deg)'
    }
})

Optionss.forEach(function(options){
    options.addEventListener('click', function(){
        let selectedOptions = option.querySelector('.option-text').innerText;
        text.innerHTML = selectedOptions;
        btnOptionss.classList.remove('show');
        iconDropdowns.style.transform = 'rotate(0deg)'
    })
})
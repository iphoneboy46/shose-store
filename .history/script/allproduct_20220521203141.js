var btnSelect = document.querySelector('.product__popular--select');
var Options = document.querySelectorAll('.product__popular--option');
var btnOptions = document.querySelector('.product__popular--options');
var btnOption = document.querySelector('.product__popular--option');

var text = document.querySelector('.sBtn-text');
btnSelect.addEventListener('click', function(){
    btnOptions.classList.toggle('show')
})

// Options.forEach(function(option){
//     option.addEventListener('click', function(){
//         let selectedOption = option.querySelector('.option-text').innerText;
//         text.innerHTML = selectedOption;
//     })
// })
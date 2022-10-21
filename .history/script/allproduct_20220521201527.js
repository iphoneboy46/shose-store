var btnSelect = document.querySelector('.product__popular--select');
var Options = document.querySelectorAll('.product__popular--options')
var btnOptions = document.querySelector('.product__popular--options')
var btnOption = document.querySelector('.product__popular--option')
btnSelect.addEventListener('click', function(){
    btnOptions.classList.toggle('show')
})

Options.forEach(function(option){
    console.log(option)
    btnOptions.addEventListener('click', function(){
        let selectedOption = option.querySelector('.option-text').textContent;
        console.log(selectedOption)
    })
})
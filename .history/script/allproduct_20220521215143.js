var btnSelect = document.querySelector('.product__popular--select');
var Options = document.querySelectorAll('.product__popular--option');
var btnOptions = document.querySelector('.product__popular--options');
var btnOption = document.querySelector('.product__popular--option');
var text = document.querySelector('.sBtn-text');
var iconDropdown = document.querySelector('.fa-caret-down');
btnSelect.addEventListener('click', function(){
    if(btnOptions.classList.toggle('show')){
        iconDropdown.style.transform = 'rotate(-180deg)'
    }else{
        iconDropdown.style.transform = 'rotate(0deg)'
    }
})

Options.forEach(function(option){
    option.addEventListener('click', function(){
        let selectedOption = option.querySelector('.option-text').innerText;
        text.innerHTML = selectedOption;
        btnOptions.classList.remove('show');
    })
})
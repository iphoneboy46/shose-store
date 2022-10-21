var btnSelectFilter = document.querySelector('.product__filter--select');
var OptionsFilter = document.querySelectorAll('.product__filter--option');
var btnOptionsFilter = document.querySelector('.product__filter--options');
var btnOptionFilter = document.querySelector('.product__filter--option');
var textFilter = document.querySelector('.sBtn-text');
var iconDropdownFilter = document.querySelector('.fa-caret-down');
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
        iconDropdown.style.transform = 'rotate(0deg)'
    })
})


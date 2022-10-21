var btnSelectFilter = document.querySelector('.product__filter--select');
var OptionsFilter = document.querySelectorAll('.product__filter--option');
var btnOptionsFilter = document.querySelector('.product__filter--options');
var btnOptionFilter = document.querySelector('.product__filter--option');
var textFilter = document.querySelector('.sBtn-text-filter');
var iconDropdownFilter = document.querySelector('.fa-caret-down');
btnSelectFilter.addEventListener('click', function(){
    if(btnOptionsFilter.classList.toggle('show')){
        iconDropdownFilter.style.transform = 'rotate(-180deg)'
    }else{
        iconDropdownFilter.style.transform = 'rotate(0deg)'
    }
})

OptionsFilter.forEach(function(option){
    option.addEventListener('click', function(){
        let selectedOptionFilter = option.querySelector('.option-text').innerText;
        text.innerHTML = selectedOptionFilter;
        btnOptionsFilter.classList.remove('show');
        iconDropdownFilter.style.transform = 'rotate(0deg)'
    })
})


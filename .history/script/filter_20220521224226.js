var btnSelectFilter = document.querySelector('.product__filter--select');
var OptionsFilter = document.querySelectorAll('.product__filter--option');
var btnOptionsFilter = document.querySelector('.product__filter--options');
var btnOptionFilter = document.querySelector('.product__filter--option');
var textFilter = document.querySelector('.Btn-text-filter');
var iconDropdownFilter = document.querySelector('.fa-filter-circle-dollar');

btnSelectFilter.addEventListener('click', function(){
   
})


OptionsFilter.forEach(function(option){
    option.addEventListener('click', function(){
        let selectedOptionFilter = option.querySelector('.option-text-filter').innerText;
        textFilter.innerHTML = selectedOptionFilter;
        btnOptionsFilter.classList.remove('show');
    })
})


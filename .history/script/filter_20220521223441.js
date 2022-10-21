var btnSelectFilter = document.querySelector('.product__filter--select');
var OptionsFilter = document.querySelectorAll('.product__filter--option');
var btnOptionsFilter = document.querySelector('.product__filter--options');
var btnOptionFilter = document.querySelector('.product__filter--option');
var textFilter = document.querySelector('.sBtn-text-filter');
var iconDropdownFilter = document.querySelector('.fa-filter-circle-dollar');

btnSelectFilter.addEventListener('click', function(){
    console.log(12346)
    btnOptionsFilter.classList.toggle('show')
})

OptionsFilter.forEach(function(option){
    console.log(option)
    option.addEventListener('click', function(){
        let selectedOptionFilter = option.querySelector('.option-text').innerText;
        text.innerHTML = selectedOptionFilter;
        btnOptionsFilter.classList.remove('show');
    })
})


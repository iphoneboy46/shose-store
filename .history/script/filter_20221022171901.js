var btnSelectFilter = document.querySelector('.product__filter--select');
var OptionsFilter = document.querySelectorAll('.product__filter--option');
var btnOptionsFilter = document.querySelector('.product__filter--options');
var btnOptionFilter = document.querySelector('.product__filter--option');
var textFilter = document.querySelector('.Btn-text-filter');
var iconDropdownFilter = document.querySelector('.fa-filter-circle-dollar');
var btnItems = document.querySelectorAll('.ul-items li');

btnSelectFilter.addEventListener('click', function(){
   btnOptionsFilter.classList.toggle('shows')
})


OptionsFilter.forEach(function(option){
    option.addEventListener('click', function(){
        let selectedOptionFilter = option.querySelector('.option-text-filter').innerText;
        textFilter.innerHTML = selectedOptionFilter;
        btnOptionsFilter.classList.add('shows');
    })
})


btnItems.forEach((btnItem)=>{
  var productList = document.querySelector("#product__lists");
    btnItem.onclick = () =>{
        document.querySelector('.ul-items li.active').classList.remove('active');
        btnItem.classList.add('active');
        
    }
})

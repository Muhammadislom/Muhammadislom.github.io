/*tabs*/
const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
const tabItem = document.querySelectorAll('.tabs__item');

tabsBtn.forEach(function(item) {
   item.addEventListener('click', function() {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute('data-tab');
      let currentTab = document.querySelector(tabId);

      if( ! currentBtn.classList.contains('active') ) {
         tabsBtn.forEach(function(item) {
            item.classList.remove('active');
         });
   
         tabItem.forEach(function(item) {
            item.classList.remove('active');
         });
         
         currentBtn.classList.add('active');
         currentTab.classList.add('active');
      };
   });
});
document.querySelector('.tabs__nav-btn').click();

/*sticky-menu*/
window.addEventListener('scroll', function() {
   let headerTop = document.querySelector('.header__top')
   headerTop.classList.toggle('sticky', window.scrollY > 0)
});

/*slider*/
$(document).ready(function(){
   $('.tabs__item').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
   });
 });

/*burger-menu*/
let burgerMenu = document.querySelector('.burger-menu');
let menuNav = document.querySelector('.nav');

burgerMenu.addEventListener('click', ()=> {
   burgerMenu.classList.toggle('open');
   menuNav.classList.toggle('nav-active');
});
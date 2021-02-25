new fullpage('#fullpage', {
   autoScrolling: true
});

/*sticky-menu*/

window.addEventListener('scroll', function() {
   let topMenu = document.querySelector('.nav');
   topMenu.classList.toggle('sticky', window.scrollY > 0);
});

/*sliders*/

$('.wedding__sl').on('init', function(event, slick){
   var dots = $( '.slick-dots li' );
   console.log( 'SRANZAN VEE' );
   dots.each( function( k, v){
     $(this).find( 'button' ).addClass( 'heading'+ k );
   });
   var items = slick.$slides;
   items.each( function( k, v){
       var text = $(this).find( 'h2' ).text();
       $( '.heading' + k ).text(text);
   });
 });

$(document).ready(function() {
   $('.wedding__sl').slick({
      slidesToShow: 1,
      asNavFor: '.wedding__sl-info',
      arrows: false,
      dots: true,
      infinite: false,
      speed: 1200,
      focusOnSelect: true,
   });
});

$(document).ready(function() {
   $('.wedding__sl-info').slick({
      slidesToShow: 1,
      asNavFor: '.wedding__sl',
      fade: true,
      speed: 1200,
      draggable: false,
      infinite: false,
   });
});

$(document).ready(function() {
   $('.socials__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: false,
   });
});

$(document).ready(function() {
   $('.partners__slider').slick({
      slidesToShow: 1,
      infinite: false,
   });
});

$(document).ready(function() {
   $('.biography__slider').slick({
      slidesToShow: 1,
      infinite: false,
   });
});
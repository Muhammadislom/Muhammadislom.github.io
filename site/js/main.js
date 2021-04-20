//slider

$(document).ready(function() {
   $('#owl-1').owlCarousel({
      items: 1,
      autoHeight:true,
      nav: true,
      dots: false,
      responsive: {
         0: {
            nav: false,
            dots: true
         },

         576: {
            nav: false,
            dots: true
         },

         768: {
            nav: true,
            dots: false,
         },

         991: {

         }
      }
   });
});

$(document).ready(function() {
   $('#owl-2').owlCarousel({
      items: 1,
      autoHeight:true,
      nav: false,
      dots: true,
   });
});


//burger

$(document).ready(function() {

   $('.burger-menu').on('click', function() {
      $("body, html").toggleClass("no-scroll")
      $('.burger-menu__btn').toggleClass('burger-active')
      $('.nav-overlay').fadeToggle()
      $('.nav').toggleClass('nav-active')
      // $('.nav-overlay').removeClass('display', 'none')
   });
});

/*scroll menu*/

$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.header-fixed').addClass('scroll');
	}
	else {
		$('.header-fixed').removeClass('scroll');
	}
});
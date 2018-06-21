(function($){

  "use strict";

/*----------------------------------|| Loader ||----------------------------------------------*/

$( window ).load(function() {
  $('#loader').fadeOut(800);
});

/*----------------------------------|| Wow.js Initialization ||----------------------------------------------*/

new WOW().init();

/*----------------------------------|| Flex Slider ||----------------------------------------------*/

$(window).load(function(){
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav:true,
      easing:'easeInCubic',
      slideshowSpeed : 4000,
      animationSpeed : 1200,
      pauseOnAction:true,
      touch : true,
      keyboard : true,
      after: function(slider) {
          $('.flex-active-slide').find('.flex-caption').hide().delay(0).show(0).addClass('animated');
      },
      before: function(slider) {
          $('.flexslider').find('.flex-caption').fadeOut(200).removeClass('animated');
      }

    });
});

/*----------------------------------|| On Scroll Method ||----------------------------------------------*/

$(window).scroll(function() {
    var $scroll_pos = 0;
    $scroll_pos = $(window).scrollTop();
    if($scroll_pos >= 30){
            $('#navigation').addClass('color_navigation');
    }else{
            $('#navigation').removeClass('color_navigation');
    }
});


})(jQuery);



/*
 //////////////////////////////////////////////////////////////////////////////////
 Owl Crousel
 //////////////////////////////////////////////////////////////////////////////////
 */
$(document).ready(function() {

  $("#owl-demo").owlCarousel({

    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    animateOut:"fadeInDown",
    animateIn: "fadeInUp",
    stagePadding:30,
    smartSpeed:450


  });

});
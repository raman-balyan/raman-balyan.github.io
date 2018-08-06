(function($){	
   "use strict";	
 /*----------------------------------|| Loader ||----------------------------------------------*/	
 $( window ).load(function() {	
  $('#loader').fadeOut(800);	
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
	
 

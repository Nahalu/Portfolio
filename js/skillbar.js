 $.fn.is_on_screen = function(){
    var win = $(window);
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
 
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
 
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
};
 
if( $('#charts').length > 0 ) { // if target element exists in DOM
	if( $('#charts').is_on_screen() ) { // if target element is visible on screen after DOM loaded
       
			 $('.html_chart').addClass('html');
			 $('.css_chart').addClass('css');
			 $('.js_chart').addClass('js');
			 $('.php_chart').addClass('php');
			 $('.mysql_chart').addClass('mysql');
			 $('.ps_chart').addClass('ps');
			 $('.corel_chart').addClass('corel');
			 $('.max_chart').addClass('max');
	} else {
			 $('.html_chart').removeClass('html');
			 $('.css_chart').removeClass('css');
			 $('.js_chart').removeClass('js');
			 $('.php_chart').removeClass('php');
			 $('.mysql_chart').removeClass('mysql');
			 $('.ps_chart').removeClass('ps');
			 $('.corel_chart').removeClass('corel');
			 $('.max_chart').removeClass('max');
	}
}
$(window).scroll(function(){ // bind window scroll event
	if( $('#charts').length > 0 ) { // if target element exists in DOM
		if( $('#charts').is_on_screen() ) { // if target element is visible on screen after DOM loaded
		
			 $('.html_chart').addClass('html');
			 $('.css_chart').addClass('css');
			 $('.js_chart').addClass('js');
			 $('.php_chart').addClass('php');
			 $('.mysql_chart').addClass('mysql');
			 $('.ps_chart').addClass('ps');
			 $('.corel_chart').addClass('corel');
			 $('.max_chart').addClass('max');
			 
		} else {
		
			 $('.html_chart').removeClass('html');
			 $('.css_chart').removeClass('css');
			 $('.js_chart').removeClass('js');
			 $('.php_chart').removeClass('php');
			 $('.mysql_chart').removeClass('mysql');
			 $('.ps_chart').removeClass('ps');
			 $('.corel_chart').removeClass('corel');
			 $('.max_chart').removeClass('max');
			  
		}
	}
});
 


 var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
 
 
 
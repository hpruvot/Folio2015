var line = document.querySelectorAll('.line');

setTimeout(function() {
  $('.overlay-bottom-left').addClass('active');
}, 300);

setTimeout(function() {
  $('.overlay-left').addClass('active');
}, 600);

setTimeout(function() {
  $('.overlay-top').addClass('active');
}, 1000);

setTimeout(function() {
  $('.overlay-right').addClass('active');
}, 1800);

setTimeout(function() {
  $('.overlay-bottom-right').addClass('active');
}, 2300);

$(document).ready(function() {
	$(".eye-grid").click(function(){
        $(this).toggleClass("hidden");            
        $(this).html($(this).text() == 'Hide grid' ? 'Show grid' : 'Hide grid');
        $(".mockup-dyskit figcaption img").toggleClass("hidden");
    });
	
})

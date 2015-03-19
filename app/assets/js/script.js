$(document).ready(function() {


  /* Animation rectangle intro */
  var animIntro = function() {
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
    },2300);
  }
  animIntro();


  /* Show / Hide grid */
	$(".eye-grid").click(function(){
        $(this).toggleClass("hidden");            
        $(this).html($(this).text() == 'Hide grid' ? 'Show grid' : 'Hide grid');
        $(".mockup-dyskit figcaption img").toggleClass("hidden");
    });



  var SlideWidth = 250;
  var SlideSpeed = 800;

  function currentMargin() {
    // get current margin of slider
    var currentMargin = $("#slider-groww").css("margin-left");

    // first page load, margin will be auto, we need to change this to 0
    if (currentMargin == "auto") {
        currentMargin = 0;
    }

    // return the current margin to the function as an integer
    return parseInt(currentMargin);
  }

  function SetNavigationDisplay(direction) {
      // get current margin
      var currentMargin = currentMargin();

      // get wrapper width
      var wrapperWidth = $("#slider-groww").width();

      if(direction == "next") {
        NextSlide();
      }
      else {
        PreviousSlide();
      }
  }


  function NextSlide() {
      // get the current margin and subtract the slide width
      var newMargin = currentMargin() - SlideWidth-20;

      // slide the wrapper to the left to show the next panel at the set speed. Then set the nav display on completion of animation.
      $("#slider-groww").animate({ 
        marginLeft: newMargin 
      }, SlideSpeed);
  }


  function PreviousSlide() {
      // get the current margin and subtract the slide width
      var newMargin = currentMargin() + SlideWidth+20;

      // slide the wrapper to the right to show the previous panel at the set speed. Then set the nav display on completion of animation.
      $("#slider-groww").animate({ 
        marginLeft: newMargin 
      }, SlideSpeed);
  } 

  $('#slider-groww .slide').on("click",function(){ 
    
    if($(this).hasClass("next")) {
      NextSlide();
    } else if($(this).hasClass("prev")) { 
      PreviousSlide();
    }


    $('.slide').removeClass("fg bg bgbg prev next");
    $('.slide').addClass("bgbg");
    $(this).removeClass("bgbg").addClass("fg");
    $(this).next().removeClass("bgbg").addClass("bg next");
    $(this).prev().removeClass("bgbg").addClass("bg prev");

    var index = $(this).index();
    $('.bullet').removeClass("active");
    $('.bullet').eq(index).addClass("active");

  })

  /* TWEEN ANIMATIONS */
  var colourPalette = $(".palette figure");
  TweenLite.from(colourPalette, 1.5, {top:"50px"});

})

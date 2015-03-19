$(document).ready(function() {

  function mobilecheck() {
    var check = false;
    (function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  }

  function initMenu() {

    var menu = $('.side-menu'),
      trigger = $('a.side-menu-trigger'),
      // event type (if mobile, use touch events)
      eventtype = mobilecheck() ? 'touchstart' : 'click',
      resetMenu = function() {
        menu.removeClass("side-menu-open");
        menu.addClass("side-menu-close");
        // classie.remove( menu, 'side-menu-open' );
        // classie.add( menu, 'side-menu-close' );
      },
      closeClickFn = function( ev ) {
        resetMenu();
        overlay.removeEventListener( eventtype, closeClickFn );
      };

    var overlay = document.createElement('div');
    overlay.className = 'side-overlay';
    menu.append( overlay );

    trigger.on("click",function(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      
      if( menu.hasClass('side-menu-open') ) {
        resetMenu();
      }
      else {
        menu.removeClass("side-menu-close");
        menu.addClass("side-menu-open");
        // classie.remove( menu, 'side-menu-close' );
        // classie.add( menu, 'side-menu-open' );
        overlay.addEventListener( eventtype, closeClickFn );
      }
    });

  }
  initMenu();

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

  });

  /****************************************************************************** PROFILY.ME SCRIPT **********************************************/

  $('.map .pin').on("click",function(){
    var pin = $(this).attr("id");
    switch(pin) {
      case "pin1":
       var card = {
            area: "Seattle",
            country: "USA",
            numbers: "2",
            singers: [
              {singer: "Florida",genre: "Hip-Hop"},
              {singer: "NeYo",genre: "Rap"}
            ]
        };
        createCard(card);
        $('#card_line').removeClass().addClass("pin1");
        break;
      case "pin2":
        var card = {
            area: "Los Angeles,",
            country: "USA",
            numbers: "4",
            singers: [
              {singer: "Florida",genre: "Hip-Hop"},
              {singer: "NeYo",genre: "Rap"},
              {singer: "Mike Starr",genre: "House"},
              {singer: "Nirvana",genre: "Deep Rock"}
            ]
        };
        createCard(card);
        $('#card_line').removeClass().addClass("pin2");
          break;
      case "pin3":
         var card = {
            area: "Denver",
            country: "USA",
            numbers: "1",
            singers: [
              {singer: "Florida",genre: "Hip-Hop"}
            ]
        };
        createCard(card);
        $('#card_line').removeClass().addClass("pin3");
          break;
      case "pin4":
         var card = {
            area: "Washington, DC,",
            country: "USA",
            numbers: "7",
            singers: [
              {singer: "Florida",genre: "Hip-Hop"},
              {singer: "NeYo",genre: "Rap"},
              {singer: "Mike Starr",genre: "House"},
              {singer: "Nirvana",genre: "Deep Rock"},
              {singer: "Quincy Jones",genre: "Jazz"},
              {singer: "Super Deluxe",genre: "Electro"},
              {singer: "War Babies",genre: "Rock"}
            ]
        };
        createCard(card);
        $('#card_line').removeClass().addClass("pin4");
          break;
      case "pin5":
         var card = {
            area: "Miami",
            country: "USA",
            numbers: "5",
            singers: [
              {singer: "Florida",genre: "Hip-Hop"},
              {singer: "NeYo",genre: "Rap"},
              {singer: "Mike Starr",genre: "House"},
              {singer: "Nirvana",genre: "Deep Rock"},
              {singer: "Quincy Jones",genre: "Jazz"}
            ]
        };
        createCard(card);
        $('#card_line').removeClass().addClass("pin5");
          break; 
    }
  })

  var createCard = function(card) {
    $('.card .number').html(card.numbers);
    $('.card .area').html(card.area);
    $('.card .country').html(card.country);
    $('.singers').empty();
    for(key=0 ; key<card.singers.length ; key++) {
      val = card.singers[key];
      $('.singers').append("<li class='singer'>"+val.singer+"<span class='genre'>"+val.genre+"</span></li>")
    }
  }

   var card = {
      area: "Washington, DC,",
      country: "USA",
      numbers: "7",
      singers: [
        {singer: "Florida",genre: "Hip-Hop"},
        {singer: "NeYo",genre: "Rap"},
        {singer: "Mike Starr",genre: "House"},
        {singer: "Nirvana",genre: "Deep Rock"},
        {singer: "Quincy Jones",genre: "Jazz"},
        {singer: "Super Deluxe",genre: "Electro"},
        {singer: "War Babies",genre: "Rock"}
      ]
  };
  createCard(card);
  $('#card_line').removeClass().addClass("pin4");

  /* TWEEN ANIMATIONS */
  // var colourPalette = $(".palette figure");
  // TweenLite.from(colourPalette, 1.5, {top:"50px"});

})

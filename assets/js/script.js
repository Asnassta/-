  function tabs(n)
{
  $('.tabs-nav a').removeClass('active');
  $('.tabs-nav a.t'+n).addClass('active');
  $('.tabs-block').fadeOut(0);
  $('.tabs-block.tab_'+n).fadeIn(222);
};

$(document).ready(function() {
  /*======Header__menu=============*/
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header__menu").toggleClass('active');
  });
  /*==========/header__menu=========*/

  /*======Header__dropdown=============*/
  $(".header__link_drop").hover( function(event) {
    event.preventDefault();
    if ($(window).width() > 1170){
      $(this).toggleClass("dropdown");
      $(this).find(".header__dropdown").fadeToggle(222);   
    }
  });
  $(".header__link_drop").on("click", function(event) {
    event.preventDefault();
    if ($(window).width() <= 1170){
      $(this).toggleClass("dropdown");
      $(this).find(".header__dropdown").slideToggle();   
      $(".header__link_drop").not(this).find(".header__dropdown").slideUp();   
      $(".header__link_drop").not(this).removeClass('dropdown');   
    }
  });
  /*==========/header__dropdown=========*/

  /*===============Popup=================*/
    $(".open-popup").on("click", function (event) {
        name_pop = $(this).attr('data-popup');
        event.preventDefault();
        $(".popup."+name_pop).fadeIn(111);
        $(".popup."+name_pop+" .popup__inner").fadeIn(111);
        $('body').addClass("hidden");
    });
    $(".popup__close,  .closex").on("click", function (event) {
        event.preventDefault();
        $(".popup").fadeOut('111');
        $(".popup__inner").fadeOut(111);
        $('body').removeClass("hidden");
    });
  /*==============/popup=================*/

  /*===========Fixed-header======*/
  let header = $(".header");
  let headerH = $(".header").innerHeight();
  let scrollOffset = $(window).scrollTop();

  checkScroll(scrollOffset);

  $(window).on("scroll", function() {
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
  })

  function checkScroll(scrollOffset) {
    if( scrollOffset >= headerH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
/*===========/fixed-header======*/

  /*============Sliders============*/
  $('.clients__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.slider-arrow_prev'),
    nextArrow: $('.slider-arrow_next'),
    responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 547,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 415,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
  /*============/sliders============*/
});

/*=========Tabs-navScroll=========*/
  window.onload = function () {
          var scr = $(".tabs-nav");
          scr.mousedown(function () {
              var startX = this.scrollLeft + event.pageX;
              var startY = this.scrollTop + event.pageY;

              scr.mousemove(function () {

                  this.scrollLeft = startX - event.pageX;

                  this.scrollTop = startY - event.pageY;

                  return false;

              });

          });

          $(window).mouseup(function () {
              scr.off("mousemove");
          });
      }
  /*=========/tabs-navScroll=========*/
 
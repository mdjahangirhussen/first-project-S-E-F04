$(document).ready(function() {
    "use strict";
    //	/*==============================================
    //	    * Author        : ""
    //	    * Template Name : Artistica | HTML Template
    //	    * Version       : 1.0
    //	================================================= */
    //
    //	/*=========== TABLE OF CONTENTS ===========
    //
    //		0.1 sticky Menu js
    //      0.2 cls_btn js
     //     0.3 no_scroll js
     //     0.4 dropdown menu js
     //     0.5 wow js
     //     0.6 pricing table js 
     //     0.7 news-carousel js
     //     0.8 scrolltop js
    //      0.9 Get the current year

     //		0.1 sticky Menu js
    $(window).scroll(function () {
      var sticky = $('.sticky'),
          scroll = $(window).scrollTop();
    
      if (scroll >= 50) {
          sticky.addClass('fixed') 
      }
      else {
          sticky.removeClass('fixed');
      } 
    });
  //    0.2 cls_btn js
  $(".cls_btn").click(function(){
    $(".navbar-collapse").removeClass("show")
  });
//    0.3 no_scroll js
  $('.navbar-toggler').click(function(){
      $('body').addClass('no_scroll')
      $('.main_bg_content').addClass('bg_overlay')
  });
 $('.cls_btn').click(function () {
     $('body').removeClass('no_scroll')
     $('.main_bg_content').removeClass('bg_overlay')
 });
//    0.4 dropdown menu js
 $('.dropdown').on('show.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
});

$('.dropdown').on('hide.bs.dropdown', function (e) {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
});
//    0.5 wow js
new WOW().init();

// -------- 0.6 pricing table js --------
$("#js-contcheckbox").change(function() {
    if(this.checked) {
      $('.montlypricing').css('display', 'none');
  $('.yearlypricing').css('display', 'flex');
      $('.afterinput').addClass('success');
      $('.beforeinput').removeClass('success');
    } else {
      $('.montlypricing').css('display', 'flex');
      $('.yearlypricing').css('display', 'none');
      $('.afterinput').removeClass('success');
      $('.beforeinput').addClass('success');
}
});

});
    // -------- 0.7 news-carousel js --------
    $('.testimonial').owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayHoverPause: true,
      navText: ['<div class="prev"><i class="fas fa-arrow-left"></i></div>',
                '<div class="next"><i class="fas fa-arrow-right"></i></i></div>'],
      responsive: {
          0: {
              items: 1,
              autoWidth: false
          },
          380: {
              items: 1,
          },
          540: {
              items: 1,
          },
          740: {
              items: 1,
              autoWidth: false
          },
          1000: {
              items: 1,
              
              
          }
      }
  });

  //-------- 0.8 scrolltop js --------
$(window).scroll(function () {
    if ($(this).scrollTop() > 120) {
        $('.scrolltop').fadeIn();
    } else {
        $('.scrolltop').fadeOut();
    }
});

$('.scrolltop').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
    return false;
});

  //-------- 0.9 Get the current year --------

  document.getElementById("year").textContent = new Date().getFullYear();
$(document).ready(function() {
  // (1) aos
  AOS.init({
    easing: 'ease-out-quart',
    duration: 900
  });

  // (2) goTop scroll animation
  $('.icon__goTop').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  // (3) smooth scroll
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  $(window).scroll(function(event) {
    // (3) goTop, navbar
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    if (scroll >= 80) {
      $('.icon__goTop').fadeIn();
      $('.navbar').addClass('scrolled-nav');
      $('.navbar-collapse .btn').removeClass('btn-outline-primary');
      $('.navbar-collapse .btn').addClass('btn-primary');
    } else {
      $('.icon__goTop').fadeOut();
      $('.navbar').removeClass('scrolled-nav');
      $('.navbar-collapse .btn').removeClass('btn-primary');
      $('.navbar-collapse .btn').addClass('btn-outline-primary');
    };
  });
  $(window).scroll();
});
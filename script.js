/* Scroll on buttons */
  $('.js-Scroll').click(function() {
    $('html, body').animate({scrollTop: $('.js-Scroll-End').offset().top}, 1000);
  });

  $('.js--nav--icon').click(function() {
    var nav = $('.js--main--nav');
    nav.slideToggle(200)
  });

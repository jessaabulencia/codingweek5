$(function() {

  $( ".sp_menu" ).on( "click", function() {
    //active
    $(".sp_menu, .nav_links").toggleClass('active');
    if ($(".nav_links").hasClass("active")) {
      $("body").css('overflow','hidden');
      $(".wrap").css({
        'background': 'hsl(233, 8%, 79%)',
        'opacity': '0.9'
      });
    }
    else {
      $("body").css('overflow','scroll');
      $(".wrap").css({
        'background': 'none',
        'opacity': '1'
      })
    }
  });
  })
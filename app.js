var main = function() {
  /* Push the body and the nav over by 430px over */
  $('.icon-menu').click(function() {
    $('.menu1').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "430px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu1').animate({
      left: "-430px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });
};


$(document).ready(main);
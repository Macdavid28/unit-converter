$(document).ready(function () {
  $(".menu-icon").click(function () {
    $(".nav-menu").toggleClass("show");
  });

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".nav-menu").removeClass("show");
    }
  });
});

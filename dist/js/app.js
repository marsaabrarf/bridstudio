$(document).scroll(function () {
  var $nav = $(".appBar");
  $nav.toggleClass("scrolled", $(this).scrollTop() > $(window).height());
});

$(".hamburger").click(function () {
  $(".ul-container").toggleClass("ul-container-active");
  $(this).toggleClass("close");
});

$(".nav-link").click(function () {
  $(".ul-container").toggleClass("ul-container-active");
  $(".hamburger").toggleClass("close");
});
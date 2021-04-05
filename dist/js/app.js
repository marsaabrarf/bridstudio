$(document).scroll(function () {
  var $nav = $(".appBar");
  $nav.toggleClass("scrolled", $(this).scrollTop() > $(window).height());
});
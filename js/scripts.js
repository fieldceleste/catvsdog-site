$(document).ready(function() {
  $(".clickable").click(function() {
  $("#initially-showing").toggle();
  $("#initially-hidden").toggle();
});

$("button#dog").click(function() {
    $("ul#user").prepend("<li>Hello Cat</li>");
    $("ul#webpage").prepend("<li>Meow Meow!</li>");
});

$("button#cat").click(function() {
    $("ul#user").prepend("<li>Hello Dog</li>");
    $("ul#webpage").prepend("<li>Woof Woof!</li>");
  });
});

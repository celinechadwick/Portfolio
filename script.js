$(document).ready(function(){

  console.log("javascript loaded");


  $("h4").fadeIn(2000);
  // $(".profile-img").fadeIn(2000);
  $("h1").fadeIn(3000);
  $(".button").fadeIn(3000)

//button functionality
$("#linkedButton").click(function() {
  window.open('https://www.linkedin.com/in/celinechadwick/');
});
$("#mailTo").click(function() {
  window.location='mailto:cvc1230@gmail.com';
});
$("#github").click(function() {
  window.open('https://github.com/celinechadwick');
});

//portfolio button functionality
$("#photosite").click(function() {
  window.open('http://celinechadwickphotography.com');
});

$("#tvflix").click(function() {
  window.open('https://tvflix-front.herokuapp.com/shows');
});

$("#artbook").click(function() {
  window.open('https://artbook-front.herokuapp.com/');
});



$(".button").click(function() {
    $('html,body').animate({
        scrollTop: $(".footer-section").offset().top},
        'slow');
});




});

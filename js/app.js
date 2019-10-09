$(document).foundation()

var slideIndex = 0;
showSlides();

$('.ul a').click(function(event){
  
  // prevent defalt click behavior
  // don't jump to content
  event.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  // set speed to 700ms
  $('html,body').animate({
    scrollTop: top
    },700);

});
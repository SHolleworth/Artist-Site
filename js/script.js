$(document).ready(function() {


  $(".icon").click(function() {
    $("nav").children("a").css("display" , "block");
    $("nav").children("div").css("display" , "block");
  });

  //Enlarge gallery images on click
  $(".gallery").click(function() {
    //If the elements are small grow them
    if($(this).height() === 300 && $(this).children("img").css('opacity') == .50)
    {
      $(this).animate(
        {
          height: '500px',
          width: '500px'
        });
      $(this).children("img").animate(
        {
          height: '500px',
          width: '500px'
        });
    }
    //If the elements are large shrink them
    else
    {
      $(this).animate(
        {
          height: '300px',
          width: '300px'
        });
      $(this).children("img").animate(
        {
          height: '300px',
          width: '300px'
        });
    }
  });
  //Show image info on mouse over
  $(".gallery").mouseenter(function() {
    $(this).children("img").animate({opacity : ".50"}, {speed: 'fast'});
    $(this).children("p").animate({opacity: '1'}, {speed: 'fast'});
  });
  //Remove info on mouse exit
  $(".gallery").mouseleave(function() {
    $(this).children("img").animate({opacity : "1"}, {speed: 'fast'});
    $(this).children("p").animate({opacity: '0'}, {speed: 'fast'});
  });



  //Slide out lines under big bigLinks
  var leftLinkWidth = document.getElementById('leftColumn').clientWidth;

  $("#leftColumn").mouseenter(function() {
    $(this).children(".link-line-left-2").animate(
      {
      width : '0'
      });
  });
  $("#leftColumn").mouseleave(function() {
    $(this).children(".link-line-left-2").animate(
      {
      width : leftLinkWidth
      });
  });

  rightLinkWidth = document.getElementById('rightColumn').clientWidth;

  $("#rightColumn").mouseenter(function() {
    $(this).children(".link-line-right").animate(
      {
      width : rightLinkWidth
      });
  });
  $("#rightColumn").mouseleave(function() {
    $(this).children(".link-line-right").animate(
      {
      width : "0"
      });
  });

});

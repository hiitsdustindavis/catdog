
$(document).ready(function() {
  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Bark Bark!</li>");
    $("ul#cat").prepend("<li>Pffffft!</li>");

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
      });
    });

  $("button#food").click(function() {
    $("ul#dog").prepend("<li>YESSS!!!</li>");
    $("ul#cat").prepend("<li>sure</li>");
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
      });
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#image").click(function() {
    $("img.catpic").after("<img src='img/catpic.jpg'/> </br>");
    $(".hidecatpic").children("img").first().click(function() {
      $(this).remove();
    });
  });


});

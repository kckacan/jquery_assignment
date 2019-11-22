$(document).ready(function(){
  var imgs = $("img");
  var msg = "Hover over an image below."
  console.log(imgs.length)
  $.each( imgs, function( index, value ){
      $(imgs[index]).mouseenter(function(){
        $("#image").html($(imgs[index]).attr("alt"));
        $('#image').css("background-image", "url("+$(imgs[index]).attr("src")+")");
    })
      $(imgs[index]).focus(function(){
        $(imgs[index]).mouseenter(function(){
          $("#image").html($(imgs[index]).attr("alt"));
          $('#image').css("background-image", "url("+$(imgs[index]).attr("src")+")");
    })
  })
      $(imgs[index]).mouseleave(function(){
        $('#image').css("background-image", "url('')");
        $('#image').html(msg)
      })
      $(imgs[index]).blur(function(){
        $('#image').css("background-image", "url('')");
        $('#image').html(msg)
      })


  })
})

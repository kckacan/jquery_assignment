$(document).ready(function(){
  $("#ch3form").on('submit', function(){
    var rv=false
    $("[name='fruit']").each(function(){
      if ((this.checked)==true){
              $("[name='standing']").each(function(){
                if ((this.checked)==true){
                  return rv=true;
                }
      })
    }
  })
    if(rv==false){
      alert("You must select a fruit and standing");
      return rv
    }
    else{
      return rv;
    }
  })
})

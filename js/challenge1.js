
$(document).ready(function(){
   $("input").change(function(){
     if (this.checked){
       $("#emailField").css("display","block");
     }
     else {
       $("#emailField").css("display","none");
     }
   })
 })

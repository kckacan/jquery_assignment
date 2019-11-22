$(document).ready(function(){
	  $("input").change(function(){
			if (this.checked){
				$("#home").val($("#billing").val());
				$("#home").disabled = true;
			}
			else{
				$("#home").val("");
				$("#home").disabled = false;
			}
		})
})

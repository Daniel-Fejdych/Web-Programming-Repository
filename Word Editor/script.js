$(function() {
	$(document).ready(function(){ 
		$("#sBut").click(function(){
			/* save content to local storage */
			if(localStorage){
				localStorage.content = $("#tArea").val()
			}
			}); 
		$("#lBut").click(function(){
			/* load content from local storage */
			if(localStorage && localStorage.content){
				$("#tArea").val(localStorage.content)
			}
			});
		$("#nBut").click(function(){
			/* clear tArea */
			console.log($("#tArea").val());
			$("#tArea").val("");
			}); 
		}); 
});
$(function() {
	$(document).ready(function(){ 
		$("button").click(function(){
			console.log("Hello");
			$("#divContent").load("https://api.github.com/repositories/2126244/commits?per_page=1"); 
			}); 
		}); 
});
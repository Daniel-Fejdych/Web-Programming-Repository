$(function() {
$( "button" ).on( "mouseover", function() {
	$( this ).css( "color", "red" );
});

  $("#bn")[0].addEventListener(
    "click",
    (e) => {
      $("#bn").hide();
    },
    false,
  );
  
  $("#bn2")[0].addEventListener(
    "click",
    (e) => {
		$("#bn2").css("width", "+=200");
    },
    false,
  );
});
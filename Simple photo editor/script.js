var curColor;


function getColor() {
var redVal = document.getElementById("redB").value;
var greenVal = document.getElementById("greenB").value;
var blueVal = document.getElementById("blueB").value;
return "rgb(" + redVal + ", " + greenVal + ", " + blueVal  + ")";
}

function setColor() {
	curColor = getColor();
}
//document.appendChild();
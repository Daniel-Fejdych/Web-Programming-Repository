var mDown = false;

function mouseDown(){
	mDown = true;
}
function mouseUp(){
	mDown = false;
}




function getColor() {
var redVal = document.getElementById("redB").value;
var greenVal = document.getElementById("greenB").value;
var blueVal = document.getElementById("blueB").value;
return "rgb(" + redVal + ", " + greenVal + ", " + blueVal  + ")";
}

function setColor() {
	document.getElementById("colB").style.color = getColor();
}
function color(eID){
	if(mDown){
	document.getElementById(eID).style.backgroundColor = getColor();
	}
}


function createTable(l,h) {
	let tab = "";
	for (let i = 0; i < l; i++) {
		tab += "<tr>";
		for (let j = 0; j < h; j++) {
			tab += "<div class = \"square\" onmouseover = \"color('t" + i + j + "')\" id = \"t" + i + j + "\"></div>";
		}
	}
	return tab;
}





document.getElementById("tabHere").innerHTML = createTable(50, 50);

//document.appendChild();
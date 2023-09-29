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
function color(eID){
	document.getElementById(eID).style.backgroundColor = getColor();
}


function createTable() {
	let tab = "<table>";
	console.log(tab);
	for (let i = 0; i < 100; i++) {
		tab += "<tr>";
		for (let j = 0; j < 100; j++) {
			tab += "<td onclick = \"color('t" + i + j + "')\" id = \"t" + i + j + "\">&nbsp;</td>";
		}
		tab += "</tr>";
	}
	tab += "</table>";
	console.log(tab);
	return tab;
}





document.getElementById("tabHere").innerHTML += createTable();

//document.appendChild();
var mDown = false;

function mouseDown(){
	mDown = true;
}
function mouseUp(){
	mDown = false;
}

function getRedInput(){
	return document.getElementById("redB").value;
}
function setRedInput(newVal){
	document.getElementById("redB").value = parseInt(newVal);
}

function getRedSlider(){
	return document.getElementById("redS").value;
}
function setRedSlider(newVal){
	document.getElementById("redS").value = parseInt(newVal);
}

function getGreenInput(){
	return document.getElementById("greenB").value;
}
function setGreenInput(newVal){
	document.getElementById("greenB").value = parseInt(newVal);
}

function getGreenSlider(){
	return document.getElementById("greenS").value;
}
function setGreenSlider(newVal){
	document.getElementById("greenS").value = parseInt(newVal);
}

function getBlueInput(){
	return document.getElementById("blueB").value;
}
function setBlueInput(newVal){
	document.getElementById("blueB").value = parseInt(newVal);
}

function getBlueSlider(){
	return document.getElementById("blueS").value;
}
function setBlueSlider(newVal){
	document.getElementById("blueS").value = parseInt(newVal);
}



function getColor() {
var redVal = getRedInput();
var greenVal = getGreenInput();
var blueVal = getBlueInput();
return "rgb(" + redVal + ", " + greenVal + ", " + blueVal  + ")";
}

function setColor() {
	document.getElementById("colB").style.color = getColor();
}
function setSlider() {
	setColor();
	setRedSlider(getRedInput());
	setGreenSlider(getGreenInput());
	setBlueSlider(getBlueInput());
	
}
function setInput() {
	setColor();
	setRedInput(getRedSlider());
	setGreenInput(getGreenSlider());
	setBlueInput(getBlueSlider());
	
}
function color(eID){
	if(mDown){
	document.getElementById(eID).style.backgroundColor = getColor();
	}
}


function createCanvas(l, h) {
	let canvas = "";
	for (let i = 0; i < l; i++) {
		for (let j = 0; j < h; j++) {
			canvas += "<div class = \"square\" onmouseover = \"color('t" + i + "," + j + "')\" id = \"t" + i + "," + j + "\"></div>";
		}
	}
	return canvas;
}



function resizeCanvas() {
	let length = document.getElementById("lIn").value;
	let height = document.getElementById("hIn").value;
	document.getElementById("tabHere").style.gridTemplateColumns = "repeat(" + length + ", 1fr);";
	document.getElementById("tabHere").style.gridTemplateRows = "repeat(" + height + ", 1fr);";
	document.getElementById("tabHere").innerHTML = createCanvas(length, height);
}

resizeCanvas();

//document.appendChild();
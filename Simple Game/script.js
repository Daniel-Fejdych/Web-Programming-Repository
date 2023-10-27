var mDown = false;

function mouseDown(){
	mDown = true;
}
function mouseUp(){
	mDown = false;
}

/*
The movement of object class will be a class that handles
all the movement of the object.
It will be responsible for 
*/
class movOfObj(xPos, yPos, xChange, yChange){
	constructor(){
		this.xPos = xPos;
		this.yPos = yPos;
		this.xChange = xChange;
		this.yChange = yChange;
	}
	//x, y Should not be setable from outside
	xPosGet(){
		return xPos;
	}
	yPosGet(){
		return yPos;
	}
	
	//xChange, yChange functions should be changed instead of direct position manipulation
	xChangeSet(newXChange){
		this.xChange = newXChange;
	}
	yChangeSet(newYChange){
		this.yChange = newYChange;
	}
	move(){
		xPos = xChange(xPos);
		yPos = yChange(yPos);
	}
	
}

class gameObj {
	constructor(movOfObj){
		this.movOfObj = movOfObj;
	}
}

class Player extends gameObj{
	constructor(movOfObj){
		
	}
}

$('#add-div-button').on('click', function () { 
	const $newDiv = $('<div>'); 
	$newDiv.html('<p>Div tag created!</p>'); 
	$('#container').append($newDiv); 

//document.appendChild();
$(function()->{
	var button1 = $("<button id='add-div-button'>Click Me</button> ");
	$("body").append(button1);
	
	
	
});
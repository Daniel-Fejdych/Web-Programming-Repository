function showMessage(message) {
	alert(message);
}
setTimeout(() => {
if (window.name == "homeHead"){
	var element = document.getElementById("home");
    element.classList.add("active");
}
if (window.name == "contactHead"){
	var element = document.getElementById("contact");
    element.classList.add("active");
}
if (window.name == "projectHead"){
	var element = document.getElementById("projects");
    element.classList.add("active");
}
if (window.name == "aboutHead"){
	var element = document.getElementById("about");
    element.classList.add("active");
}
var element = document.getElementsByClassName('header')[0];
element.innerHTML += ' <br><br><br><br><br><br><br><br><br><br><br><br><br>';
}, 50);

var redB = document.getElementById("redB").text;
var blueB = document.getElementById("blueB").text;
var greenB = document.getElementById("greenB").text;










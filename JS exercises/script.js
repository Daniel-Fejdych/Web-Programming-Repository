$(function() {
	const d = new Date();
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	$("#timer").html("Today is : " + days[d.getDay()] + ".\n Current time is : " + d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds() + ".");
});
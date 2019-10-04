var userFirst = prompt("What is your first name?");
var userLast = prompt("What is your last name?");
var userAge = prompt("What is your age?");
var fullName = userFirst + " " + userLast;
var totalDays = userAge * 365;

console.log("Your full name is " + fullName);
console.log("Your are " + userAge + " years old");

alert("You are roughly " + totalDays + " days old");
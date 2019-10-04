// var answer = prompt("Are We There Yet?");

// while (answer !== "yes" && answer != "yeah" && answer != "yep") {
//     var answer = prompt("Are We There Yet?");
// }

// alert("YAY, WE MADE IT!!!");

var answer = prompt("Are We There Yet?");

while (answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
    var answer = prompt("Are We There Yet?");
}

alert("YAY, WE MADE IT!!!");
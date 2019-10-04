var button = document.querySelector("button");
var body = document.querySelector("body");

// button.addEventListener("click", colorchange);

// function colorchange() {
//     if (body.style.background != "purple") {
//         body.style.background = "purple";
//     } else {
//         body.style.background = "white";
//     }
// }

//video solution

button.addEventListener("click", function() {
    if (isPurple) {
        document.body.style.background = "white";
        isPurple = false;
    } else {
        document.body.style.background = "purple";
        isPurple = true;
    }
});


//option 2 solution

button.addEventListener("click", function() {
    document.body.classList.toggle("purple");
});
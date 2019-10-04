var colors = [
    "rbg(255, 0, 0)",
    "rbg(255, 255, 0)",
    "rbg(0, 255, 0)",
    "rbg(0, 255, 255)",
    "rbg(0, 0, 255)",
    "rbg(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");

for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
}
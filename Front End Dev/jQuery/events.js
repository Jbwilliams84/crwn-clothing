//Add Click function to elements

$("button").click(function() {
    var text = $(this).text();
    alert("You Clicked " + text);
});

$("button").click(function() {
    $(this).css("background-color", "orange");
});


//key events keydown, keyup, keypress

$('input[type = "text"]').keypress(function() {
    console.log("You pressed a key!");
})

$('input[type = "text"]').keypress(function(event) {
    if (event.which === 13) {
        alert("You hit enter");
    }
    console.log("You pressed a key!");
})

//On() method - similar to addEventListener

$("h1").on('click', function() {
    $(this).css("color", "red");
    alert("You clicked on my header... why would you do that?!");
})

// $("button").on("mouseenter", function() {
//     $(this).css({
//         backgroundColor: "lime",
//         color: "purple"
//     });
// })

// $("button").on("mouseout", function() {
//     $(this).css({
//         backgroundColor: "purple",
//         color: "lime"
//     });
// })


//fadeOut effect
// $("button").on("click", function() {
//     $('div').fadeOut(1000, function() {
//         alert("Goodbye cruel world");
//     });
// });

//fadeIn effect
// $("button").on("click", function() {
//     $("div").fadeIn(1000, function() {
//         alert("Good Morning");
//     })
// })

//fadeToggle

// $("button").on("click", function() {
//     $("div").fadeToggle(1000)
// });

//slide up/down/toggle

$("button").on("click", function() {
    $("div").slideToggle(1000, function() {
        $(this).remove();
    })
});
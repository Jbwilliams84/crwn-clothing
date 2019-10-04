//Check off specific todos by clicking

// $("li").click(function() {
//     if ($(this).css("color") === "rgb(128, 128, 128)") {
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     } else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// });

$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//Click on X to delete To-DO

//When adding the on(click) need to indicate the permanent parent
// and not the new elements

$("ul").on("click", "span", function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        //clear out the input
        $(this).val("");
        //create a new Li and add to Ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }
})

$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle()
})
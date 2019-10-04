var movies = [{
        title: "In Bruges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Les Miserable",
        hasWatched: false,
        rating: 2
    }
]


movies.forEach(function(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
})

//To clean up code better that creates the function into a single function and run through

function buildString(movie) {
    var result = "You have ";
    if (movie.hasWatched) {
        result += "watched ";
    } else {
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    return result;
}

movies.forEach(function(movie) {
    console.log(buildString(movie));
})
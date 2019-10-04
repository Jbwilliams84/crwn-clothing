window.setTimeout(function() {
    // put all of your JS code from the lecture here

    var todos = [];

    var input = prompt("What Would You Like To Do?");

    while (input != "quit") {
        //handle input
        if (input === "list") {
            listTodos();
            console.log(todos);
        } else if (input === "new") {
            addTodos();
        } else if (input === "delete") {
            deleteTodos();
        }
        //ask again for new input
        var input = prompt("What Would You Like To Do?");
    }
    console.log("OK, YOU QUIT THE APP!");

    function listTodos() {
        todos.forEach(function(todo, index) {
            console.log("********");
            console.log(index + ": " + todo);
            console.log("********");
        });
    }

    function addTodos() {
        //ask for new todo
        var newToDo = prompt("Enter New ToDo");
        //add to todos array
        todos.push(newToDo);
        console.log("Added Todo");
    }

    function deleteTodos() {
        //ask for index of todo to be deleted
        var index = prompt("Enter index of todo to delete");
        //delete that todo
        //splice() - todos.splice(the number entered in prompt, number of items to delete after that number)
        todos.splice(index, 1)
        console.log("Deleted Todo");
    }

}, 500);
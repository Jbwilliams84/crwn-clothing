//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if (Number(guess) === secretNumber) {
    alert("You got it right!")
} else if (Number(guess) < secretNumber) {
    alert("Your guess is too low! Guess Again!")
} else {
    alert("Your guess is too high! Guess Again!")
}
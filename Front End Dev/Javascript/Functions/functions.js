console.log("Take a single numeric argument and returns true if even and false otherwise")

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log("Write a function factorial() which takes a single numeric argument and returns the factorial of that number")

function factorial(x) {
    if (x === 0) {
        return 1;
    } else {
        return (x * factorial(x - 1));
    }
}

console.log("Write a function kebabToSnake() which takes a single kebab-case string argument and returns the snake_cased version")

function kebabToSnake(str) {
    var newStr = str.replace(/-/g, "_");
    return newStr;
}
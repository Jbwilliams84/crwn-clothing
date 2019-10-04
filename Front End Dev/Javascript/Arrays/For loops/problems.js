// printReverse ([1,2,3,4])

// var num = [1, 2, 3, 4];

// var reversed = num.reverse();
// console.log("reversed: ", reversed);

// VIDEO SOLUTION

function printReverse(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}
printReverse([1, 2, 3, 4]);

// isUniform() which takes array as argument and returns true only if all are the same

// *** isUniform() ***

function isUniform(arr) {
    var first = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] !== first) {
            return false;
        }
    }
    return true;
}


// *** sumArray() ***

//write function sumArray() that accepts an array of numbers and returns the sum of numbers in array

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(element) {
        total += element;
    });
    return total;
}

//*** max() ***/

//write a function max() that accepts array of numbers and returns the maximum number in the array

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
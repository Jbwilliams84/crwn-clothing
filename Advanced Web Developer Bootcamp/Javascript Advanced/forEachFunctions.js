var arr = [1, 2, 3, 4, 5, 6];

function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

// findIndex Exampe 

var arr = [5, 11, 13, 8, 6, 7];
findIndex(arr, function(num, index, array) {
    return num % 2 === 0;
});
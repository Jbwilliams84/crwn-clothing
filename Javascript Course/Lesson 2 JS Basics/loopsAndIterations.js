// Loops and Iterations

for (var i = 0; i < 10; i++) {
	console.log(i);
}


//continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];


//iteration continues and doesn't print anything that is not a 'string'
for (var i = 0; i < john.length; i++) {
	if(typeof john[i] !== 'string') continue;
	console.log(john[i]);
}


//iteration stops once it gets to something that is not a string and stops.
for (var i = 0; i < john.length; i++) {
	if(typeof john[i] !== 'string') break;
	console.log(john[i]);
}

// Looping backwards

for (var i = john.length - 1; i >= 0; i--) {
	console.log(john[i]);
}
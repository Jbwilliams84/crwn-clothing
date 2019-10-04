// Loops and Iterations

for (var i = 0; i < 10; i++) {
	console.log(i);
}


//continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
	if(typeof john[i] !== 'string') continue;
	console.log(john[i]);
}
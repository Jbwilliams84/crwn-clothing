// // Function constructor

// // var john = {
// //     name: 'John',
// //     yearOfBirth: 1990,
// //     job: 'teacher'
// // };

// var Person = function(name, yearOfBirth, job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function() {
//     console.log(2019 - this.yearOfBirth);
// }

// Person.prototype.lastName = 'Smith';



// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1948, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);


// // Object.create

// var personProto = {
//     calculateAge: function() {
//         console.log(2019 - this.yearOfBirth);
//     }
// };

// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';

// var jane = Object.create(personProto, {
//     name: { value: 'Jane' },
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer' }
// });

// Primitives vs Objects


// //Primitives
// var a = 23;
// var b = a;

// a = 46;
// console.log(a, b); //a = 46, b = 23


// //Objects

// var obj1 = {
//     name: 'John',
//     age: 26
// };

// var obj2 = obj1;

// obj1.age = 30;

// console.log(obj1.age, obj2.age); //obj1.age = 30 and obj2.age = 30;

// // Functions

// var age = 26;
// var obj = {
//     name: 'Brian',
//     city: 'Nashville'
// }

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco';
// }

// change(age, obj);
// console.log(age);
// console.log(obj.city); // age = 26, city = 'San Francisco'


// Lecture: Passings Functions as arguments

// var years = [1990, 1965, 1937, 2005, 1998];

// function arrayCalc(arr, fn) {
//     var arrRes = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(element) {
//     return 2016 - element;
// }


// function isFullAge(el) {
//     return el >= 18;
// }

// function maxHeartRate(el) {

//     if (el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el));
//     }
//     return -1;
// }

// var ages = arrayCalc(years, calculateAge);
// var fullAges = arrayCalc(ages, isFullAge);
// var rates = arrayCalc(ages, maxHeartRate);


// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
// console.log(rates);



///////// Lecture: Functions returning functions

// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + ', can you please explain what UX design is?');
//         }
//     } else if (job === 'teacher') {
//         return function(name) {
//             console.log('What subject do you teach, ' + name + '?');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello ' + name + ', what do you do?');
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');

// teacherQuestion('John');
// designerQuestion('Brian');

// interviewQuestion('teacher')('Mark');


/////////////// Lecture: Immediately Invoked Function Expressions: IIFE

// function game() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }
// game();

// (function() {
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// })();

// (function(goodLuck) {
//     var score = Math.random() * 10;
//     console.log(score >= 5 - goodLuck);
// })(5);


//////////Lecture:  Closures

// function retirement(retirementAge) {
//     var a = ' years left until retirement.';
//     return function(yearOfBirth) {
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a);
//     }
// }

// var retirementUS = retirement(66);
// retirementUS(1990);

// retirement(66)(1990);

// //function interviewQuestion(job) {
// //     if (job === 'designer') {
// //         return function(name) {
// //             console.log(name + ', can you please explain what UX design is?');
// //         }
// //     } else if (job === 'teacher') {
// //         return function(name) {
// //             console.log('What subject do you teach, ' + name + '?');
// //         }
// //     } else {
// //         return function(name) {
// //             console.log('Hello ' + name + ', what do you do?');
// //         }
// //     }
// // }

// function interviewQuestion(job) {
//     return function(name) {
//         if (job === 'designer') {
//             console.log(name + ', can you please explain what UX design is?');
//         } else if (job === 'teacher') {
//             console.log('What subject do you teach, ' + name + '?');
//         } else {
//             console.log('Hello ' + name + ', what do you do?')
//         }
//     }
// }

// interviewQuestion('teacher')('John');




/////// Lecture: Bing, Call, and Apply


var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ' Ladies and Gentlemen! I\'m ' +
                this.name + ', I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' +
                this.name + ', I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old.  Have a nice ' +
                timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
}

john.presentation('formal', 'morning');


//Call method allows us to set the 'this' variable in the first argument, to another var, i.e to Emily from John.

john.presentation.call(emily, 'friendly', 'afternoon');

//this does not work b/c the object is not expecting an array
// john.presentation.apply(emily, ['friendly', 'afternoon']);


//Bind allows you to store variables to a function to be recalled later on.
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('evening');
johnFriendly('afternoon');
johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');







var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(element) {
    return 2016 - element;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(fullJapan);
console.log(ages);
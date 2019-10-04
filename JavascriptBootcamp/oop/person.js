// Prototypal Inheritance
// myPerson --> Person.prototype --> Object.prototype --> null

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes = []) {
        super(firstName, lastName, age, likes) //this means its the information from 'Person'
        this.position = position
    }
    getBio() {
        // Brian is a Graphic Designer
        return `${this.fullName} is a ${this.position}.`
    }
    getYearsLeft() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
            super(firstName, lastName, age, likes)
            this.grade = grade

        }
        // getGradeStatus() {
        //     if (this.grade < 70) {
        //         console.log(`${this.firstName} is failing`)
        //     }
        //     console.log(`${this.firstName} is passing!`)
        // }
    updateGrade(addition) {
        this.grade += addition
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}



// const Person = function(firstName, lastName, age, likes = []) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.likes = likes
// }

// Person.prototype.getBio = function() {
//     let bio = `${this.firstName} is ${this.age}.`

//     this.likes.forEach((like) => {
//         bio += ` ${this.firstName} likes ${like}.`
//     })

//     return bio
// }

// Person.prototype.setName = function(fullName) {
//     const names = fullName.split(' ')
//     this.firstName = names[0]
//     this.lastName = names[1]
// }

const me = new Employee('Brian', 'Williams', 10, 'Designer', []);
me.fullName = 'Clancy Turner'
console.log(me.getBio());
// HTTTP Hypertext Transfer Protocol
// Request - what do we want to do
// Response - what was actually done


const puzzleEl = document.querySelector('#puzzle')
const guesses = document.querySelector('#guesses')
let game1


window.addEventListener('keypress', (event) => {
    const guess = String.fromCharCode(event.charCode)
    game1.makeGuess(guess)
    render()

})

const render = () => {
    puzzleEl.innerHTML = ''
    guesses.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span')
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })
}

const startGame = async() => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }).catch((error) => {
//     console.log(`Error: ${error}`)
// })





// // Making an HTTP request-- --Code 200 is a http status(check httpstatuses.com to see more)

// // getCountry("US", (error, country) => {
// //     if (error) {
// //         console.log(`Error: ${error}`)
// //     } else {
// //         console.log(`Country name: ${country.name}`)
// //     }
// // })

// getCountry('US').then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })

// getLocation().then((location) => {
//     console.log(`You are currently located in ${location.city}, ${location.region} in the ${location.country}`)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })


// getCurrentCountry().then((country) => {
//     console.log(country.name)
// }).catch((error) => {
//     console.log(error)
// })

// getLocation().then((data) => {
//     return getCountry(data.country)
// }).then((country) => {
//     console.log(country.name)
// }).catch((err) => {
//     console.log(`Error: ${err}`)
// })
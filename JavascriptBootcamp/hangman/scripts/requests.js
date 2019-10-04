// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {

//     const request = new XMLHttpRequest()

//     request.addEventListener('readystatechange', (event) => {
//         if (event.target.readyState === 4 && event.target.status === 200) {
//             const data = JSON.parse(event.target.responseText)
//             resolve(data.puzzle)
//         } else if (event.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })

const getPuzzle = async(wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data) => {
//         return data.puzzle
//     })
// }


// const getCountry = (countryCode) => new Promise((resolve, reject) => {

//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (event) => {
//         if (event.target.readyState === 4 && event.target.status === 200) {
//             const data = JSON.parse(event.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)

//         } else if (event.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })


const getCountry = async(countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw new Error('Something Went Wrong')
    }
}


// const getCountryOld = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to find country code')
//         }
//     }).then((data) => {
//         return data.find((country) => country.alpha2Code === countryCode)
//     })
// }

const getLocation = async() => {
    const response = await fetch('http://ipinfo.io/json?token=2659e0b6fba990')
    if (response.status === 200) {
        return response.json()
    }
    throw new Error('Unable to fetch the country')
}

const getCurrentCountry = async() => {
    const location = await getLocation()
    return getCountry(location.country)

}


// const getLocationOld = () => {
//     return fetch('http://ipinfo.io/json?token=2659e0b6fba990').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to find location')
//         }
//     })
// }
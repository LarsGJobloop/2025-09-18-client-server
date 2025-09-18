// Log that we are starting
console.log("JavaScript loaded!")

// The addres we want to requst data from
// Open it in your browser
const url = "https://ghibliapi.vercel.app/films/"
// Send requst and await response
const response = await fetch(url)
console.log(response)

// Unpack the response
const data = await response.json()
console.log(data)

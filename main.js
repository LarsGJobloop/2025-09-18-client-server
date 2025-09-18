// Log that we are starting
console.log("JavaScript loaded!")

// The addres we want to requst data from
// Open it in your browser
// const url = "https://ghibliapi.vercel.app/films/"
// We can fetch local files
// const url = "http://127.0.0.1:5500/films.json"
// If the HTML and files are from the same IP
// we can skip the address and just use the path
const url = "/films.json"
// Send requst and await response
const response = await fetch(url)
console.log(response)

// Unpack the response
const data = await response.json()
console.log(data)

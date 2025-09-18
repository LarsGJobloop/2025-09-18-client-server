export function createFilmCard(filmDetails) {
  // Create elements
  const card = document.createElement("li")
  const titleElement = document.createElement("p")
  const imageElement = document.createElement("img")

  titleElement.textContent = filmDetails.title
  imageElement.src = filmDetails.image

  // Hook up/connect them together
  card.append(imageElement)
  card.append(titleElement)
  
  return card
}

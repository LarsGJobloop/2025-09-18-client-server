export function createFilmCard(filmDetails) {
  // Create elements
  const card = document.createElement("li")
  const titleElement = document.createElement("p")
  const imageElement = document.createElement("img")

  titleElement.textContent = filmDetails.title
  imageElement.src = filmDetails.image

  // Hook up/connect them together
  card.append(titleElement)
  card.append(imageElement)

  return card
}

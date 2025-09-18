export function createFilmCard(filmDetails) {
  const card = document.createElement("li")
  card.textContent = filmDetails.title
  return card
}

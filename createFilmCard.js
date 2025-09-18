export function createFilmCard(filmDetails) {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = `
    <li>
      <p>${filmDetails.title}</p>
      <img src="${filmDetails.image}" alt="" />
    </li>
  `

  return wrapper
}

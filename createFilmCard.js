export function createFilmCard(filmDetails) {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = `
    <li>
      <p>${filmDetails.title}</p>
      <img src="${filmDetails.image}" alt="" />

      <footer>
        <p>${filmDetails.director}</p>
        <p>${filmDetails.producer}</p>
        <p>${filmDetails.release_date}</p>
        <p>${filmDetails.running_time}</p>
        <p>${filmDetails.rt_score}</p>
      </footer>
    </li>
  `

  return wrapper
}

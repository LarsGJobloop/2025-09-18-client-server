export function createFilmCard(filmDetails) {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = `
    <li class="film-card">
      <p>${filmDetails.title}</p>
      <img src="${filmDetails.image}" alt="" />

      <footer class="film-card-metadata">
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

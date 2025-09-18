export function createFilmCard(filmDetails) {
  const wrapper = document.createElement("div")
  wrapper.innerHTML = `
    <li class="film-card">
      <img class="film-card-image" src="${filmDetails.image}" alt="" />
      <p>${filmDetails.title}</p>

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

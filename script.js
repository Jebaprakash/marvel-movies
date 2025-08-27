const searchInput = document.getElementById("search");
const yearFilter = document.getElementById("filter-year");
const actorFilter = document.getElementById("filter-actor");
const movies = document.querySelectorAll(".movie");

// 🔍 Filter function
function filterMovies() {
  const searchText = searchInput.value.toLowerCase();
  const selectedYear = yearFilter.value;
  const selectedActor = actorFilter.value;

  movies.forEach(movie => {
    const title = movie.querySelector("h3").innerText.toLowerCase();
    const year = movie.dataset.year;
    const actor = movie.dataset.actor;

    const matchesSearch = title.includes(searchText);
    const matchesYear = selectedYear === "all" || year === selectedYear;
    const matchesActor = selectedActor === "all" || actor === selectedActor;

    if (matchesSearch && matchesYear && matchesActor) {
      movie.style.display = "block";
    } else {
      movie.style.display = "none";
    }
  });
}

// 🎬 Event Listeners
searchInput.addEventListener("input", filterMovies);
yearFilter.addEventListener("change", filterMovies);
actorFilter.addEventListener("change", filterMovies);

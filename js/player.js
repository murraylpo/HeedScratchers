// Random Puzzle Button
function randomPuzzle() {
  let arrayOfPuzzles = [
    "/HeedScratchers/puzzles/hiddenObjects/wally_beach.html",
    "/HeedScratchers/puzzles/hiddenObjects/wally_racetrack.html",
    "/HeedScratchers/puzzles/hiddenObjects/wally_alps.html",
    "/HeedScratchers/puzzles/hiddenObjects/wally_space.html",
    "/HeedScratchers/puzzles/sudoku/sudoku.html"
  ];
  let puzzle = arrayOfPuzzles[Math.floor(Math.random() * arrayOfPuzzles.length)];
  window.location.replace(puzzle);
}

// Player Profile Functions
function populateStorage() {
    let person = document.getElementById("usernamePrompt").value;
    if (person != null) {
        localStorage.setItem("name", person);
        localStorage.setItem("points","0");
        location.reload();
    }
}

function addPoints(amount) {
    let points = Number(localStorage.getItem("points"));
    points += amount
    localStorage.setItem("points", points);
}

function resetPoints() {
    localStorage.setItem("points","0");
}

function removeProfile() {
    localStorage.clear();
}

// Audio Functionality
function play() {
  var audio = document.getElementById("audio");
  audio.volume = 0.1;
  audio.play();
}

// Boostrap code for creating dismissable success alerts
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message} <a href="/HeedScratchers/index.html" class="alert-link">Return home for more puzzles.</a>
    </div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('You solved the puzzle and earned points!', 'success')
  })
}

// Bootstrap code for carousel
const myCarouselElement = document.querySelector('#myCarousel')
const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})
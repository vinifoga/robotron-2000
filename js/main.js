const control = document.querySelectorAll("[data-control]")
const statistic = document.querySelectorAll("[data-statistics]")

const pieces = {
  "arms": {
    "strength": 29,
    "power": 35,
    "energy": -21,
    "speed": -5
  },
  "armor": {
    "strength": 41,
    "power": 20,
    "energy": 0,
    "speed": -20
  },
  "core": {
    "strength": 0,
    "power": 7,
    "energy": 48,
    "speed": -4
  },
  "legs": {
    "strength": 27,
    "power": 21,
    "energy": -32,
    "speed": 43
  },
  "rockets": {
    "strength": 0,
    "power": 20,
    "energy": 0,
    "speed": -2
  }
}

control.forEach( (element) => {
  element.addEventListener("click", (event)  => {
    changeData(event.target.dataset.control, event.target.parentNode);
    updateStatistics(event.target.dataset.piece)
  })
})

function changeData(operation, control){
  let piece = control.querySelector("[data-value]");
  if(operation === "-"){
    piece.value = parseInt(piece.value) -1;
  } else {
    piece.value = parseInt(piece.value) +1;
  }
}

function updateStatistics(piece){
  statistic.forEach( (element) => {
    element.textContent = parseInt(element.textContent) + pieces[piece][element.dataset.statistics]
  })

}
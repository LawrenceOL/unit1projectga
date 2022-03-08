let gameSquares = document.querySelectorAll('.game-square')
let resetButton = document.querySelector('button')

let lavaDisplay = document.querySelector('#lava-display')
let gemDisplay = document.querySelector('#gem-display')

let squareCount = 81
let totalHiddenObjects = 10

//could use seededSquares instead of seededHiddenLava?
let seededHiddenLava = 0
let totalGems = 2
let seededGems = 0

let coordinateArrayOfSquares = []

const idToCoords = {}

generateArray()
addGreenClickAndBoxID()
// seedHidden()

// let seededSquares = document.querySelectorAll('.seeded-square')
// seedGems()

resetButton.addEventListener('click', reset)

//functions

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}

//fix this function?

function seedHidden() {
  while (seededHiddenLava < totalHiddenObjects) {
    gameSquares.forEach((seededSquare) => {
      if (
        seededHiddenLava < totalHiddenObjects &&
        !(seededSquare.style.background = 'red')
      ) {
        if (getRandomIntInclusive(1, 10) === 5) {
          seededSquare.style.background = 'red'

          // !!!!!!!!!!! are there checks for .seeded-square?
          // id.classList.add('seeded-square')
          seededHiddenLava += 1
        }
      }
    })
  }
}

// function seedGems() {
//   while (seededGems < totalGems) {
//     seededSquares.forEach((seededSquare) => {
//       if (
//         seededGems < totalGems &&
//         seededSquare.style.background !== 'lightblue'
//       ) {
//         if (getRandomIntInclusive(1, 10) === 5) {
//           seededSquare.style.background = 'lightblue'
//           seededGems += 1
//           seededSquare.classList.remove('seeded-square')
//           seededSquare.classList.add('seeded-gem')
//         }
//       }
//     })
//   }
//   seededHiddenLava -= seededGems
//   lavaDisplay.innerText = ` lava:${seededHiddenLava}  gems: ${seededGems}`
// }

//generates 9x9 2d array
function generateArray() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      coordinateArrayOfSquares.push([i, j])
    }
  }
}

function addGreenClickAndBoxID() {
  gameSquares.forEach((gameSquare, index) => {
    let id = `box${index}`
    //adds box# tag to square
    gameSquare.setAttribute('id', id)

    //adds square to array of square objects key=square# value= coordinates
    idToCoords[id] = coordinateArrayOfSquares[index]

    //add event listener to turn box green. can be modified to change to flipped
    gameSquare.addEventListener('click', () => {
      gameSquare.style.background = 'green'
      alert(`My coordinates are ${coordinateArrayOfSquares[index]}`)
    })
  })
}

function reset() {
  window.location.reload()
}

// functions that check for things on click

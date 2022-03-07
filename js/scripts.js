gameSquares = document.querySelectorAll('.game-square')
squareCount = 81
totalHidden = 10
seededHidden = 0
totalGems = 0

seedHidden()

gameSquares.forEach((gameSquare) => {
  gameSquare.addEventListener('click', () => {
    gameSquare.style.background = 'green'
  })
})

//functions

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min) //The maximum is inclusive and the minimum is inclusive
}

//do I need break here?
function seedHidden() {
  while (seededHidden < totalHidden) {
    gameSquares.forEach((gameSquare) => {
      if (seededHidden < totalHidden) {
        if (getRandomIntInclusive(1, 10) === 5) {
          gameSquare.style.background = 'red'
          seededHidden += 1
        }
      }
    })
  }
}

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
  if (randomNumber === 1) {
    computerChoice = 'Piedra'
  }
  if (randomNumber === 2) {
    computerChoice = 'Tijera'
  }
  if (randomNumber === 3) {
    computerChoice = 'Papel'
  }
  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'ES UN EMPATE'
  }
  if (computerChoice === 'Piedra' && userChoice === "Papel") {
    result = 'GANASTE'
  }
  if (computerChoice === 'Piedra' && userChoice === "Tijera") {
    result = 'PERDISTE'
  }
  if (computerChoice === 'Papel' && userChoice === "Tijera") {
    result = 'GANASTE'
  }
  if (computerChoice === 'Papel' && userChoice === "Piedra") {
    result = 'PERDISTE'
  }
  if (computerChoice === 'Papel' && userChoice === "Tijera") {
    result = 'GANASTE'
  }
  if (computerChoice === 'Tijera' && userChoice === "Papel") {
    result = 'PERDISTE'
  }
  resultDisplay.innerHTML = result
}
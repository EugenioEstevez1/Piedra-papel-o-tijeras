// const computerChoiceDisplay = document.getElementById('computer-choice')
// const userChoiceDisplay = document.getElementById('user-choice')
// const resultDisplay = document.getElementById('result')
// const possibleChoices = document.querySelectorAll('button')
// let userChoice
// let computerChoice
// let result

// possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
//   userChoice = e.target.id
//   userChoiceDisplay.innerHTML = userChoice
//   generateComputerChoice()
//   getResult()
// }))

// function generateComputerChoice() {
//   const randomNumber = Math.floor(Math.random() * 3) + 1 // or you can use possibleChoices.length
  
//   if (randomNumber === 1) {
//     computerChoice = 'Piedra'
//   }
//   if (randomNumber === 2) {
//     computerChoice = 'Tijera'
//   }
//   if (randomNumber === 3) {
//     computerChoice = 'Papel'
//   }
//   computerChoiceDisplay.innerHTML = computerChoice
// }

// function getResult() {
//   if (computerChoice === userChoice) {
//     result = 'ES UN EMPATE'
//   }
//   if (computerChoice === 'Piedra' && userChoice === "Papel") {
//     result = 'GANASTE'
//   }
//   if (computerChoice === 'Piedra' && userChoice === "Tijera") {
//     result = 'PERDISTE'
//   }
//   if (computerChoice === 'Papel' && userChoice === "Tijera") {
//     result = 'GANASTE'
//   }
//   if (computerChoice === 'Papel' && userChoice === "Piedra") {
//     result = 'PERDISTE'
//   }
//   if (computerChoice === 'Papel' && userChoice === "Tijera") {
//     result = 'GANASTE'
//   }
//   if (computerChoice === 'Tijera' && userChoice === "Papel") {
//     result = 'PERDISTE'
//   }
//   resultDisplay.innerHTML = result
// }

const botones = document.querySelectorAll("button");
const decision = document.querySelector("#decision");
const contrincanteDisplay = document.querySelector("#contrincante");
const resultadoDisplay = document.querySelector("#resultado");
let computadora
let decisionUsuario
let resultado

botones.forEach((boton) => boton.addEventListener("click", (e) => {
    decisionUsuario = e.target.id
    decision.innerHTML = decisionUsuario.toUpperCase()
    decisionComputadora();
    obtenerResultado();
})
)

function decisionComputadora() {
    const numeroAleatorio = Math.floor(Math.random() * 3) + 1
    if (numeroAleatorio === 1) {
        computadora = "piedra"
    }
    if (numeroAleatorio === 2) {
        computadora = "papel"
    }
    if (numeroAleatorio === 3) {
        computadora = "tijera"
    }
    contrincanteDisplay.innerHTML = computadora.toUpperCase()

}

function obtenerResultado(){
    if (computadora === decisionUsuario) {
        resultado = "EMPATE"
    }
    if (computadora === "piedra" && decisionUsuario === "tijera") {
        resultado = "PERDISTE"
    }
    if (computadora === "piedra" && decisionUsuario === "papel") {
        resultado = "GANASTE"
    }
    if (computadora === "tijera" && decisionUsuario === "papel") {
        resultado = "PERDISTE"
    }
    if (computadora === "tijera" && decisionUsuario === "piedra") {
        resultado = "GANASTE"
    }
    if (computadora === "papel" && decisionUsuario === "piedra") {
        resultado = "PERDISTE"
    }
    if (computadora === "papel" && decisionUsuario === "tijera") {
        resultado = "GANASTE"
    }
    resultadoDisplay.innerHTML = resultado

}



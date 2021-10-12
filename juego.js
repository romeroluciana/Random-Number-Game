const start = document.getElementById('start')
const game = document.querySelector(".game")

let randomNumb = Math.floor(Math.random()*100)

let submit = document.getElementById('submit')
let hint = document.getElementById('hint')
let numIngresados = document.getElementById('prevGuessLabel')
let prevGuessLabel = document.getElementById('prevGuessLabel')
let anterioressupo = document.getElementById('anterioressupo')
let restar = document.getElementById('restar')
let contador = 0

start.addEventListener('click', iniciarJuego=()=>{
    
    //game.classList.remove('game')
    game.style.display = 'block'
    start.style.display = 'none'
})
myForm.addEventListener("submit",(e) =>{
    e.preventDefault();
  });


submit.addEventListener('click', validation=()=>{
    let playerGuess = Number(document.getElementById('guess').value)
    contador++

    if(playerGuess===''){
        hint.textContent = 'Por favor ingresa un numero'
    }
    else if(playerGuess===randomNumb){
        hint.textContent = 'GANASTE'
    }
    else if(playerGuess > randomNumb){
        hint.textContent = 'El número ingresado es mayor'
    }
    else if(playerGuess < randomNumb){
        hint.textContent = 'El número ingresado es menor'
    }
    anterioressupo.textContent += playerGuess+' '

    if( contador === 10){
        game.style.display='none'
        restar.style.display='block'
        document.getElementById('gameover').textContent="Perdiste el juego"
    }

})

let reload = () =>{
    history.go(0)
}




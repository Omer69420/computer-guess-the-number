const MAX_NUMBER = 100
const MIN_NUMBER = 0

let guess

document.getElementById('too-high-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too high?
    setMessage('för högt')
})

document.getElementById('Is-correcto-btn').addEventListener('click', function() {
setMessage('Wohoo!')
})


document.getElementById('too-low-btn').addEventListener('click', function () {
    // Vad ska hända när man tryckt too low?
    setMessage('för lågt')
})



function setMessage(msg) {
    document.getElementById('message').innerText = msg
}

function start() {
    document.getElementById('before-start').style.display = 'none'
    document.querySelector('main').style.display = 'block'

    guess = 0

    // setMessage(`Is it ${guess}?`)
}

document
    .getElementById('start-btn')
    .addEventListener('click', start)


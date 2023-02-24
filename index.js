const btnStart = document.querySelector('.button-start')
const btnReset = document.querySelector('.button-reset')
const btnPause = document.querySelector('.button-pause')
const counter = document.querySelector('.timer__content-counter')

let time = 0
let interval =

btnStart.addEventListener('click', startTimer)
function startTimer () {
  btnStart.setAttribute('disabled', true)
  interval = setInterval(() => {
    time += 1
    counter.innerHTML = `${time}`
  }, 1000)
}

btnReset.addEventListener('click', resetTimer)
function resetTimer () {
  clearInterval(interval)
  time = 0
  counter.innerHTML = `${time}`
  btnStart.removeAttribute('disabled')
}

btnPause.addEventListener('click', pauseTimer)
function pauseTimer () {
  clearInterval(interval)
  btnStart.removeAttribute('disabled')
}

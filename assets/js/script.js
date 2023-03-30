let timerElement = document.querySelector('.timer')
let startButton = document.querySelector('.start-button')
const button = document.querySelector('input')

let highschore = 0
let score = 0
let isWin
let timer
let timerCount

let questions = [
  'Inside which HTML element do we put the JavaScript?',
  'Where is the correct place to insert a JavaScript?',
  'How do you create a function in JavaScript?',
  'How to write an IF statement in JavaScript?',
  ' How can you add a comment in a JavaScript?',
  'What is the correct way to write a JavaScript array?',
  'How do you round the number 7.25, to the nearest integer?',
  'JavaScript is the same as Java.',
  'Which event occurs when the user clicks on an HTML element?',
  'Is JavaScript case-sensitive?',
  'How does a WHILE loop start?',
  'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
]

if (document.addEventListener) {
  document.addEventListener('click', handleClick, false)
} else if (document.attachEvent) {
  document.attachEvent('onclick', handleClick)
}

function handleClick(event) {
  event = event || window.event
  event.target = event.target || event.srcElement

  let element = event.target

  // Climb up the document tree from the target of the event
  while (element) {
    if (element.nodeName === 'BUTTON') {
      // The user clicked on a <button> or clicked on an element inside a <button>
      showHideSection(element)
      break
    }
  }
}

function showHideSection(button) {
  // do something with button
  console.log(button.className)
  if (button.closest('.quiz')) {
    let question = button.closest('.quiz')
    if (button.closest('.true')) {
      score++
    }
    console.log(score)
    // let nextQuestion = document.getElementById(question.id).nextSibling
    let nextQuestion = question.nextSibling.nextSibling.id
    console.log(nextQuestion)
    // question.classList.remove("show")
    question.classList.add('hide')
    document.getElementById(nextQuestion).classList.remove('hide')
    // nextQuestion.classList.add("show")
  } else if (button.closest('.start')) {
    //start timer

    let header = button.closest('.start')
    header.classList.add('hide')
    document.getElementById('question-1').classList.remove('hide')
  }
}

function startGame() {
  score = o
  isWin = false
  timerCount = 60
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true
  startTimer()
}

function winGame() {}

function loseGame() {}

function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerCount--
    timerElement.textContent = timerCount
    if (timerCount >= 0) {
      // Tests if win condition is met
      if (isWin && timerCount > 0) {
        // Clears interval and stops timer
        clearInterval(timer)
        winGame()
      }
    }
    // Tests if time has run out
    if (timerCount === 0) {
      // Clears interval
      clearInterval(timer)
      loseGame()
    }
  }, 6000)
}

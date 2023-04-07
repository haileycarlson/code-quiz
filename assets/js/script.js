let timerElement = document.querySelector('.timer')
let startButton = document.querySelector('.start-button')

let highschore = 0
let score = 0
let isWin
let timer
let timerCount = 120

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
  console.log(element)
  if (element.nodeName === 'BUTTON') {
      showHideSection(element)
    } 
}

function showHideSection(button) {
  if (button.closest('.win')) {
    document.getElementById('high-score').classList.add('hide')
    document.getElementsByClassName('start')[0].classList.remove('hide')
    document.getElementsByClassName('start')[1].classList.remove('hide')
  } else if (button.closest('.quiz')) {
    // If a button was clicked in a quiz section
    let question = button.closest('.quiz')
    // Respond to right or wrong answer
    // If the right answer is clicked
    if (button.closest('.true')) {
      score++
    } else {
      // If a wrong answer is clicked
      timerCount = timerCount - 5
    }
    // Display the next question
    let nextQuestion = question.nextSibling.nextSibling.id
    question.classList.add('hide')
    if (nextQuestion) {
      // If there is a next question
      document.getElementById(nextQuestion).classList.remove('hide')
    } else {
      // If there isn't a next question
      document.getElementById(nextQuestion).classList.remove('hide')
    }
    document.getElementById(nextQuestion).classList.remove('hide')
    // If this is the last question
    if (question.id === "question-11") {
      winGame(score)
    }
    // If the button clicked was the start button
  } else if (button.closest('.start')) {
    startGame()
    let header = button.closest('.start')
    header.classList.add('hide')
    document.getElementById('question-1').classList.remove('hide')
  } else if (button.closest('.result')) {
    document.getElementById('quiz-result').classList.add('hide')
    console.log("this is a test")
    document.getElementById('high-score').classList.remove('hide') 
    let storedScore = localStorage.getItem("score")
    document.getElementById('high-win').textContent = storedScore
  }
}

function startGame() {
  score = 0
  isWin = false
  timerCount = 60
  startTimer()
}

function winGame(score) {
  clearInterval(timer)
  document.getElementById('quiz-result').classList.remove('hide')
  let timerDisplay = timerCount
  if (score > 0) {
    document.getElementById('score').textContent = timerDisplay
  } else {
    document.getElementById('score').textContent = 0
    loseGame()
  }
  timerElement.textContent = timerCount
  let scoreCheck =localStorage.getItem("score")
  if ( scoreCheck < timerDisplay){
    localStorage.setItem("score", timerDisplay)
  }
} 

function loseGame() {
  console.log("this is another test")
  // Clears interval
  clearInterval(timer)
  timer = null
  let quizDivs = document.getElementsByClassName('quiz')
  for (div of quizDivs) {
    div.classList.add('hide')
  }
  document.getElementsByClassName('start')[0].classList.remove('hide')
} // reset the game

function startTimer() {
  // Sets timer
  console.log("start timer")
  timer = setInterval(function () {
    console.log(timer)
    console.log(timerCount)
    timerCount--
    timerElement.textContent = timerCount

    if (timerCount <= 0) {
      timerCount = 0
      loseGame()
    }
  }, 1000)
}

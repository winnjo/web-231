'use strict'

// ============================================
// Timed Practice Quiz Application
// ============================================
// This application creates a timed math quiz that:
// - Collects participant first name
// - Displays a countdown timer
// - Validates answers against correct responses
// - Highlights incorrect answers
// - Shows final results

// Quiz configuration
const quizTime = 60 // Quiz duration in seconds
const correctAnswers = ['10', '4', '-6', '5', '-7'] // Correct answer for each question

// ============================================
// DOM Element References
// ============================================

// Setup form elements
const quizSetup = document.getElementById('quizSetup')
const firstName = document.getElementById('firstName')
const errorBox = document.getElementById('errorBox') // Display validation errors

// Participant summary section
const summarySection = document.getElementById('summarySection')
const summaryFirstName = document.getElementById('summaryFirstName')

// Quiz and results elements
const quizSection = document.getElementById('quizSection')
const quizClock = document.getElementById('quizClock') // Timer display
const resultsSection = document.getElementById('resultsSection')
const resultsMessage = document.getElementById('resultsMessage')

// Quiz question inputs
const questionList = document.querySelectorAll('#quizQuestions input')

// ============================================
// Application State
// ============================================
let timeLeft = quizTime // Tracks remaining time
let timerId = null // Stores interval ID for countdown

// Initialize timer display
updateClock()

// ============================================
// Event Listeners
// ============================================

// Handle quiz setup form submission
quizSetup.addEventListener('submit', function (event) {
  // Prevent default form submission behavior
  event.preventDefault()

  // Clear any previous error messages
  errorBox.textContent = ''

  // Validate that first name is provided
  if (firstName.value.trim() === '') {
    errorBox.textContent = 'Enter your first name before starting the quiz.'
    return
  }

  // Copy participant name to summary and show quiz
  summaryFirstName.textContent = firstName.value.trim()
  summarySection.classList.remove('hidden')
  quizSection.classList.remove('hidden')
  resultsSection.classList.add('hidden')

  // Initialize and start quiz with countdown timer
  resetQuiz()
  timerId = window.setInterval(countdown, 1000) // Call countdown every 1000ms
})

// ============================================
// Quiz Management Functions
// ============================================

/**
 * Reset quiz to initial state:
 * - Clear any active countdown
 * - Reset time to full duration
 * - Clear all question inputs
 * - Remove wrong answer styling
 */
function resetQuiz () {
  // Stop any existing countdown
  window.clearInterval(timerId)

  // Reset the available quiz time
  timeLeft = quizTime

  // Update the timer shown on the page
  updateClock()

  // Clear previous answers and incorrect answer styling
  clearAnswers()
  clearAnswerStyles()
}

// Clear all answers from the quiz input fields
function clearAnswers () {
  questionList.forEach(input => {
    input.value = ''
  })
}

// Remove incorrect answer styling from all input fields
function clearAnswerStyles () {
  questionList.forEach(input => {
    input.classList.remove('wronganswer')
  })
}

updateClock()

/**
 * Countdown timer function - decrements time and shows results when expired
 * Called every 1000ms during active quiz
 */
function countdown () {
  if (timeLeft === 0) {
    // Stop the timer and display the quiz results
    window.clearInterval(timerId)
    showResults()
  } else {
    // Reduce the remaining time by one second
    timeLeft--

    // Display the updated time
    updateClock()
  }
}

// Update the quiz clock with the current remaining time
function updateClock () {
  quizClock.value = timeLeft
}

updateClock()

/**
 * Check all answers, show results section, and display score message
 */
function showResults () {
  // Validate and count correct answers
  const totalCorrect = checkAnswers()

  // Display results section
  resultsSection.classList.remove('hidden')

  // Build and display results message
  resultsMessage.textContent =
    summaryFirstName.textContent +
    ', you answered ' +
    totalCorrect +
    ' out of ' +
    correctAnswers.length +
    ' correctly.'
}

/**
 * Compare user answers against correct answers:
 * - Apply "wronganswer" class to incorrect responses
 * - Removes "wronganswer" class from correct responses
 * - Returns total count of correct answers
 */
function checkAnswers () {
  let correctCount = 0

  // Check each question against its correct answer
  questionList.forEach((input, index) => {
    if (input.value.trim() === correctAnswers[index]) {
      // Correct answer - ensure styling is clean
      input.classList.remove('wronganswer')
      correctCount++
    } else {
      // Incorrect or empty answer - highlight with error styling
      input.classList.add('wronganswer')
    }
  })

  return correctCount
}

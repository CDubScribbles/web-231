"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Clifford Smith
      Date: 3/1/26

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Declare timeID (no initial value)
let timeID;

// Declare questionList using querySelectorAll
let questionList = document.querySelectorAll("div#quiz input");

// Add onclick handler to startQuiz button
startQuiz.onclick = function() {
    overlay.className = "showquiz";
    timeID = setInterval(countdown, 1000);
};

// Countdown timer function
function countdown() {
    if (timeLeft === 0) {
        // a. Stop the timer
        clearInterval(timeID);

        // b. Check how many answers were correct
        let totalCorrect = checkAnswers();

        // c. If all correct (100%)
        if (totalCorrect === correctAnswers.length) {
            window.alert("Congratulations! You got 100% on the quiz!");
        } else {
            // i. Alert number of incorrect answers
            let incorrect = questionList.length - totalCorrect;
            window.alert("You got " + incorrect + " incorrect out of " + questionList.length + " questions.");

            // ii. Reset timeLeft to full quizTime
            timeLeft = quizTime;

            // iii. Update the clock display
            quizClock.value = timeLeft;

            // iv. Hide the quiz overlay again
            overlay.className = "hidequiz";
        }
    } else {
        // Decrease timeLeft by 1 each second
        timeLeft--;
        quizClock.value = timeLeft;
    }
}

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
// and the node list for questions





















/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }
   }
   return correctCount;
}


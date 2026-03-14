"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Clifford Smith
      Date: 3/14/26

      Filename: project07-01.js
*/

// Wait until the page is fully loaded before accessing DOM elements
window.addEventListener("load", function() {

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function(e) {
    let pwd = document.getElementById("pwd").value;
    let feedback = document.getElementById("feedback");

    // Prevent normal submission so we can validate first
    e.preventDefault();

    // Clear any previous feedback
    feedback.textContent = "";

    // Create regular expressions
    let regex1 = /[A-Z]/;          // uppercase letter
    let regex2 = /[0-9]/;          // digit
    let regex3 = /[!$#%]/;         // special chars

    if (pwd.length < 8) {
        feedback.textContent = "Your password must be at least 8 characters.";
        return;  // ← STOP here — do not submit
    }

    if (!regex1.test(pwd)) {
        feedback.textContent = "Your password must include an uppercase letter.";
        return;
    }

    if (!regex2.test(pwd)) {
        feedback.textContent = "Your password must include a number.";
        return;
    }

    if (!regex3.test(pwd)) {
        feedback.textContent = "Your password must include one of the following: !$#%.";
        return;
    }

    // All checks passed → now safe to submit
    signupForm.submit();
  });
});

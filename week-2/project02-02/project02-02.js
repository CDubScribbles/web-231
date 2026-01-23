/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Clifford Smith
      Date: 1/23/2026

      Filename: project02-02.js
 */

// Function to verify that all form fields are filled in
function verifyForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name && email && phone) {
        window.alert("Thank you!");
    } else {
        window.alert("Please fill in all fields.");
    }
}

// Attach click event to run form validation on submit button
document.getElementById("submit").onclick = verifyForm;


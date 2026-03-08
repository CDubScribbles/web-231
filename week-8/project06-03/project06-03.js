"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Clifford Smith
      Date: 3/8/26

      Filename: project06-03.js
*/

// Wait until the entire page (including body elements) has loaded
window.addEventListener("load", function() { // -- note: I had to add this, and it's frustrating that the textbook did not include it. Maybe I missed the part where the author wanted us to always include it, but it's the second time I've had to do it this week. Without it, the script would not work because the elements it references had not yet loaded when the script ran.

  // Declare variable to reference the "Use same as shipping" checkbox
  let useShip = document.getElementById("useShip");

  // Add event listener to run copyShippingToBilling() when checkbox is clicked
  useShip.addEventListener("click", copyShippingToBilling);

  // Function to copy shipping values to billing fields when checkbox is checked
  function copyShippingToBilling() {
      // Only copy if the checkbox is checked
      if (useShip.checked) {
          // Copy text fields directly
          document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
          document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
          document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
          document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
          document.getElementById("cityBill").value = document.getElementById("cityShip").value;
          document.getElementById("countryBill").value = document.getElementById("countryShip").value;
          document.getElementById("codeBill").value = document.getElementById("codeShip").value;

          // Copy the selected state from shipping dropdown to billing dropdown
          document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
      }
  }

  // Select all text input fields in the form
  let formElements = document.querySelectorAll("input[type='text']");

  // Count how many text input fields were found
  let fieldCount = formElements.length;

  // Reference the error display paragraph
  let errorBox = document.getElementById("errorBox");

  // Loop through every text input and add an invalid event listener
  for (let i = 0; i < fieldCount; i++) {
      formElements[i].addEventListener("invalid", showValidationError);
  }

  // Display custom error message when any required text field is invalid
  function showValidationError(evt) {
      evt.preventDefault();
      errorBox.textContent = "Complete all highlighted fields";
  }

});
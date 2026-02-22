"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-04

      Application to determine change from a cash amount
      Author: Clifford Smith
      Date: 2/22/26

      Filename: project04-04.js
*/

// Global variables
let cashBox = document.getElementById("cash");
let billBox = document.getElementById("bill");
let changeBox = document.getElementById("change");

// Event handlers to be run when the cash or bill value changes
cashBox.addEventListener("change", runTheRegister);
billBox.addEventListener("change", runTheRegister);

// Function to reset the values in the web page
function zeroTheRegister() {
   changeBox.value = formatCurrency(0);
   document.getElementById("bill20").innerHTML = 0;
   document.getElementById("bill10").innerHTML = 0;
   document.getElementById("bill5").innerHTML = 0;
   document.getElementById("bill1").innerHTML = 0;
   document.getElementById("coin25").innerHTML = 0;
   document.getElementById("coin10").innerHTML = 0;
   document.getElementById("coin5").innerHTML = 0;
   document.getElementById("coin1").innerHTML = 0;
   document.getElementById("warning").innerHTML = "";
}

// Function to run when cash or bill is changed
function runTheRegister() {
   zeroTheRegister();

   let cash = Number(cashBox.value);
   let bill = Number(billBox.value);
   let changeValue = cash - bill;

   try {
      if (changeValue < 0) {
         throw "Cash amount doesn’t cover the bill";
      }
      changeBox.value = formatCurrency(changeValue);
      calcChange(changeValue);
   } catch (error) {
      document.getElementById("warning").innerHTML = error;
   }
}

// Function to calculate change in bills and coins
function calcChange(changeValue) {
   // Convert change to cents for integer math
   let changeCents = Math.round(changeValue * 100);

   // Bills: $20 (2000 cents)
   let bill20Amt = determineCoin(changeCents, 2000);
   changeCents -= bill20Amt * 2000;
   document.getElementById("bill20").innerHTML = bill20Amt;

   // $10 (1000 cents)
   let bill10Amt = determineCoin(changeCents, 1000);
   changeCents -= bill10Amt * 1000;
   document.getElementById("bill10").innerHTML = bill10Amt;

   // $5 (500 cents)
   let bill5Amt = determineCoin(changeCents, 500);
   changeCents -= bill5Amt * 500;
   document.getElementById("bill5").innerHTML = bill5Amt;

   // $1 (100 cents)
   let bill1Amt = determineCoin(changeCents, 100);
   changeCents -= bill1Amt * 100;
   document.getElementById("bill1").innerHTML = bill1Amt;

   // Quarters (25 cents)
   let coin25Amt = determineCoin(changeCents, 25);
   changeCents -= coin25Amt * 25;
   document.getElementById("coin25").innerHTML = coin25Amt;

   // Dimes (10 cents)
   let coin10Amt = determineCoin(changeCents, 10);
   changeCents -= coin10Amt * 10;
   document.getElementById("coin10").innerHTML = coin10Amt;

   // Nickels (5 cents)
   let coin5Amt = determineCoin(changeCents, 5);
   changeCents -= coin5Amt * 5;
   document.getElementById("coin5").innerHTML = coin5Amt;

   // Pennies (1 cent)
   let coin1Amt = determineCoin(changeCents, 1);
   document.getElementById("coin1").innerHTML = coin1Amt;
}

/* ================================================================= */

// Function to determine the largest whole number of currency units that can fit within the cash value
function determineCoin(cashValue, currencyUnit) {
   // The parseInt() function returns the integer value of the ratio
   return parseInt(cashValue / currencyUnit);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}

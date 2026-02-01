/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Clifford Smith
      Date: 2/1/26

      Filename: project02-04.js
 */

// Declare menu item prices and sales tax rate as constants
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Attach calcTotal to the onclick event of each menu item checkbox
document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

// Calculate and display the order subtotal, tax, and total
function calcTotal() {
    // a. Start cost at zero
    let cost = 0;

    // b. Get checked status of each menu item checkbox
    let buyChicken  = document.getElementById("chicken").checked;
    let buyHalibut  = document.getElementById("halibut").checked;
    let buyBurger   = document.getElementById("burger").checked;
    let buySalmon   = document.getElementById("salmon").checked;
    let buySalad    = document.getElementById("salad").checked;

    // c. Add price only if the item is checked (ternary style as shown in Figure 2-21)
    cost += buyChicken  ? CHICKEN_PRICE  : 0;
    cost += buyHalibut  ? HALIBUT_PRICE  : 0;
    cost += buyBurger   ? BURGER_PRICE   : 0;
    cost += buySalmon   ? SALMON_PRICE   : 0;
    cost += buySalad    ? SALAD_PRICE    : 0;

    // d. Display subtotal
    document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

    // e. Calculate tax
    let tax = cost * SALES_TAX;

    // f. Display tax
    document.getElementById("foodTax").innerHTML = formatCurrency(tax);

    // g. Calculate grand total
    let totalCost = cost + tax;

    // h. Display grand total
    document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}

// Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }

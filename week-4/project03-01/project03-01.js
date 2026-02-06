/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Clifford Smith
      Date: 2/6/26

      Filename: project03-01.js
*/

// Collect all elements with the class "menuItem"
let menuItems = document.getElementsByClassName("menuItem");

// Loop through all menu items and add click event listeners
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = calcTotal;
}

// Calculate the total cost of the selected menu items
function calcTotal() {
    // a. Start with total at zero
    let orderTotal = 0;

    // b. Loop through all menu items and add prices of checked ones
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].checked) {
            orderTotal += Number(menuItems[i].value);
        }
    }

    // c. Display the formatted total in the billTotal element
    document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }
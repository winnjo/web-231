/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Winston Jo
      Date:   9/3/2026

      Filename: project03-01.js
*/

// Store menu item prices in an array
let menuItems = document.getElementsByClassName('menuItem')

// Add click event listeners to each menu item
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', calcTotal)
}

// Calculate the customer's total order
function calcTotal () {
  let total = 0

  // Loop through items
  for (let i = 0; i < menuItems.length; i++) {
    // Check if the item is selected
    if (menuItems[i].checked) {
      // Add the item's price to the total
      total += Number(menuItems[i].value)
    }
  }

  // Display using formatCurrency function
  document.getElementById('billTotal').innerHTML = formatCurrency(total)
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency (value) {
  return '$' + value.toFixed(2)
}

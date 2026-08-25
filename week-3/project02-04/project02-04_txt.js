/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Winston Jo
      Date:  8/25/2026 

      Filename: project02-04_txt.js
 */

// Declaring and initializing variables for the cost of each item
const CHICKEN_PRICE = 10.95
const HALIBUT_PRICE = 13.95
const BURGER_PRICE = 9.95
const SALMON_PRICE = 18.95
const SALAD_PRICE = 7.95
const SALES_TAX = 0.07

// Event Handlers for calcTotal() function
document.getElementById('chicken').onclick = calcTotal
document.getElementById('halibut').onclick = calcTotal
document.getElementById('burger').onclick = calcTotal
document.getElementById('salmon').onclick = calcTotal
document.getElementById('salad').onclick = calcTotal

// Function to calculate the total cost of the order
function calcTotal () {
  // Initialize the cost variable to 0
  let cost = 0

  // Get the checked status of each menu item
  let buyChicken = document.getElementById('chicken').checked
  let buyHalibut = document.getElementById('halibut').checked
  let buyBurger = document.getElementById('burger').checked
  let buySalmon = document.getElementById('salmon').checked
  let buySalad = document.getElementById('salad').checked

  // Add the cost of each selected item to the total cost
  if (buyChicken) {
    cost += CHICKEN_PRICE
  }
  if (buyHalibut) {
    cost += HALIBUT_PRICE
  }
  if (buyBurger) {
    cost += BURGER_PRICE
  }
  if (buySalmon) {
    cost += SALMON_PRICE
  }
  if (buySalad) {
    cost += SALAD_PRICE
  }

  // Calculate the sales tax and add it to the total cost
  let tax = cost * SALES_TAX
  let total = cost + tax

  // Display the food subtotal
  document.getElementById('foodTotal').innerHTML = formatCurrency(cost)

  // Display the sales tax
  document.getElementById('foodTax').innerHTML = formatCurrency(tax)

  // Display the total bill
  document.getElementById('totalBill').innerHTML = formatCurrency(total)
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency (value) {
  return '$' + value.toFixed(2)
}

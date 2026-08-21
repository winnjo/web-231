/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Winston Jo
      Date: 8/20/2026  

      Filename: project2.js
 */

/* verifyForm function that tests if all fields are completed */
function verifyForm () {
  let name = document.getElementById('name').value
  let email = document.getElementById('email').value
  let phone = document.getElementById('phone').value

  window.alert(
    name && email && phone ? 'Thank you!' : 'Please fill in all fields.'
  )
}

/* attach event listener to the submit button */
document.getElementById('submit').addEventListener('click', verifyForm)

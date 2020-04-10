// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
/* Solution 3 */
// Turn 'str' into an array
// reduce

return str.split('').reduce((reversed, character) => {
return character + reversed
}, '') // starting intial value

// one liner:
// return str.split('').reduce((rev, char) => char + rev , '')

}

module.exports = reverse;


// ---------- Solution 1 
// Turn 'str' into an array
// Call 'reverse' method one the array
// Join the array back into a string
// Retun the result

// function reverse(str) {
// const arr = str.split('').reverse()
// return arr.join('')
// }

// could do all on one line:
// return str.split('').reverse().join('')



// ---------- Solution 2
// Create an empty string called 'reversed'
// for each charater in the provided string
    // take the character and add it to the start of the 'reversed'
// Retun the variable 'reversed'


// function reverse(str) {
//  let reversed = ''
//  for (let character of str ) {
//  reversed = character + reversed
//  }
//  return reversed
// }

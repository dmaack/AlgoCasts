// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    /* Solution 1 */
// Turn 'str' into an array
// Call 'reverse' method one the array
// Join the array back into a string
// Retun the result

// .split('') with an empty string, it takes the provided string and turns it into an array of single characters
// const arr = str.split('')
// .reverse() is reversing all the single elements in the array 
// arr.reverse()
// .join() turns the array back into a string
// return arr.join('')

// could do all on one line:
// return str.split('').reverse().join('')


    /* Solution 2 */
// Create an empty string called 'reversed'
// for each charater in the provided string
    // take the character and add it to the start of the 'reversed'
// Retun the variable 'reversed'

//let reversed = ''

// for a variable declaration (character) of the iterable object 
//for (let character of str ) {
// we add the character from for loop with the reversed items and set it to the reverse variable
//reversed = character + reversed
//}
//return reversed


    /* Solution 3 */
// Turn 'str' into an array
// reduce

return str.split('').reduce((reversed, character) => {
return character + reversed
}, '') // starting intial value

// one liner:
// return str.split('').reduce((rev, char) => char + rev , '')
}

// reverse('asdf')

module.exports = reverse;

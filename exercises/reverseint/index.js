// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let reversed = parseInt(n.toString().split('').reverse().join(''))
    // let result = Math.sign(reversed)
    // if (n < 0) {
    //     return reversed * -1
    // }

    // sign() is handling the conditional logic above
    return reversed * Math.sign(n)
    // if (result === -1) {
    //     return -reversed
    // }
}

module.exports = reverseInt;

// Gotchas + Tricks
    // we could change the number into a string with .toString()
    // math library has a built in function call Math.sign() that returns 1 if a number is positive and -1 if it is negative
    // turning a string back into a number method is parseInt()

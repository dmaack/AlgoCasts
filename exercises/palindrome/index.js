// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // My Solution
    // let reversed = str.split('').reverse().join('')
    // if (str === reversed) {
    //     return true
    // } else {
    //     return false
    // }

    // or return str === reversed

    // Alternate Solutions
    // not ideal because every() is comparing each character from the front -> back and the back -> front
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })

}

module.exports = palindrome;

// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    // -------Solution 1
    const charMap = {}
    // helper variables
    let max = 0
    let maxChar = ''

    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }

    }
    // char is the key not the value ie the 'h' 'e'
    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char]
            maxChar = char
        }
    } 

    return maxChar



    // -------FOR LOOP OPTION 1
    // for (let char of str) {
    //     charMap[char] = charMap[char] + 1 || 1
    // }

    // const chars = {}
    
    // -------FOR LOOP OPTION 2
    // for (let char of str) {
    //     if (!chars[char]) {
    //         chars[char] = 1
    //     } else {
    //         chars[char]++
    //     }
    // }
}

module.exports = maxChar;

// Common strings questions:
    // what is the most common character in the string?
    // Does the string A have the same characters as string B (is it an anagram?)
    // Does the given string have any repeated characters in it?


// We are going to convert the string into an obejct / dict that stores the number of times it occurs

// Differences between for in and for of
    // for in
        // for objects, starts, with 'o' so dont use 'o'f
    // for of
        // 